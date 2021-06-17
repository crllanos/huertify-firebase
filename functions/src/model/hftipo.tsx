/**
 * Tipo de planta
 * 
 */
export default class HfTipo {
	
	hf_tipo: string;
	hf_siembra_desde: number;
	hf_siembra_hasta: number;
	hf_cosecha_desde: number;
	hf_cosecha_hasta: number;
	hf_dias_riego: number;
	//hf_fertilizacion

	constructor(tipo: string)
	{		
		this.hf_tipo = tipo;
	}
}
