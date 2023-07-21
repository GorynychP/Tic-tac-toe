import { dispatch } from '../store/store';

export const clearField = (setCells) => {
	setCells(Array(9).fill(''));
	dispatch('SET_CURRENT_PLAYER', 'X');
};
