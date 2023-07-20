import { checkDraw, checkWin } from '../handlers';
import { store } from '../store/store';
export const winer = (
	updatedCells,
	// player,
	// setPlayer,
	scoreX,
	scoreO,
	setScoreX,
	setScoreO,
) => {
	const { player } = store.getState();
	if (checkWin(updatedCells, player)) {
		console.log('checkWin', checkWin(updatedCells, player));
		if (player === 'X') {
			// setPlayer('X winner');
			console.log('прошел проверку по x');
			store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X winner' });
			// setScoreX(scoreX + 1);
		} else {
			// setPlayer('O winner');
			console.log('прошел проверку по o');
			store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'O winner' });
			// setScoreO(scoreO + 1);
		}
	}
	if (checkDraw(updatedCells) && !checkWin(updatedCells, player)) {
		// setPlayer('Draw game');
		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'Draw game' });
	}
};
