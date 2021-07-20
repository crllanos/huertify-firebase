import { HfSortby } from "../../constants/HfActions";

//  (99 Organizing Redux)

export default ( hfplantacion, { el_hftipo: string = '', _hfgermincion: Date = undefined, _sortby } ) =>
{
	// hfp = { hftipo: '', hfgermincion: undefined }
	return hfplantacion.filter( ( hfplanta ) =>
	{

		console.log( 'hfplantacion', hfplantacion );
		console.log( 'hfplanta', hfplanta );
		console.log( 'el_hftipo', el_hftipo );


		let hftipoMatch = true;
		if ( hfplanta.hftipo !== '' && el_hftipo !== '' )
		{
			hftipoMatch = hfplanta.hftipo
				.toLowerCase()
				.includes(
					el_hftipo.toLowerCase() // ???????????????????????
				);
		}
		console.log( 'hftipoMatch', hftipoMatch );


		let hfgermincionMatch = true;
		if ( typeof _hfgermincion !== undefined )
		{
			hfgermincionMatch = hfplanta.hfgermincion === _hfgermincion;
		}

		console.log( 'hfgermincionMatch', hftipoMatch );


		return hftipoMatch && hfgermincionMatch;
	} ).sort( ( uno, dos ) =>
	{
		switch ( _sortby )
		{
			case HfSortby.HFTIPO:
				return uno.hftipo < dos.hftipo ? 1 : -1;

			default: //case HfSortby.HFGERMINACION:
				return uno.hfgermincion < dos.hfgermincion ? 1 : -1;

		}


	} );
};