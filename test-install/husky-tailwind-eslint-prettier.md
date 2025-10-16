### Husky × ESLint × Prettier × Tailwind

Enable a consistent developer experience: Husky runs checks on commit, ESLint fixes issues, and Prettier formats code while sorting Tailwind classes via the official plugin.

## Setup

### 1) Install dev dependencies

```bash
pnpm add -D husky lint-staged prettier prettier-plugin-tailwindcss eslint-config-prettier eslint-plugin-prettier
```

### 2) Configure Prettier with Tailwind plugin (.prettierrc)

```json
{
   "semi": true,
   "singleQuote": true,
   "printWidth": 80,
   "trailingComma": "es5",
   "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 3) Integrate Prettier with ESLint (eslint.config.mjs)

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
   ...compat.extends("next/core-web-vitals", "next/typescript"),
   eslintConfigPrettier,
   {
      plugins: { prettier: pluginPrettier },
      rules: { "prettier/prettier": "error" },
   },
   {
      ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
   },
];
```

### 4) Add scripts and lint-staged (package.json)

```json
{
   "scripts": {
      "lint": "eslint .",
      "lint:fix": "eslint . --fix",
      "format": "prettier . -w",
      "tidy": "eslint . --fix && prettier . -w",
      "quality": "pnpm run prepare && pnpm run tidy && pnpm exec lint-staged -q",
      "prepare": "husky"
   },
   "lint-staged": {
      "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
      "*.{css,md,mdx,json}": ["prettier --write"]
   }
}
```

### 5) Initialize Husky and create the pre-commit hook

```bash
pnpm run prepare
```

```sh
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm exec lint-staged
```

### 6) Use the workflow

```bash
# One-shot across the repo
pnpm run quality

# Or run individually
pnpm run lint:fix
pnpm run format
```

That’s it — commits stay clean and consistent, and Tailwind classes are always sorted.
