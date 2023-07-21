const initialState = { player: 'X', scoreX: 0, scoreO: 0 };

const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
const SET_SCORE_X_PLAYER = 'SET_SCORE_X_PLAYER';
const SET_SCORE_O_PLAYER = 'SET_SCORE_O_PLAYER';
const RESTART_GAME = 'RESTART_GAME';

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
