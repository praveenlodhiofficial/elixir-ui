import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/bin/index.ts"],
  format: ["cjs"],
  target: "node18",
  bundle: true,
  clean: true,
  outDir: "dist",
  shims: true,

  // onSuccess: "cp -r src/registry dist/registry"
  // onSuccess: "cpy \"registry/**/*\" \"registry-files/**/*\" dist --parents"
  onSuccess:
    'cpy "registry/**/*" dist/registry && cpy "registry-files/**/*" dist/registry-files',
});
