import { winCombinations } from '../constants';
export const checkWin = (updatedCells, player) => {
	return winCombinations.some((check) => {
		return check.every((index) => updatedCells[index].value === player);
	});
};
