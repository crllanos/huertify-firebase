import { HfActions } from '../../constants/HfActions'

// hfplantacion reducer (99 Organizing Redux)
const hfplantacionDefaultState = []; // @todo tipo hfplantacion

// PROHIBIDAS las export default anonimas!!!
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
				if ( hfplantacion.hftipo === action.hftipo ) // hfplantacion.hfid === action.hfid hfid estan definidos onthefly, reevisar
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