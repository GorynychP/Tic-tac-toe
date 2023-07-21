import { dispatch } from '../store/store';
import { clearField } from './handler-clearField';

export const resetScore = (setCells) => {
	dispatch('RESTART_GAME');
	clearField(setCells);
};
