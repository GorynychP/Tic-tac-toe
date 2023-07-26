import ACTION_TYPE from './actionType';

const { SET_CURRENT_PLAYER, SET_SCORE_X_PLAYER, SET_SCORE_O_PLAYER, RESTART_GAME } =
	ACTION_TYPE;

export const actionSetCurrentPlayer = (player) => {
	return { type: SET_CURRENT_PLAYER, payload: player };
};
export const actionRestartGame = () => {
	return { type: RESTART_GAME, payload: null };
};
export const actionSetScoreXPlayer = () => {
	return { type: SET_SCORE_X_PLAYER, payload: null };
};
export const actionSetScoreOPlayer = () => {
	return { type: SET_SCORE_O_PLAYER, payload: null };
};
