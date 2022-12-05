import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const input = await readFile(join(__dirname, "./day4.input.txt"), "utf8");

function solve() {
  return input
    .split("\n")
    .map((line) => line.split(","))
    .map(([elf1, elf2]) => {
      const [min1, max1] = elf1.split("-").map(Number);
      const [min2, max2] = elf2.split("-").map(Number);
      return (min1 >= min2 && min1 <= max2) || (min2 >= min1 && min2 <= max1)
        ? 1
        : 0;
    })
    .reduce((a, b) => a + b, 0);
}

console.log(solve());
