import { HfSortby } from "../../constants/HfActions";

//  (99 Organizing Redux)

export default ( hfplantacion, filter = { hftipo: string, hfgermincion: any, sortby: HfSortby } ) =>
{
	// hfp = { hftipo: '', hfgermincion: undefined }
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
					filter.hftipo.toLowerCase() // ???????????????????????
				);
		}


		let hfgermincionMatch = true;
		/** // @TODO Revisar comparacion de fechas - https://huertify.atlassian.net/browse/HTFY-54
		if ( fhfgermincion )
		{
			hfgermincionMatch = hfplanta.hfgermincion === filter.hfgermincion;
		}
		 */
		//console.log( 'hfgermincionMatch @HTFY-54', hfgermincionMatch );


		return hftipoMatch && hfgermincionMatch;
	} ).sort( ( uno, dos ) =>
	{
		switch ( filter.sortby )
		{
			case HfSortby.HFTIPO:
				return uno.hftipo < dos.hftipo ? 1 : -1;

			default: //case HfSortby.HFGERMINACION:
				return uno.hfgermincion < dos.hfgermincion ? 1 : -1;

		}
	} );
};