import { actionSetCurrentPlayer } from '../actions/actionCreators';

export const clearField = (setCells, dispatch) => {
	setCells(Array(9).fill(''));
	dispatch(actionSetCurrentPlayer('X'));
};
