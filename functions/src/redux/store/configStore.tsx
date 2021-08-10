import { createStore, combineReducers } from 'redux'
import hfplantacionReducer from '../reducers/hfplantacion'
import filtersReducer from '../reducers/filters'

// Store creation
export default () =>
{
	const store = createStore(
		combineReducers( {
			hfplantacion: hfplantacionReducer
			, filters: filtersReducer
		} )
		, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};