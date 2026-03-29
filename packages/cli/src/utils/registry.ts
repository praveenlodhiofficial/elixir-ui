import fs from "fs-extra";
import path from "path";

export function getRegistry(component: string) {
  const registryPath = path.join(
    __dirname,
    "../../registry",
    `${component}.json`
  );

  if (!fs.existsSync(registryPath)) {
    throw new Error(`Component ${component} not found`);
  }

  return fs.readJSONSync(registryPath);
}
