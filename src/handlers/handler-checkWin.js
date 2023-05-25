import { winCombinations } from "../constants";

export const checkWin = (arrCells, player) => {
    return winCombinations.some((check) => {
        return check.every((index) => arrCells[index].value === player);
    });
};