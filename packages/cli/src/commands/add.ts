import { execSync } from "child_process";
import fs from "fs-extra";
import ora from "ora";
import path from "path";

import { extractNpmDeps } from "../utils/extractNpmDeps";
import { transformImports } from "../utils/transform";

type PackageManager = "bun" | "pnpm" | "yarn" | "npm";

type WorkspaceLayout = {
  hasSrcRoot: boolean;
};

async function detectPackageManager(
  projectRoot: string
): Promise<PackageManager> {
  if (await fs.pathExists(path.join(projectRoot, "bun.lock"))) return "bun";
  if (await fs.pathExists(path.join(projectRoot, "pnpm-lock.yaml")))
    return "pnpm";
  if (await fs.pathExists(path.join(projectRoot, "yarn.lock"))) return "yarn";
  return "npm";
}

function installCommand(pm: PackageManager, deps: string[]) {
  const depArgs = deps.join(" ");

  switch (pm) {
    case "bun":
      return `bun add ${depArgs}`;
    case "pnpm":
      return `pnpm add ${depArgs}`;
    case "yarn":
      return `yarn add ${depArgs}`;
    case "npm":
    default:
      return `npm install ${depArgs}`;
  }
}

async function detectWorkspaceLayout(
  projectRoot: string
): Promise<WorkspaceLayout> {
  const hasSrcRoot = await fs.pathExists(path.join(projectRoot, "src"));
  return { hasSrcRoot };
}

function resolveRegistryTarget(
  target: string,
  layout: WorkspaceLayout
): string {
  const normalized = target.replace(/\\/g, "/");
  const parts = normalized.split("/").filter(Boolean);

  if (parts[0] === "src") {
    parts.shift();
  }

  const [head, ...rest] = parts;
  const knownRootDirs = new Set([
    "components",
    "lib",
    "utils",
    "hooks",
    "styles",
  ]);
  const baseDir = layout.hasSrcRoot ? "src" : "";

  if (!head) {
    return path.join(baseDir, "components");
  }

  if (knownRootDirs.has(head)) {
    return path.join(baseDir, head, ...rest);
  }

  return path.join(baseDir, "components", head, ...rest);
}

export async function addComponent(components: string[]) {
  const spinner = ora("Adding components...").start();

  try {
    const projectRoot = process.cwd();
    const workspaceLayout = await detectWorkspaceLayout(projectRoot);

    // ✅ registry paths (after build)
    const registryPath = path.join(__dirname, "registry");
    const registryFilesPath = path.join(__dirname, "registry-files"); // const registryPath = path.join(__dirname, "../registry");

    // const registryFilesPath = path.join(__dirname, "../registry-files");

    const npmDeps = new Set<string>();

    for (const name of components) {
      const jsonPath = path.join(registryPath, `${name}.json`);

      // ❌ not found
      if (!(await fs.pathExists(jsonPath))) {
        spinner.warn(`Component "${name}" not found`);
        continue;
      }

      const component = await fs.readJSON(jsonPath);

      const componentFilesDir = path.join(registryFilesPath, name);

      // ❌ registry-files missing
      if (!(await fs.pathExists(componentFilesDir))) {
        spinner.fail(`Missing files for "${name}"`);
        continue;
      }

      for (const file of component.files) {
        const source = path.join(componentFilesDir, file.path);
        const mappedTarget = resolveRegistryTarget(
          file.target,
          workspaceLayout
        );
        const target = path.join(projectRoot, mappedTarget);

        await fs.ensureDir(path.dirname(target));

        // ⚠ skip if exists
        if (await fs.pathExists(target)) {
          spinner.info(`${mappedTarget} already exists`);
          continue;
        }

        await fs.copy(source, target);

        // 🔍 detect npm deps
        const content = await fs.readFile(source, "utf-8");
        const deps = extractNpmDeps(content);
        deps.forEach((d) => npmDeps.add(d));

        // 🔄 transform imports
        await transformImports(target);
      }

      spinner.succeed(`${name} added`);
    }

    // 📦 install dependencies
    if (npmDeps.size > 0) {
      const pm = await detectPackageManager(projectRoot);
      const installCmd = installCommand(pm, [...npmDeps]);

      spinner.start(`Installing dependencies...`);

      try {
        execSync(installCmd, {
          stdio: "inherit",
        });
      } catch {
        // Fallback keeps installation resilient if the detected manager fails.
        execSync(`npm install ${[...npmDeps].join(" ")}`, {
          stdio: "inherit",
        });
      }

      spinner.succeed("Dependencies installed");
    }

    spinner.stop();
  } catch (error) {
    spinner.fail("Failed to add components");
    console.error(error);
  }
}
