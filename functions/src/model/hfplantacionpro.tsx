import HfPlantacion from './hfplantacion';
/**
 * Plantacion pro
 * 
 */
export default class PlantacionPro extends HfPlantacion {
	hf_codigo: string = "";
	hf_cruzamiento: string = "";
	hf_seleccionada: boolean = true;

	constructor(cantidad: number
		, tipo: string
		, fecha: Date
		, codigo: string) {
		super(cantidad, tipo, fecha, {});
		this.hf_codigo = codigo;
	}
}
