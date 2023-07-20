import { store } from '../store/store';

export const clearField = (setCells /*setPlayer*/) => {
	setCells(Array(9).fill(''));
	store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' });
	// setPlayer('X');
};
