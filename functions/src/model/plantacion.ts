/**
 * Plantacion
 * 
 */
export default class Plantacion {
	id: number		= 0; 	// id interno
	tipo: string 		= ""; 	// Qué es?
	cantidad: number 	= 0; 	// Cuántas son?
	geo : any 		= {}; 	// Ubicación
	login: any 		= {}; 	// de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
	fec_germina: Date;			// Fecha germiancion

	constructor(cantidad: number, tipo: string){
		this.cantidad = cantidad;
		this.tipo = tipo;
		this.fec_germina = new Date();
	}
};


/**
 * Plantacion pro
 * 
 */
export class PlantacionPro extends Plantacion {
	codigo: string 		= "";
	cruzamiento: string 	= "";
	seleccionada: boolean 	= true;

	constructor(cantidad: number
			, tipo: string
			, codigo: string)
	{
		
		super(cantidad, tipo);
		this.codigo = codigo;
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