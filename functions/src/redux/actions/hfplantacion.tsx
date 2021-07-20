import uuid from 'react-native-uuid';
import { HfActions } from '../../constants/HfActions'

// ADD_HFPLANTACION (99 Organizing Redux)
export const addHfPlantacion = (
	{
		hftipo = ""
		, hfcantidad = 1
		, hfgerminacion = new Date()
		, hflogin = {} // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
		, hfgeo = {} // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
	} = {}
) => (
	{
		type: HfActions.ADD_HFPLANTACION
		, hfplantacion: {
			hfid: uuid.v4()
			, hftipo
			, hfcantidad
			, hfgerminacion
			, hflogin
			, hfgeo
		}
	}
);


// EDIT_HFPLANTACION
export const editHfPlantacion = ( hfid, updates ) => ( {
	type: HfActions.EDIT_HFPLANTACION
	, hfid
	, updates
} );


// REMOVE_HFPLANTACION
export const removeHfPlantacion = ( { hfid } = {} ) => ( {
	type: HfActions.REMOVE_HFPLANTACION
	, hfid

} );
