import * as React from 'react';
import
{
	Text
	, View
	, TextInput
	, CheckBox
} from 'react-native';
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
export default class HfPlantacion
{
	// hfid: number = 0; // id interno
	hftipo: string = ""; // Qué es?
	hfcantidad: number = 1; // Cuántas son?
	hfgerminacion: Date = new Date(); // Fecha germiancion

	hflogin: any; // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
	hfgeo: any; // Ubicación - https://huertify.atlassian.net/browse/HTFY-31

};

/**
 * Login
 */
export class HFLogin extends React.Component
{
	hfplanta = {}
	constructor( props )
	{
		super( props );
		this.hfplanta = ( props.hfplanta || this.hfplanta );
	}

	render ()
	{
		return (
			<View>
				<Text style={ Estilo.parrafo }>Usuario</Text>
				<TextInput
					name="hflogin"
					style={ Estilo.input }
					placeholder={ this.hfplanta.hflogin }
					onChangeText={ ( v ) =>
					{
						//console.log('onChangeHfLogin', v);
						this.hfplanta.hflogin = v;
					}
					}
				/>
			</View>
		);
	};
}



/**
 * Tipo
 * @todo traerse la logica de HFTipo.tsx? o modularizar?
 export class HFPlantacionTipo extends React.Component
 {
}
*/

export class HFCantidad extends React.Component
{
	hfplanta = {}
	constructor( props )
	{
		super( props );
		this.hfplanta = ( props.hfplanta || this.hfplanta );
	}

	render ()
	{
		return (
			<View>
				<Text style={ Estilo.parrafo }>Cu&aacute;ntas son?</Text>
				<TextInput
					name="hfcantidad"
					style={ Estilo.input }
					placeholder={ this.hfplanta.hfcantidad }
					onChangeText={ ( v ) =>
					{
						//console.log('onChangeHfCantidad', v);
						this.hfplanta.hfcantidad = v;
					}
					}
				/>
			</View>
		);
	};
}

// https://huertify.atlassian.net/browse/HTFY-31
export class HFPlantacionUbicacion extends React.Component
{
	//const[ isSelected, setSelection ] = useState (false );
	render ()
	{
		return (
			<View>
				<Text style={ Estilo.parrafo }>Ubicación</Text>
				{/* Generar checkbox */ }
				{/* Generar checkbox */ }
				{/* Generar checkbox */ }
				{/* Generar checkbox */ }
				{/* Generar checkbox */ }
				{/* Generar checkbox */ }
				{/* Generar checkbox */ }
				<TextInput
					style={ Estilo.input }
					placeholder="[ ver en el mapa ]"
				//onChangeText={(value) => handleChangeText(value, "name")}
				/>

			</View>
		);
	};
}

/**
 * Consentimiento para compartir
 *
 * https://huertify.atlassian.net/browse/HTFY-41
 *
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 * ESTILO https://reactnative.dev/docs/checkbox
 */
export class HFPlantacionConsentimiento extends React.Component
{
	consentimiento = true;
	constructor( props )
	{
		super( props );
		this.consentimiento = ( props.consentimiento || this.consentimiento );
		this.setConsentimiento = this.setConsentimiento.bind( this )
	}

	setConsentimiento = () => this.consentimiento = !this.consentimiento;

	render ()
	{
		return (
			<View>
				<Text style={ Estilo.parrafo }> </Text>
				<CheckBox
					value={ this.consentimiento }
					onValueChange={ this.setConsentimiento }
					style={ Estilo.checkbox }
				/>
				<Text style={ Estilo.checkboxLabel }>quiero compartir la información de mi huerto.</Text>
			</View>
		);
	};
}






// TODO Implementar backend
// TODO Llevar a hfdb.js
export function getPlantaciones ( params: string ): HfPlantacion[]
{

	console.log( params );

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