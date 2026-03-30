import fs from "fs-extra";
import path from "path";

// ROOT (monorepo root)
const ROOT = path.resolve(process.cwd(), "../../");

// SOURCE PATHS
const WEB_COMPONENTS = path.join(ROOT, "apps/web/components");

const UI_ROOT = path.join(ROOT, "packages/ui/src");
const UI_COMPONENTS = path.join(UI_ROOT, "components");
const UI_HOOKS = path.join(UI_ROOT, "hooks");
const UI_LIB = path.join(UI_ROOT, "lib");
const UI_STYLES = path.join(UI_ROOT, "styles");

// OUTPUT PATHS
const REGISTRY_DIR = path.join(process.cwd(), "registry");
const REGISTRY_FILES = path.join(process.cwd(), "registry-files");

// Ensure output dirs
await fs.ensureDir(REGISTRY_DIR);
await fs.ensureDir(REGISTRY_FILES);

// -----------------------------
// 🔍 Extract dependency import sources
// -----------------------------
function extractDependencySources(content: string) {
  const sources = new Set<string>();

  const fromImportRegex = /from\s+["']([^"']+)["']/g;
  const sideEffectImportRegex = /import\s+["']([^"']+)["']/g;

  let match: RegExpExecArray | null;

  while ((match = fromImportRegex.exec(content)) !== null) {
    sources.add(match[1]);
  }

  while ((match = sideEffectImportRegex.exec(content)) !== null) {
    sources.add(match[1]);
  }

  return [...sources];
}

// -----------------------------
// 📂 Resolve actual file path
// -----------------------------
async function resolveImportPath(source: string, importerPath: string) {
  if (source.startsWith("@/")) {
    const clean = source.replace("@/", "");
    const [type, ...rest] = clean.split("/");
    const name = rest.join("/");

    const basePathByType: Record<string, string | undefined> = {
      ui: UI_COMPONENTS,
      hooks: UI_HOOKS,
      lib: UI_LIB,
      styles: UI_STYLES,
    };

    const basePath = basePathByType[type];
    if (!basePath) return null;

    const candidates = [
      path.join(basePath, name),
      path.join(basePath, `${name}.tsx`),
      path.join(basePath, `${name}.ts`),
      path.join(basePath, `${name}.css`),
      path.join(basePath, name, "index.tsx"),
      path.join(basePath, name, "index.ts"),
      path.join(basePath, name, "index.css"),
    ];

    for (const candidate of candidates) {
      if (await fs.pathExists(candidate)) return candidate;
    }

    return null;
  }

  if (source.startsWith("./") || source.startsWith("../")) {
    const resolved = path.resolve(path.dirname(importerPath), source);
    const candidates = [
      resolved,
      `${resolved}.tsx`,
      `${resolved}.ts`,
      `${resolved}.css`,
      path.join(resolved, "index.tsx"),
      path.join(resolved, "index.ts"),
      path.join(resolved, "index.css"),
    ];

    for (const candidate of candidates) {
      if (await fs.pathExists(candidate)) return candidate;
    }
  }

  return null;
}

function getTargetSubDir(depPath: string) {
  if (depPath.startsWith(UI_COMPONENTS)) return "";
  if (depPath.startsWith(UI_HOOKS)) return "hooks";
  if (depPath.startsWith(UI_LIB)) return "lib";
  if (depPath.startsWith(UI_STYLES)) return "styles";

  return "";
}

// -----------------------------
// 🔁 Recursive dependency resolver
// -----------------------------
async function resolveRecursive(
  filePath: string,
  targetDir: string,
  visited = new Set<string>()
) {
  if (visited.has(filePath)) return;
  visited.add(filePath);

  const content = await fs.readFile(filePath, "utf-8");
  const sources = extractDependencySources(content);

  for (const source of sources) {
    const depPath = await resolveImportPath(source, filePath);

    if (!depPath || !(await fs.pathExists(depPath))) continue;

    const subDir = getTargetSubDir(depPath);
    const targetSubDir = subDir ? path.join(targetDir, subDir) : targetDir;
    await fs.ensureDir(targetSubDir);

    const targetPath = path.join(targetSubDir, path.basename(depPath));

    await fs.copy(depPath, targetPath);

    // 🔁 recursive call
    await resolveRecursive(depPath, targetDir, visited);
  }
}

// -----------------------------
// ⚙️ Generate for WEB components
// -----------------------------
async function generateWebComponents() {
  const files = await fs.readdir(WEB_COMPONENTS);

  for (const file of files) {
    if (!file.endsWith(".tsx")) continue;

    const name = file.replace(".tsx", "");
    const filePath = path.join(WEB_COMPONENTS, file);

    const targetDir = path.join(REGISTRY_FILES, name);
    await fs.emptyDir(targetDir);

    // copy main file
    await fs.copy(filePath, path.join(targetDir, file));

    // resolve dependencies
    await resolveRecursive(filePath, targetDir);

    // JSON metadata
    const json = {
      name,
      type: "component",
      files: await generateFileList(targetDir),
    };

    await fs.writeJSON(path.join(REGISTRY_DIR, `${name}.json`), json, {
      spaces: 2,
    });

    console.log(`✔ Web Component: ${name}`);
  }
}

// -----------------------------
// ⚙️ Generate for UI components
// -----------------------------
async function generateUIComponents() {
  const files = await fs.readdir(UI_COMPONENTS);

  for (const file of files) {
    if (!file.endsWith(".tsx")) continue;

    const name = file.replace(".tsx", "");
    const filePath = path.join(UI_COMPONENTS, file);

    const targetDir = path.join(REGISTRY_FILES, name);
    await fs.emptyDir(targetDir);

    await fs.copy(filePath, path.join(targetDir, file));

    await resolveRecursive(filePath, targetDir);

    const json = {
      name,
      type: "ui",
      files: await generateFileList(targetDir),
    };

    await fs.writeJSON(path.join(REGISTRY_DIR, `${name}.json`), json, {
      spaces: 2,
    });

    console.log(`✔ UI Component: ${name}`);
  }
}

// -----------------------------
// 📦 Generate file list for JSON
// -----------------------------
async function generateFileList(dir: string) {
  const files: any[] = [];
  const knownDirs = ["lib", "hooks", "styles", "utils"];

  async function walk(current: string, base = "") {
    const entries = await fs.readdir(current);

    for (const entry of entries) {
      const fullPath = path.join(current, entry);
      const stat = await fs.stat(fullPath);

      if (stat.isDirectory()) {
        await walk(fullPath, path.join(base, entry));
      } else {
        const fullRelativePath = path.join(base, entry);
        const firstDir = base.split(path.sep)[0];
        const target =
          base && knownDirs.includes(firstDir)
            ? fullRelativePath
            : path.join("components/ui", fullRelativePath);
        files.push({
          path: fullRelativePath,
          target,
        });
      }
    }
  }

  await walk(dir);
  return files;
}

// -----------------------------
// 🚀 Run all
// -----------------------------
await generateUIComponents();
await generateWebComponents();

console.log("✅ Registry generation complete");
