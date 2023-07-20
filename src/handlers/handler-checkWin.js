import { winCombinations } from '../constants';
export const checkWin = (updatedCells, player) => {
	console.log('Wplayer', player);
	console.log('updatedCells', updatedCells);
	return winCombinations.some((check) => {
		return check.every((index) => updatedCells[index].value === player);
	});
};
