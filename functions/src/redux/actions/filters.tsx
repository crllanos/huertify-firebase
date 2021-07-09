import { HfFilters } from '../../constants/HfActions'


export const setHFPlantacionFilter = ( text = '' ) => (
	{
		type: HfFilters.SET_HFPLANTACION_FILTER
		, text
	}
);

export const setHFTipo = ( hftipo ) => (
	{
		type: HfFilters.SET_HFTIPO
		, hftipo
	}
);

export const sortByHFTipo = () => (
	{
		type: HfFilters.SORT_BY_HFTIPO
	}
)
