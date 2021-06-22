import * as React from 'react';
import { Text, View, TextInput } from 'react-native';
import Estilo from '../constants/Estilo';

/**
 * Plantacion
 * 
NOTAS
Periodos, en días múltiplos de 5
"Periodo de siembra" = "recuerda que este mes puedes plantar a,b y c"
Acá el usuario debería cargar en la app lo que plantó (OPCIONAL)
"Periodo de Germinación" = "tu planta brotará en X días" (y una foto de un gatito o algo)
"Periodo de Fertilización" = "Recuerda que tu tomate necesita fertilizantes, tus rabanos necesitan potasio, etc..."
"Periodo de Poda" = "es momento de la poda" (no sé si tiene mucho sentido, en tod caso)
"Periodo de Cosecha" = "Ya puedes ir cosechando tus tomates"
"Periodo de riego" = Notificación a las 8 de la tarde (¿CUANDO Y COMO SERÍA MEJOR EL RECORDATORIO? CADA CUANTOS DIAS? MAÑANA O TARDE??

*/
export default class HfPlantacion extends React.Component {
	/* 
		hfid: number; // id interno
		hftipo: string; // Qué es?
		hfcantidad: number; // Cuántas son?
		hfgerminacion: Date; // Fecha germiancion
	
		hflogin: any; // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
		hfgeo : any; // Ubicación - https://huertify.atlassian.net/browse/HTFY-31
	
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
 * Login
 */
 export class HFLogin extends React.Component
 {
	hflogin = 'usuario@ejemplo.cl';
	constructor(props){
		super(props);
		this.hflogin = (props.hflogin || this.hflogin);
	}

	render() {
		return (
			<View>
				<Text style={Estilo.parrafo}>Usuario</Text>
				<TextInput
					name="hflogin"
					style={Estilo.input}
					placeholder={this.hflogin}
					//onChangeText={(value) => handleChangeText(value, "name")}
					/>
			</View>
		);
	};
}



/**
@todo traerse la logica de HFTipo.tsx? o modularizar?
*/
export class HFPlantacionTipo extends React.Component {
}

export class HFCantidad extends React.Component
{
	hfcantidad = 1;
	constructor(props){
		super(props);
		this.hfcantidad = (props.hfcantidad || this.hfcantidad);
	}

	render() {
		return (
			<View>
				<Text style={Estilo.parrafo}>Cu&aacute;ntas son?</Text>
				<TextInput
					name="hfcantidad"
					style={Estilo.input}
					placeholder={this.hfcantidad}
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