import fs from 'fs';
import path from 'path';

export async function readFileContent(filePath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.promises.readFile(fullPath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return '';
  }
}

export async function readUsageFile(filePath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.promises.readFile(fullPath, 'utf8');
    return content;
  } catch (error) {
    console.error('Error reading usage file:', error);
    return `// Error: Could not load file from ${filePath}\n// ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

export async function readComponentFile(componentImport: string): Promise<string> {
  try {
    // Extract the relative path from the import statement
    // Example: '../../../preview/carousel2' -> 'src/app/docs/(content)/preview/carousel2.tsx'
    const relativePath = componentImport.replace(/^['"]|['"]$/g, '');
    const fullPath = path.join(process.cwd(), 'src/app/docs/(content)', relativePath + '.tsx');
    const content = await fs.promises.readFile(fullPath, 'utf8');
    return content;
  } catch (error) {
    console.error('Error reading component file:', error);
    return `// Error: Could not load component file from ${componentImport}\n// ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
} 