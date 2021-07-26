import { HfSortby } from "../../constants/HfActions";

//  (99 Organizing Redux)

export default ( hfplantacion, { fhftipo: string, fhfgermincion: { }, fsortby: HfSortby } ) =>
{
	// hfp = { hftipo: '', hfgermincion: undefined }
	return hfplantacion.filter( hfplanta =>
	{

		console.log( 'hfplantacion', hfplantacion );
		console.log( 'hfplanta.hftipo', hfplanta.hftipo );
		console.log( 'fhftipo', fhftipo );


		let hftipoMatch = true;
		if ( hfplanta.hftipo !== '' && fhftipo !== '' )
		{
			hftipoMatch = hfplanta.hftipo
				.toLowerCase()
				.includes(
					fhftipo.toLowerCase() // ???????????????????????
				);
		}
		console.log( 'hftipoMatch', hftipoMatch );


		let hfgermincionMatch = true;
		/** // @TODO Revisar comparacion de fechas - https://huertify.atlassian.net/browse/HTFY-54
		if ( fhfgermincion )
		{
			hfgermincionMatch = hfplanta.hfgermincion === fhfgermincion;
		}
		 */
		console.log( 'hfgermincionMatch @HTFY-54', hfgermincionMatch );


		return hftipoMatch && hfgermincionMatch;
	} ).sort( ( uno, dos ) =>
	{
		switch ( fsortby )
		{
			case HfSortby.HFTIPO:
				return uno.hftipo < dos.hftipo ? 1 : -1;

			default: //case HfSortby.HFGERMINACION:
				return uno.hfgermincion < dos.hfgermincion ? 1 : -1;

		}
	} );
};