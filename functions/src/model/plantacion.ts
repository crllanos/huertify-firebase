/**
 * Plantacion
 * 
 */
export default class Plantacion {
	hf_id: number			= 0; 	// id interno
	hf_tipo: string 		= ""; 	// Qué es?
	hf_cantidad: number 	= 0; 	// Cuántas son?
	hf_geo : any 			= {}; 	// Ubicación
	hf_login: any 			= {}; 	// de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
	hf_germinacion: Date;			// Fecha germiancion

	constructor(cantidad: number, tipo: string){
		this.hf_cantidad = cantidad;
		this.hf_tipo = tipo;
		this.hf_germinacion = new Date();
	}
};


/**
 * Plantacion pro
 * 
 */
export class PlantacionPro extends Plantacion {
	hf_codigo: string 		= "";
	hf_cruzamiento: string 	= "";
	hf_seleccionada: boolean 	= true;

	constructor(cantidad: number
			, tipo: string
			, codigo: string)
	{
		
		super(cantidad, tipo);
		this.hf_codigo = codigo;
	}

}











// TODO Implementar backend
export function getPlantaciones(params:string) :[] {

    console.log(params);   

    let plantaciones: { id: number, login: any, tipo : string, cantidad: number, codigo: string, cruzamiento: string , seleccionada: boolean, geo:any }[] = [
        { // :Plantacion
            id : 1
            , login : {}
            , tipo : "Tomates"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada  : true
            , geo : {}
        },
        {
            id : 2
            , login : {}
            , tipo : "Albahaca"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        },
        {
            id : 3
            , login : {}
            , tipo : "Arandanos"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        }
   ];

    return plantaciones;
}