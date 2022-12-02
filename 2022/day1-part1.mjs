import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = await readFile(join(__dirname, "./day1.input.txt"), "utf8");
console.log(
  input
    .split("\n\n")
    .map((line) =>
      line
        .split("\n")
        .map((num) => parseInt(num, 10))
        .reduce((a, b) => a + b, 0)
    )
    .filter((sum) => !isNaN(sum))
    .sort((a, b) => a - b)
    .reverse()
    .at(0)
);
