import ACTION_TYPE from '../actions/actionType';
const { SET_CURRENT_PLAYER, SET_SCORE_X_PLAYER, SET_SCORE_O_PLAYER, RESTART_GAME } =
	ACTION_TYPE;
const initialState = { player: 'X', scoreX: 0, scoreO: 0 };

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CURRENT_PLAYER:
			return { ...state, player: payload };
		case SET_SCORE_X_PLAYER:
			return { ...state, scoreX: state.scoreX + 1 };
		case SET_SCORE_O_PLAYER:
			return { ...state, scoreO: state.scoreO + 1 };
		case RESTART_GAME:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
