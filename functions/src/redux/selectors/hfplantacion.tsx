import { HfSortby } from "../../constants/HfActions";

//  (99 Organizing Redux)

export default ( hfplantacion, filter = { hftipo: '', hfgerminacion: '', sortby: HfSortby.HFTIPO } ) =>
{
	// hfp = { hftipo: '', hfgerminacion: undefined }
	return hfplantacion.filter( hfplanta =>
	{
		console.log( 'selector.hfplanta', hfplanta );
		console.log( 'selector.filter', filter );


		let hftipoMatch = true;
		if ( hfplanta.hftipo !== '' && filter.hftipo !== '' )
		{
			hftipoMatch = hfplanta.hftipo
				.toLowerCase()
				.includes(
					filter.hftipo.toLowerCase()
				);
		}


		let hfgerminacionMatch = true;
		/** // @TODO Revisar comparacion de fechas - https://huertify.atlassian.net/browse/HTFY-54
		if ( fhfgerminacion )
		{
			hfgerminacionMatch = hfplanta.hfgerminacion === filter.hfgerminacion;
		}
		 */
		//console.log( 'hfgerminacionMatch @HTFY-54', hfgerminacionMatch );


		return hftipoMatch && hfgerminacionMatch;
	} ).sort( ( uno, dos ) =>
	{
		//console.log( 'INTENTA HfSortby.HFTIPO ', filter );
		//console.log( 'INTENTA HfSortby.HFTIPO ', HfSortby.HFTIPO );
		switch ( filter.sortby )
		{
			case HfSortby.HFTIPO:
				return uno.hftipo > dos.hftipo ? 1 : -1;

			default: //case HfSortby.HFGERMINACION:
				return uno.hfgerminacion < dos.hfgerminacion ? 1 : -1;

		}
	} );
};