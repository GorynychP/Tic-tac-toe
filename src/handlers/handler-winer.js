import { checkDraw, checkWin } from '../handlers';
import { dispatch } from '../store/store';

export const winer = (updatedCells, player) => {
	if (checkWin(updatedCells, player)) {
		if (player === 'X') {
			dispatch('SET_CURRENT_PLAYER', 'X winner');
			dispatch('SET_SCORE_X_PLAYER');
		} else {
			dispatch('SET_CURRENT_PLAYER', 'O winner');
			dispatch('SET_SCORE_O_PLAYER');
		}
	}
	if (checkDraw(updatedCells) && !checkWin(updatedCells, player)) {
		dispatch('SET_CURRENT_PLAYER', 'Draw game');
	}
};
