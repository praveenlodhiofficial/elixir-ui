import { readFile } from "node:fs/promises";
import path from "node:path";

interface ComponentSourceProps {
  code?: string;
  filePath?: string;
}

async function readCodeFromFile(filePath: string): Promise<string | null> {
  const normalized = filePath.replace(/^[./\\]+/, "");
  const cwdCandidate = path.resolve(process.cwd(), normalized);
  const repoCandidate = path.resolve(process.cwd(), "..", "..", normalized);

  for (const candidate of [cwdCandidate, repoCandidate]) {
    try {
      return await readFile(candidate, "utf8");
    } catch {
      // Try the next candidate path.
    }
  }

  return null;
}

export async function ComponentSource({
  code,
  filePath,
}: ComponentSourceProps) {
  const resolvedCode =
    code ?? (filePath ? await readCodeFromFile(filePath) : null) ?? "";

  return (
    <pre className="text-foreground h-full overflow-x-auto bg-transparent p-4 text-sm">
      <code>{resolvedCode}</code>
    </pre>
  );
}
