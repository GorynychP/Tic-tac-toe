import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);
export const dispatch = (type, payload) =>
	store.dispatch({ type: type, payload: payload });
