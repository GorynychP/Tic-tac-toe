const initialState = { player: 'X' };

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			console.log('payload', payload);
			return { ...state, player: payload };
		case '..':
		case '...':
			return initialState;
		default:
			return state;
	}
};

export default reducer;
