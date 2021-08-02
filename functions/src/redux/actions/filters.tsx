import { HfFilters } from '../../constants/HfActions'

//  (99 Organizing Redux)
// hfgerminacion: https://huertify.atlassian.net/browse/HTFY-54
export const setHFPlantacionFilter = ( hftipo: string, hfcantidad: number, hfgerminacion: Date ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
		, hfcantidad
		, hfgerminacion
	}
);

export const setHFTipoFilter = ( hftipo: string ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
	}
);

export const setHFCantidadFilter = ( hfcantidad: number ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hfcantidad
	}
);

export const setHFGerminacionFilter = ( hfgerminacion: Date ) => (
	{
		type: HfFilters.SET_HFGERMINACION
		, hfgerminacion
	}
);

export const sortByHFTipo = () => (
	{
		type: HfFilters.SORTBY_HFTIPO
	}
)

export const sortByHFCantidad = () => (
	{
		type: HfFilters.SORTBY_HFCANTIDAD
	}
)

// PENDIENTE
// https://huertify.atlassian.net/browse/HTFY-54
export const sortHFGerminacion = () => (
	{
		type: HfFilters.SORTBY_HFGERMINACION
	}
)
