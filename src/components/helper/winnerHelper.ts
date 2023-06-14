export function winnerHelper(board: string[][]) {
  const len = board.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j]) count++;

      if (
        board[i][j] &&
        j + 4 < len &&
        board[i][j] == board[i][j + 1] &&
        board[i][j] == board[i][j + 2] &&
        board[i][j] == board[i][j + 3] &&
        board[i][j] == board[i][j + 4]
      ) {
        return board[i][j];
      }

      if (
        board[i][j] &&
        i + 4 < len &&
        board[i][j] == board[i + 1][j] &&
        board[i][j] == board[i + 2][j] &&
        board[i][j] == board[i + 3][j] &&
        board[i][j] == board[i + 4][j]
      ) {
        return board[i][j];
      }

      if (
        board[i][j] &&
        i + 4 < len &&
        j + 4 < len &&
        board[i][j] == board[i + 1][j + 1] &&
        board[i][j] == board[i + 2][j + 2] &&
        board[i][j] == board[i + 3][j + 3] &&
        board[i][j] == board[i + 4][j + 4]
      ) {
        return board[i][j];
      }

      if (
        board[i][j] &&
        i - 4 >= 0 &&
        j + 4 < len &&
        board[i][j] == board[i - 1][j + 1] &&
        board[i][j] == board[i - 2][j + 2] &&
        board[i][j] == board[i - 3][j + 3] &&
        board[i][j] == board[i - 4][j + 4]
      ) {
        return board[i][j];
      }
    }
  }
  if (count === len * len) return "draw";

  return "";
}
