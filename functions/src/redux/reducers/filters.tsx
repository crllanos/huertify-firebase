import { HfFilters, HfSortby } from '../../constants/HfActions'
import moment from 'moment';

// filters reducer (99 Organizing Redux)
// https://huertify.atlassian.net/browse/HTFY-54
const filtersReducerDefaultState = {
	hftipo: ""
	, hfcantidad: 1
	, hfgerminacion: moment().startOf( 'year' )
	, hfcosecha: moment().endOf( 'year' ) //Aun no estaba contemplado, pero es un buen dato!
	, sortBy: HfSortby.HFTIPO
};

export default ( state = filtersReducerDefaultState, action ) =>
{
	// console.log( "reducers/filter.tsx action", action );

	switch ( action.type )
	{
		case HfFilters.SET_HFTIPO:
			return {
				...state
				, hftipo: action.hftipo
			}

		case HfFilters.SET_HFCANTIDAD:
			return {
				...state
				, hfcantidad: action.hfcantidad
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