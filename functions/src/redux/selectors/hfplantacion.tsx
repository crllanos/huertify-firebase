import { HfSortby } from "../../constants/HfActions";

//  (99 Organizing Redux)

// PROHIBIDAS las funciones exportadas anonimas, no hay manera de encontrar la llamada!!
export default ( hfplantacion, filter = { hftipo: '', hfcantidad: 1, hfgerminacion: '', sortby: HfSortby.HFTIPO } ) =>
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

		let hfcantidadMatch = true;
		if ( filter.hfcantidad > 0 )
		{
			hfcantidadMatch = hfplanta.hfcantidad >= filter.hfcantidad;
		}

		let hfgerminacionMatch = true;
		/** // @TODO Revisar comparacion de fechas - https://huertify.atlassian.net/browse/HTFY-54
		if ( fhfgerminacion )
		{
			hfgerminacionMatch = hfplanta.hfgerminacion === filter.hfgerminacion;
		}
		 */
		//console.log( 'hfgerminacionMatch @HTFY-54', hfgerminacionMatch );

		return hftipoMatch && hfcantidadMatch && hfgerminacionMatch;
	} ).sort( ( uno, dos ) =>
	{
		console.log( 'INTENTA HfSortby.HFTIPO ', filter );
		console.log( 'INTENTA HfSortby.HFTIPO ', HfSortby.HFTIPO );
		switch ( filter.sortby )
		{
			case HfSortby.HFTIPO:
				return uno.hftipo > dos.hftipo ? 1 : -1;

			case HfSortby.HFCANTIDAD:
				return uno.hfcantidad > dos.hfcantidad;

			default: //case HfSortby.HFGERMINACION:
				return uno.hfgerminacion > dos.hfgerminacion ? 1 : -1;

		}
	} );
};