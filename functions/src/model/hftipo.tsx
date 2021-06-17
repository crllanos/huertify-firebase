/**
 * Tipo de planta
 * 
 */
export default class HfTipo {
	
	hf_tipo: string;
	hf_siembra_desde: number;
	hf_siembra_hasta: number;
	hf_dias_cosecha: number;
	hf_dias_riego: number;
	//hf_fertilizacion

	constructor(tipo: string)
	{		
		this.hf_tipo = tipo;
	}
}


/**
hf_tipo
	id
	tipo
	siembra_desde
	siembra_hasta
	cosecha_desde
	cosecha_hasta
	dias_riego
	fertilizacion




ID	Planta	Periodo de siembra	Periodo de Germinación	Periodo de Fertilización	Periodo de Poda	Periodo de Cosecha	Periodo de riego		
100	Tómate	Agosto a Octubre	10 días	?	?	120 días	2 días		
	Rabano	Septiembre a Mayo	5 días	?	?	30 días	2 días		NOTAS
	Zanahoria	Marzo a Diciembre	10 días	?	?	150 días	2 días		Periodos, en días múltiplos de 5
	Lechuga	Marzo a Agosto	10 días	?	?	150 días	2 días		"Periodo de siembra" = "recuerda que este mes puedes plantar a,b y c"
	Albahaca	Agosto a Noviembre	5 días	?	?	150 días	2 días		Acá el usuario debería cargar en la app lo que plantó (OPCIONAL)
	Apio	Agosto a Diciembre	?	?	?	60 días	2 días		"Periodo de Germinación" = "tu planta brotará en X días" (y una foto de un gatito o algo)
	Pimentón	Enero a Abril		?		240 días	2 días		"Periodo de Fertilización" = "Recuerda que tu tomate necesita fertilizantes, tus rabanos necesitan potasio, etc..."
	Zapallo italiano	Marzo a Junio				120 días	2 días		"Periodo de Poda" = "es momento de la poda" (no sé si tiene mucho sentido, en tod caso)
	Acelga	Agosto a Enero	15 días			90 días	2 días		"Periodo de Cosecha" = "Ya puedes ir cosechando tus tomates"
							2 días		"Periodo de riego" = Notificación a las 8 de la tarde (¿CUANDO Y COMO SERÍA MEJOR EL RECORDATORIO? CADA CUANTOS DIAS? MAÑANA O TARDE??
							2 días		"?" = no cacho
							2 días		"-" = no aplica (creo)
							2 días		
							2 días		
							2 días		
*/

// TODO Implementar backend
export function getHfTipo(params:string) :HfTipo[] {

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
		       tipo : "Tomates"
			, siembra_desde : 8
			, siembra_hasta : 11
			, dias_cosecha : 120
		   	, dias_riego : 3
		   	, fertilizacion : {}
	    },
	    {
		       tipo : "Tomates"
			, siembra_desde : 8
			, siembra_hasta : 11
			, dias_cosecha : 120
		   	, dias_riego : 3
		   	, fertilizacion : {}
	    }
    ];
 
	return hf_tipo;
 }