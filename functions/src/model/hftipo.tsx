/**
 * Tipo de planta
 * 
 */
export default class HfTipo {

	hf_tipo: string = "";
	hf_siembra_desde: number = 0;
	hf_siembra_hasta: number = 0;
	hf_dias_cosecha: number = 0;
	hf_dias_riego: number = 0;
	hf_fertilizacion: any = {};

	constructor(tipo: string) {
		this.hf_tipo = tipo;
	}
}



// TODO Implementar backend
export function getHfTipo(params: string): HfTipo[] {
	console.log(params);
	let hf_tipo: {
		tipo: string
		, siembra_desde: number
		, siembra_hasta: number
		, dias_cosecha: number
		, dias_riego: number
		, fertilizacion: any
	}[] = [


		{
			tipo: "Acelga"
			, siembra_desde: 8
			, siembra_hasta: 1
			, dias_cosecha: 90
			, dias_riego: 2
			, fertilizacion: {}
		},
		{
			tipo: "Zapallo italiano"
			, siembra_desde: 3
			, siembra_hasta: 6
			, dias_cosecha: 120
			, dias_riego: 2
			, fertilizacion: {}
		},
		{
			tipo: "Pimentón"
			, siembra_desde: 1
			, siembra_hasta: 4
			, dias_cosecha: 240
			, dias_riego: 3
			, fertilizacion: {}
		},
	{
				tipo: "Apio"
				, siembra_desde: 8
				, siembra_hasta: 12
				, dias_cosecha: 60
				, dias_riego: 3
				, fertilizacion: {}
			},
			{
				tipo: "Albahaca"
				, siembra_desde: 8
				, siembra_hasta: 11
				, dias_cosecha: 150
				, dias_riego: 2
				, fertilizacion: {}
			},
			{
				tipo: "Lechuga"
				, siembra_desde: 3
				, siembra_hasta: 8
				, dias_cosecha: 150
				, dias_riego: 2
				, fertilizacion: {}
			},
			{
				tipo: "Zanahoria"
				, siembra_desde: 3
				, siembra_hasta: 12
				, dias_cosecha: 150
				, dias_riego: 3
				, fertilizacion: {}
			},
			{
				tipo: "Rabano"
				, siembra_desde: 9
				, siembra_hasta: 5
				, dias_cosecha: 30
				, dias_riego: 3
				, fertilizacion: {}
			},
			{
				tipo: "Tomates"
				, siembra_desde: 8
				, siembra_hasta: 11
				, dias_cosecha: 120
				, dias_riego: 3
				, fertilizacion: {}
			}
		];

	return hf_tipo;
}