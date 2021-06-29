import * as React from 'react';

class Modelo
{
	// hfid: number = 0; // id interno
	hftipo: string = ""; // Qué es?
	hfcantidad: number = 1; // Cuántas son?
	hfgerminacion: Date = new Date(); // Fecha germiancion

	hflogin: any; // de quien es - Auth Firebase - https://huertify.atlassian.net/browse/HTFY-28
	hfgeo: any; // Ubicación - https://huertify.atlassian.net/browse/HTFY-31

	/* 	metodo = () =>
		{
			return `Tipo ${this.hftipo}`
		}
	 */
};
const modelo = new Modelo();
console.log( modelo );
//console.log( ns.metodo() );
