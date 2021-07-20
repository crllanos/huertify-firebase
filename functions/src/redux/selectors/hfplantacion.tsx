import { HfSortby } from "../../constants/HfActions";

export default ( hfplantacion, { hftipo, hfgermincion, sortby } ) =>
{
	return hfplantacion.filter( ( hfp = { hftipo: '', hfgermincion: undefined } ) =>
	{
		let hftipoMatch = true;
		if ( hfp.hftipo !== '' )
		{
			hftipoMatch = hfp.hftipo
				.toLowerCase()
				.includes(
					hftipo.toLowerCase() // ???????????????????????
				);
		}
		console.log( 'hftipoMatch', hftipoMatch );


		let hfgermincionMatch = true;
		if ( typeof hfgermincion !== undefined )
		{
			hfgermincionMatch = hfp.hfgermincion === hfgermincion;
		}

		console.log( 'hfgermincionMatch', hftipoMatch );


		return hftipoMatch && hfgermincionMatch;
	} ).sort( ( uno, dos ) =>
	{
		switch ( sortby )
		{
			case HfSortby.HFTIPO:
				return uno.hftipo < dos.hftipo ? 1 : -1;

			default: //case HfSortby.HFGERMINACION:
				return uno.hfgermincion < dos.hfgermincion ? 1 : -1;

		}


	} );
};