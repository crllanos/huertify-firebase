// SET_HFPLANTACION_FILTER
export const setHFPlantacionFilter = ( text = '' ) => (
	{
		type: 'SET_HFPLANTACION_FILTER'
		, text
	}
);

// SET_HFTIPO
export const setHFTipo = ( hftipo ) => (
	{
		type: 'SET_HFTIPO'
		, hftipo
	}
);


// SORT_BY_HFTIPO
export const sortByHFTipo = () => (
	{
		type: 'SORT_BY_HFTIPO'
	}
)
