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
            , tipo : "Ciruelo"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        },
        {
            id : 4
            , login : {}
            , tipo : "Lechuga"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        },
        {
            id : 5
            , login : {}
            , tipo : "Apio"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        },
        {
            id : 6
            , login : {}
            , tipo : "Melissa"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        },
        {
            id : 7
            , login : {}
            , tipo : "Cannabis"
            , cantidad : 0
            , codigo : ""
            , cruzamiento : ""
            , seleccionada : true
            , geo : {}
        }
    ];

    return plantaciones;
}