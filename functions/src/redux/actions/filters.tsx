import { HfFilters } from '../../constants/HfActions'

//  (99 Organizing Redux)

export const setHFPlantacionFilter = ( hftipo: string, hfgerminacion: Date ) => (
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

export const setHFGerminacion = ( hfgerminacion: Date ) => (
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
