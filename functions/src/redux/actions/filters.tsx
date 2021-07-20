import { HfFilters } from '../../constants/HfActions'

//  (99 Organizing Redux)

export const setHFPlantacionFilter = ( hftipo: string, hfgerminacion: any ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
		, hfgerminacion
	}
);

export const setHFTipo = ( hftipo: string ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
	}
);

export const setHFGerminacion = ( hfgerminacion: any ) => (
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

export const sortHFGerminacion = () => (
	{
		type: HfFilters.SORTBY_HFGERMINACION
	}
)
