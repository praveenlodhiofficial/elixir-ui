import fs from "fs-extra";

export async function transformImports(filePath: string) {
  let content = await fs.readFile(filePath, "utf-8");

  // Transform UI imports
  content = content.replace(/@\/ui\/(.*?)/g, "@/components/ui/$1");

  // Transform hooks
  content = content.replace(/@\/hooks\/(.*?)/g, "@/hooks/$1");

  // Transform lib
  content = content.replace(/@\/lib\/(.*?)/g, "@/lib/$1");

  await fs.writeFile(filePath, content);
}
