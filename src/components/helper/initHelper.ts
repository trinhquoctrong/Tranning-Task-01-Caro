export function initBoard(size: number) {
  return Array(size)
    .fill("")
    .map(() => Array(size).fill(""));
}
