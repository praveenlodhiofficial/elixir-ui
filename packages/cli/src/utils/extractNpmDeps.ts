export function extractNpmDeps(content: string): string[] {
  const importRegex = /from\s+['"]([^'"]+)['"]|import\s+['"]([^'"]+)['"]/g;

  const deps = new Set<string>();
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    let pkg = match[1] || match[2];

    if (pkg.startsWith(".") || pkg.startsWith("/") || pkg.startsWith("@/")) {
      continue;
    }

    if (pkg.includes("/")) {
      if (pkg.startsWith("@")) {
        const parts = pkg.split("/");
        pkg = parts.length >= 2 ? `${parts[0]}/${parts[1]}` : parts[0];
      } else {
        pkg = pkg.split("/")[0];
      }
    }

    if (pkg === "react" || pkg === "react-dom") continue;

    deps.add(pkg);
  }

  return Array.from(deps);
}
