import { actionRestartGame } from '../actions/actionCreators';
import { clearField } from './handler-clearField';

export const resetScore = (setCells, dispatch) => {
	dispatch(actionRestartGame());
	clearField(setCells, dispatch);
};
