import * as React from 'react';
import { Text, View } from 'react-native';

/**
 * Plantacion
 * 
 */
export default class HfPlantacion extends React.Component {
	hf_id: number		 = 0; // id interno
	hf_cantidad: number  = 0; // Cuántas son?
	hf_tipo: string 	 = ""; // Qué es?
	hf_germinacion: Date = new Date(); // Fecha germiancion

	hf_login: any 		 = {}; // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
	hf_geo : any 		 = {}; // Ubicación - https://huertify.atlassian.net/browse/HTFY-31

	constructor(hf_cantidad: number, hf_tipo: string, hf_fecha:Date, hf_props:any){
		super({...hf_props});
		this.hf_cantidad = hf_cantidad;
		this.hf_tipo = hf_tipo;
		this.hf_germinacion = hf_fecha;
	}

	hf_toString() {
		return 'Hf:' +  this.hf_cantidad + " " + this.hf_tipo;
	}

	render() {
		return (<Text>{ this.hf_toString() }</Text>);
	}

	hf_inputCantidad(){
		//return (<input type="text" />)
		return (
			<Text> {this.hf_cantidad} </Text>
		);
	}

	hf_inputTipo(){
		//return (<select />)
	}
 
	
};


// TODO Implementar backend
export function getPlantaciones(params:string) :HfPlantacion[] {

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