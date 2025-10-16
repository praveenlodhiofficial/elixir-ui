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

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [
   ...compat.extends("next/core-web-vitals", "next/typescript"),
   // Disable ESLint rules that conflict with Prettier formatting
   eslintConfigPrettier,
   // Run Prettier as an ESLint rule (surface formatting issues in `eslint` output)
   {
      plugins: {
         prettier: pluginPrettier,
      },
      rules: {
         "prettier/prettier": "error",
      },
   },
   {
      ignores: [
         "node_modules/**",
         ".next/**",
         "out/**",
         "build/**",
         "next-env.d.ts",
         "public/registry/**",
      ],
   },
];

export default eslintConfig;
```

### 4) Scripts and lint-staged (package.json)

```json
{
   "scripts": {
      "dev": "next dev --turbopack",
      "build": "pnpm dlx shadcn@latest build --output ./public/registry && next build --turbopack",
      "start": "next start",
      "lint": "husky && eslint . --fix && prettier . -w && pnpm exec lint-staged -q",
      "build:registry": "pnpm dlx shadcn@latest build --output ./public/registry"
   },
   "lint-staged": {
      "ignore": ["public/registry/**"],
      "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
      "*.{css,md,mdx,json}": ["prettier --write"]
   }
}
```

### 5) Initialize Husky and create the pre-commit hook

```bash
pnpm run prepare
```

### 6) Husky pre-commit hook (.husky/pre-commit)

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm exec lint-staged
```

### 7) Use the workflow

```bash
# Run all quality checks & auto-fixes defined in your project
pnpm run lint
```

That’s it — commits stay clean and consistent, and Tailwind classes are always sorted.

### 5) Prettier ignore (.prettierignore)

```text
public/registry
public/registry/**
node_modules/**
.next/**
.husky/**
.vscode/**
.git/**
.gitignore
.prettierignore
.prettierrc
.prettierignore
```
