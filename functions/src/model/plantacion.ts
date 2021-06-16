export default class Plantacion {
    id: number= 0;                  // id interno
    fec_germina : Date = new Date();

    login: any = {}                 // de quien es
    tipo: string = ""               // Qué es?
    cantidad: number = 0            // Cuántas son?

    codigo : string = ""            // pro
    cruzamiento : string = ""       // pro
    seleccionada : boolean = true   // pro

    geo : any = {}                  // Ubicación

    constructor(cantidad: number, tipo: string){
		this.cantidad = cantidad;
		this.tipo = tipo;
    }

};

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