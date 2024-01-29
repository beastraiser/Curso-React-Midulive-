import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  //Revisamos todas las combinaciones ganadoras para ver si x o u ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  //revisamos si hay empate cuando no hay más espacios libres en el tablero(newBoard)
  return newBoard.every((square) => square !== null);
};
