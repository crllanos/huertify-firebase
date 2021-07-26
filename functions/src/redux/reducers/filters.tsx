import { HfFilters, HfSortby } from '../../constants/HfActions'

// filters reducer (99 Organizing Redux)

const filtersReducerDefaultState = {
	hftipo: "string"
	, hfgerminacion: {}
	, sortBy: HfSortby.HFTIPO
};

export default ( state = filtersReducerDefaultState, action ) =>
{
	console.log( "reducers/filter.tsx action", action );

	switch ( action.type )
	{
		case HfFilters.SET_HFTIPO:
			return {
				...state
				, hftipo: action.hftipo
			}

		case HfFilters.SET_HFGERMINACION:
			return {
				...state
				, hfgerminacion: action.hfgerminacion
			}

		case HfFilters.SORTBY_HFTIPO:
			return {
				...state
				, sortBy: HfSortby.HFTIPO
			}

		case HfFilters.SORTBY_HFGERMINACION:
			return {
				...state
				, sortBy: HfSortby.HFGERMINACION
			}

		default:
			return state;
	}
};