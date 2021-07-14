import { HfSortby } from "../../constants/HfActions";

export default ( hfplantacion, { hftipo, hfgermincion, sortby } ) =>
{
	return hfplantacion.filter( ( hfp = { hftipo: '' } ) =>
	{
		const hftipoMatch = hfp.hftipo
			.toLowerCase()
			.includes(
				hftipo.toLowerCase()
			);

		const hfgermincionMatch = typeof hfgermincion !== 'number'
			&& hfp.hfgermincion === hfgermincion;

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