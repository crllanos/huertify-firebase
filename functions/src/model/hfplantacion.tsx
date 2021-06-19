import * as React from 'react';
import { Text, View, TextInput } from 'react-native';
import Estilo from '../constants/Estilo';
import RNPickerSelect from 'react-native-picker-select';

/**
 * Plantacion
 * 
 */
export default class HfPlantacion extends React.Component {
	/* 
		hf_id: number; // id interno
		hftipo: string; // Qué es?
		hf_cantidad: number; // Cuántas son?
		hf_germinacion: Date; // Fecha germiancion
	
		hf_login: any; // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
		hf_geo : any; // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
	
	 */
	/* 	constructor(hf_cantidad: number, hf_tipo: string, hf_fecha:Date, hf_props:any = {}){
			//super({...hf_props});
			this.hf_cantidad = hf_cantidad;
			this.hftipo = hf_tipo;
			this.hf_germinacion = hf_fecha;
		}
	 */
	hf_toString() {
		return `Hf: ${this.hf_cantidad} ${this.hf_tipo}`;
	}

	render() {
		return (<Text>hola {this.props.hftipo}</Text>);
	}

	hf_inputCantidad() {
		//return (<input type="text" />)
		return (
			<Text> {this.hf_cantidad} </Text>
		);
	}

	hf_inputTipo() {
		//return (<select />)
	}


};



/**


*/

export class HFPlantacionTipo extends React.Component {
	/* style={Estilo.input} */
	render() {
		return (
			<View>
				<Text style={Estilo.parrafo}>Qu&eacute; es?</Text>
				<RNPickerSelect
					onValueChange={(value) => console.log(value)}
					items={[
						{ label: 'Football', value: 'football' },
						{ label: 'Baseball', value: 'baseball' },
						{ label: 'Hockey', value: 'hockey' },
					]}
				/>
			</View>
		);
	};
}

export class HFPlantacionCantidad extends React.Component {
	render() {
		return (
			<View>
				<Text style={Estilo.parrafo}>Cu&aacute;ntas son?</Text>
				<TextInput
					style={Estilo.input}
					placeholder="numero"
				//onChangeText={(value) => handleChangeText(value, "name")}
				/>

			</View>
		);
	};
}

// https://huertify.atlassian.net/browse/HTFY-31
export class HFPlantacionUbicacion extends React.Component {
	render() {
		return (
			<View>
				<Text style={Estilo.parrafo}>Ubicación</Text>
				<TextInput
					style={Estilo.input}
					placeholder="[ ver en el mapa ]"
				//onChangeText={(value) => handleChangeText(value, "name")}
				/>

			</View>
		);
	};
}






// TODO Implementar backend
export function getPlantaciones(params: string): HfPlantacion[] {

	console.log(params);

	let plantaciones: { id: number, login: any, tipo: string, cantidad: number, codigo: string, cruzamiento: string, seleccionada: boolean, geo: any }[] = [
		{ // :Plantacion
			id: 1
			, login: {}
			, tipo: "Tomates"
			, cantidad: 0
			, codigo: ""
			, cruzamiento: ""
			, seleccionada: true
			, geo: {}
		},
		{
			id: 2
			, login: {}
			, tipo: "Albahaca"
			, cantidad: 0
			, codigo: ""
			, cruzamiento: ""
			, seleccionada: true
			, geo: {}
		},
		{
			id: 3
			, login: {}
			, tipo: "Arandanos"
			, cantidad: 0
			, codigo: ""
			, cruzamiento: ""
			, seleccionada: true
			, geo: {}
		}
	];

	return plantaciones;
}