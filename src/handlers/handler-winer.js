import {
	actionSetCurrentPlayer,
	actionSetScoreOPlayer,
	actionSetScoreXPlayer,
} from '../actions/actionCreators';
import { checkDraw, checkWin } from '../handlers';

export const winer = (updatedCells, player, dispatch) => {
	if (checkWin(updatedCells, player)) {
		if (player === 'X') {
			dispatch(actionSetCurrentPlayer('X winner'));
			dispatch(actionSetScoreXPlayer());
		} else {
			dispatch(actionSetCurrentPlayer('O winner'));
			dispatch(actionSetScoreOPlayer());
		}
	}
	if (checkDraw(updatedCells) && !checkWin(updatedCells, player)) {
		dispatch(actionSetCurrentPlayer('Draw game'));
	}
};
