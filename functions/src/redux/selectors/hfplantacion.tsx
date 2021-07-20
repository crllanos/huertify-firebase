import { HfSortby } from "../../constants/HfActions";

//  (99 Organizing Redux)

export default ( hfplantacion, filter ) => // { hftipo: string = '', hfgermincion: Date = undefined, sortby = undefined }
{
	// hfp = { hftipo: '', hfgermincion: undefined }
	return hfplantacion.filter( hfplanta =>
	{

		console.log( 'hfplantacion', hfplantacion );
		console.log( 'hfplanta.hftipo', hfplanta.hftipo );
		console.log( 'filter.hftipo', filter.hftipo );
		console.log( 'filter', filter );


		let hftipoMatch = true;
		if ( hfplanta.hftipo !== '' && filter.hftipo !== '' )
		{
			hftipoMatch = hfplanta.hftipo
				.toLowerCase()
				.includes(
					filter.hftipo.toLowerCase() // ???????????????????????
				);
		}
		console.log( 'hftipoMatch', hftipoMatch );


		let hfgermincionMatch = true;
		if ( typeof filter.hfgermincion !== undefined )
		{
			hfgermincionMatch = hfplanta.hfgermincion === filter.hfgermincion;
		}
		console.log( 'hfgermincionMatch', hftipoMatch );


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