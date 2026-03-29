import { execSync } from "child_process";

export function installDependencies(deps: string[]) {
  if (!deps.length) return;

  console.log("📦 Installing dependencies:", deps.join(", "));

  try {
    execSync(`bun add ${deps.join(" ")}`, {
      stdio: "inherit",
    });
  } catch {
    console.log("⚠️ Bun failed, trying npm...");
    execSync(`npm install ${deps.join(" ")}`, {
      stdio: "inherit",
    });
  }
}
