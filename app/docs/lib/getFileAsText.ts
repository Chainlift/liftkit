import fs from "node:fs";
import path from "node:path";


export function getFileAsText(filePath: string): string {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, "utf-8");
}