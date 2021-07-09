import { HfActions } from '../../constants/HfActions'

// hfplantacion reducer
const hfplantacionDefaultState = [];

export default ( state = hfplantacionDefaultState, action ) =>
{
	switch ( action.type )
	{
		case HfActions.ADD_HFPLANTACION:
			return [
				...state,
				action.hfplantacion
			];


		case HfActions.EDIT_HFPLANTACION:
			return state.map( ( hfplantacion ) =>
			{
				if ( hfplantacion.hfid === action.hfid )
				{
					return {
						...hfplantacion
						, ...action.updates
					}
				} else
				{
					return hfplantacion;
				}
			} );

		case HfActions.REMOVE_HFPLANTACION:
			return state.filter( ( { hfid } ) => hfid !== action.hfid );

		default:
			return state;
	}
};