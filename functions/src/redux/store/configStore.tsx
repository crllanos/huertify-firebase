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
	);

	return store;
};