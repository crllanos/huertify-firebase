import { HfFilters } from '../../constants/HfActions'


export const setHFPlantacionFilter = ( { hftipo = '', hfgerminacion } ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
		, hfgerminacion
	}
);

export const setHFTipo = ( hftipo ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
	}
);

export const setHFGerminacion = ( hfgerminacion ) => (
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
