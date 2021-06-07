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