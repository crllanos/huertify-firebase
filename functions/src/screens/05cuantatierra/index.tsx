import React from "react";
import { Avatar } from "react-native-elements";
import { Text, View, ScrollView } from 'react-native';

import Estilo from '../../constants/Estilo';
import FooterHf from '../_layout/footer';



export default function GerminacionScreen({ navigation }) {
	return (
		<View style={Estilo.contenedor}>

			<Avatar rounded source={require('../../assets/images/Cucumber_leaf.png')} />
			<Text style={Estilo.h1}>Cuanta Tierra Necesita un Hombre?</Text>
			<Text style={Estilo.italic}> Lev Tólstoi, 1886.</Text>

			<ScrollView>

				<Text style={Estilo.parrafo}>Érase una vez un campesino llamado Pahom, que había trabajado dura y honestamente para su familia, pero que no tenía tierras propias, así que siempre permanecía en la pobreza. “Ocupados como estamos desde la niñez trabajando la madre tierra -pensaba a menudo- los campesinos siempre debemos morir como vivimos, sin nada propio. Las cosas serían diferentes si tuviéramos nuestra propia tierra.”</Text>
				<Text style={Estilo.parrafo}>Ahora bien, cerca de la aldea de Pahom vivía una dama, una pequeña terrateniente, que poseía una finca de ciento cincuenta hectáreas. Un invierno se difundió la noticia de que esta dama iba a vender sus tierras. Pahom oyó que un vecino suyo compraría veinticinco hectáreas y que la dama había consentido en aceptar la mitad en efectivo y esperar un año por la otra mitad.</Text>
				<Text style={Estilo.parrafo}>“Qué te parece -pensó Pahom- Esa tierra se vende, y yo no obtendré nada.”</Text>
				<Text style={Estilo.parrafo}>Así que decidió hablar con su esposa.</Text>
				<Text style={Estilo.parrafo}>-Otras personas están comprando, y nosotros también debemos comprar unas diez hectáreas. La vida se vuelve imposible sin poseer tierras propias.</Text>
				<Text style={Estilo.parrafo}>Se pusieron a pensar y calcularon cuánto podrían comprar. Tenían ahorrados cien rublos. Vendieron un potrillo y la mitad de sus abejas; contrataron a uno de sus hijos como peón y pidieron anticipos sobre la paga. Pidieron prestado el resto a un cuñado, y así juntaron la mitad del dinero de la compra. Después de eso, Pahom escogió una parcela de veinte hectáreas, donde había bosques, fue a ver a la dama e hizo la compra.</Text>
				<Text style={Estilo.parrafo}>Así que ahora Pahom tenía su propia tierra. Pidió semilla prestada, y la sembró, y obtuvo una buena cosecha. Al cabo de un año había logrado saldar sus deudas con la dama y su cuñado. Así se convirtió en terrateniente, y talaba sus propios árboles, y alimentaba su ganado en sus propios pastos. Cuando salía a arar los campos, o a mirar sus mieses o sus prados, el corazón se le llenaba de alegría. La hierba que crecía allí y las flores que florecían allí le parecían diferentes de las de otras partes. Antes, cuando cruzaba esa tierra, le parecía igual a cualquier otra, pero ahora le parecía muy distinta.</Text>
				<Text style={Estilo.parrafo}>Un día Pahom estaba sentado en su casa cuando un viajero se detuvo ante su casa. Pahom le preguntó de dónde venía, y el forastero respondió que venía de allende el Volga, donde había estado trabajando. Una palabra llevó a la otra, y el hombre comentó que había muchas tierras en venta por allá, y que muchos estaban viajando para comprarlas. Las tierras eran tan fértiles, aseguró, que el centeno era alto como un caballo, y tan tupido que cinco cortes de guadaña formaban una avilla. Comentó que un campesino había trabajado sólo con sus manos, y ahora tenía seis caballos y dos vacas.</Text>
				<Text style={Estilo.parrafo}>El corazón de Pahom se colmó de anhelo.</Text>
				<Text style={Estilo.parrafo}>“¿Por qué he de sufrir en este agujero -pensó- si se vive tan bien en otras partes? Venderé mi tierra y mi finca, y con el dinero comenzaré allá de nuevo y tendré todo nuevo”.</Text>
				<Text style={Estilo.parrafo}>Pahom vendió su tierra, su casa y su ganado, con buenas ganancias, y se mudó con su familia a su nueva propiedad. Todo lo que había dicho el campesino era cierto, y Pahom estaba en mucha mejor posición que antes. Compró muchas tierras arables y pasturas, y pudo tener las cabezas de ganado que deseaba.</Text>
				<Text style={Estilo.parrafo}>Al principio, en el ajetreo de la mudanza y la construcción, Pahom se sentía complacido, pero cuando se habituó comenzó a pensar que tampoco aquí estaba satisfecho. Quería sembrar más trigo, pero no tenía tierras suficientes para ello, así que arrendó más tierras por tres años. Fueron buenas temporadas y hubo buenas cosechas, así que Pahom ahorró dinero. Podría haber seguido viviendo cómodamente, pero se cansó de arrendar tierras ajenas todos los años, y de sufrir privaciones para ahorrar el dinero.</Text>
				<Text style={Estilo.parrafo}>“Si todas estas tierras fueran mías -pensó-, sería independiente y no sufriría estas incomodidades.”</Text>
				<Text style={Estilo.parrafo}>Un día un vendedor de bienes raíces que pasaba le comentó que acababa de regresar de la lejana tierra de los bashkirs, donde había comprado seiscientas hectáreas por sólo mil rublos.</Text>
				<Text style={Estilo.parrafo}>-</Text>
				<Text style={Estilo.parrafo}>-Sólo debes hacerte amigo de los jefes -dijo- Yo regalé como cien rublos en vestidos y alfombras, además de una caja de té, y di vino a quienes lo bebían, y obtuve la tierra por una bicoca.</Text>
				<Text style={Estilo.parrafo}>“Vaya -pensó Pahom-, allá puedo tener diez veces más tierras de las que poseo. Debo probar suerte.”</Text>
				<Text style={Estilo.parrafo}>Pahom encomendó a su familia el cuidado de la finca y emprendió el viaje, llevando consigo a su criado. Pararon en una ciudad y compraron una caja de té, vino y otros regalos, como el vendedor les había aconsejado. Continuaron viaje hasta recorrer más de quinientos kilómetros, y el séptimo día llegaron a un lugar donde los bashkirs habían instalado sus tiendas.</Text>
				<Text style={Estilo.parrafo}>En cuanto vieron a Pahom, salieron de las tiendas y se reunieron en torno al visitante. Le dieron té y kurniss, y sacrificaron una oveja y le dieron de comer. Pahom sacó presentes de su carromato y los distribuyó, y les dijo que venía en busca de tierras. Los bashkirs parecieron muy satisfechos y le dijeron que debía hablar con el jefe. Lo mandaron a buscar y le explicaron a qué había ido Pahom.</Text>
				<Text style={Estilo.parrafo}>El jefe escuchó un rato, pidió silencio con un gesto y le dijo a Pahom:</Text>
				<Text style={Estilo.parrafo}>-De acuerdo. Escoge la tierra que te plazca. Tenemos tierras en abundancia.</Text>
				<Text style={Estilo.parrafo}>-¿Y cuál será el precio? -preguntó Pahom.</Text>
				<Text style={Estilo.parrafo}>-Nuestro precio es siempre el mismo: mil rublos por día.</Text>
				<Text style={Estilo.parrafo}>Pahom no comprendió.</Text>
				<Text style={Estilo.parrafo}>-¿Un día? ¿Qué medida es ésa? ¿Cuántas hectáreas son?</Text>
				<Text style={Estilo.parrafo}>-No sabemos calcularlo -dijo el jefe-. La vendemos por día. Todo lo que puedas recorrer a pie en un día es tuyo, y el precio es mil rublos por día.</Text>
				<Text style={Estilo.parrafo}>Pahom quedó sorprendido.</Text>
				<Text style={Estilo.parrafo}>-Pero en un día se puede recorrer una vasta extensión de tierra -dijo.</Text>
				<Text style={Estilo.parrafo}>El jefe se echó a reír.</Text>
				<Text style={Estilo.parrafo}>-¡Será toda tuya! Pero con una condición. Si no regresas el mismo día al lugar donde comenzaste, pierdes el dinero.</Text>
				<Text style={Estilo.parrafo}>-¿Pero cómo debo señalar el camino que he seguido?</Text>
				<Text style={Estilo.parrafo}>-Iremos a cualquier lugar que gustes, y nos quedaremos allí. Puedes comenzar desde ese sitio y emprender tu viaje, llevando una azada contigo. Donde lo consideres necesario, deja una marca. En cada giro, cava un pozo y apila la tierra; luego iremos con un arado de pozo en pozo. Puedes hacer el recorrido que desees, pero antes que se ponga el sol debes regresar al sitio de donde partiste. Toda la tierra que cubras será tuya.</Text>
				<Text style={Estilo.parrafo}>Pahom estaba alborozado. Decidió comenzar por la mañana. Charlaron, bebieron más kurniss, comieron más oveja y bebieron más té, y así llegó la noche. Le dieron a Pahom una cama de edredón, y los bashkirs se dispersaron, prometiendo reunirse a la mañana siguiente al romper el alba y viajar al punto convenido antes del amanecer.</Text>
				<Text style={Estilo.parrafo}>Pahom se quedó acostado, pero no pudo dormirse. No dejaba de pensar en su tierra.</Text>
				<Text style={Estilo.parrafo}>“¡Qué gran extensión marcaré! -pensó-. Puedo andar fácilmente cincuenta kilómetros por día. Los días ahora son largos, y un recorrido de cincuenta kilómetros representará gran cantidad de tierra. Venderé las tierras más áridas, o las dejaré a los campesinos, pero yo escogeré la mejor y la trabajaré. Compraré dos yuntas de bueyes y contrataré dos peones más. Unas noventa hectáreas destinaré a la siembra y en el resto criaré ganado.”</Text>
				<Text style={Estilo.parrafo}>Por la puerta abierta vio que estaba rompiendo el alba.</Text>
				<Text style={Estilo.parrafo}>-Es hora de despertarlos -se dijo-. Debemos ponernos en marcha.</Text>
				<Text style={Estilo.parrafo}>Se levantó, despertó al criado (que dormía en el carromato), le ordenó uncir los caballos y fue a despertar a los bashkirs.</Text>
				<Text style={Estilo.parrafo}>-Es hora de ir a la estepa para medir las tierras -dijo.</Text>
				<Text style={Estilo.parrafo}>Los bashkirs se levantaron y se reunieron, y también acudió el jefe. Se pusieron a beber más kurniss, y ofrecieron a Pahom un poco de té, pero él no quería esperar.</Text>
				<Text style={Estilo.parrafo}>-Si hemos de ir, vayamos de una vez. Ya es hora.</Text>
				<Text style={Estilo.parrafo}>Los bashkirs se prepararon y todos se pusieron en marcha, algunos a caballo, otros en carros. Pahom iba en su carromato con el criado, y llevaba una azada. Cuando llegaron a la estepa, el cielo de la mañana estaba rojo. Subieron una loma y, apeándose de carros y caballos, se reunieron en un sitio. El jefe se acercó a Pahom y extendió el brazo hacia la planicie.</Text>
				<Text style={Estilo.parrafo}>-Todo esto, hasta donde llega la mirada, es nuestro. Puedes tomar lo que gustes.</Text>
				<Text style={Estilo.parrafo}>A Pahom le relucieron los ojos, pues era toda tierra virgen, chata como la palma de la mano y negra como semilla de amapola, y en las hondonadas crecían altos pastizales.</Text>
				<Text style={Estilo.parrafo}>El jefe se quitó la gorra de piel de zorro, la apoyó en el suelo y dijo:</Text>
				<Text style={Estilo.parrafo}>-Ésta será la marca. Empieza aquí y regresa aquí. Toda la tierra que rodees será tuya.</Text>
				<Text style={Estilo.parrafo}>Pahom sacó el dinero y lo puso en la gorra. Luego se quitó el abrigo, quedándose con su chaquetón sin mangas. Se aflojó el cinturón y lo sujetó con fuerza bajo el vientre, se puso un costal de pan en el pecho del jubón y, atando una botella de agua al cinturón, se subió la caña de las botas, empuñó la azada y se dispuso a partir. Tardó un instante en decidir el rumbo. Todas las direcciones eran tentadoras.</Text>
				<Text style={Estilo.parrafo}>-No importa -dijo al fin-. Iré hacia el sol naciente.</Text>
				<Text style={Estilo.parrafo}>Se volvió hacia el este, se desperezó y aguardó a que el sol asomara sobre el horizonte.</Text>
				<Text style={Estilo.parrafo}>“No debo perder tiempo -pensó-, pues es más fácil caminar mientras todavía está fresco.”</Text>
				<Text style={Estilo.parrafo}>Los rayos del sol no acababan de chispear sobre el horizonte cuando Pahom, azada al hombro, se internó en la estepa.</Text>
				<Text style={Estilo.parrafo}>Pahom caminaba a paso moderado. Tras avanzar mil metros se detuvo, cavó un pozo y apiló terrones de hierba para hacerlo más visible. Luego continuó, y ahora que había vencido el entumecimiento apuró el paso. Al cabo de un rato cavó otro pozo.</Text>
				<Text style={Estilo.parrafo}>Miró hacia atrás. La loma se veía claramente a la luz del sol, con la gente encima, y las relucientes llantas de las ruedas del carromato. Pahom calculó que había caminado cinco kilómetros. Estaba más cálido; se quitó el chaquetón, se lo echó al hombro y continuó la marcha. Ahora hacía más calor; miró el sol; era hora de pensar en el desayuno.</Text>
				<Text style={Estilo.parrafo}>-He recorrido el primer tramo, pero hay cuatro en un día, y todavía es demasiado pronto para virar. Pero me quitaré las botas -se dijo.</Text>
				<Text style={Estilo.parrafo}>Se sentó, se quitó las botas, se las metió en el cinturón y reanudó la marcha. Ahora caminaba con soltura.</Text>
				<Text style={Estilo.parrafo}>“Seguiré otros cinco kilómetros -pensó-, y luego giraré a la izquierda. Este lugar es tan promisorio que sería una pena perderlo. Cuanto más avanzo, mejor parece la tierra.”</Text>
				<Text style={Estilo.parrafo}>Siguió derecho por un tiempo, y cuando miró en torno, la loma era apenas visible y las personas parecían hormigas, y apenas se veía un destello bajo el sol.</Text>
				<Text style={Estilo.parrafo}>“Ah -pensó Pahom-, he avanzado bastante en esta dirección, es hora de girar. Además estoy sudando, y muy sediento.”</Text>
				<Text style={Estilo.parrafo}>Se detuvo, cavó un gran pozo y apiló hierba. Bebió un sorbo de agua y giró a la izquierda. Continuó la marcha, y la hierba era alta, y hacía mucho calor.</Text>
				<Text style={Estilo.parrafo}>Pahom comenzó a cansarse. Miró el sol y vio que era mediodía.</Text>
				<Text style={Estilo.parrafo}>“Bien -pensó-, debo descansar.”</Text>
				<Text style={Estilo.parrafo}>Se sentó, comió pan y bebió agua, pero no se acostó, temiendo quedarse dormido. Después de estar un rato sentado, siguió andando. Al principio caminaba sin dificultad, y sentía sueño, pero continuó, pensando: “Una hora de sufrimiento, una vida para disfrutarlo”.</Text>
				<Text style={Estilo.parrafo}>Avanzó un largo trecho en esa dirección, y ya iba a girar de nuevo a la izquierda cuando vio un fecundo valle. “Sería una pena excluir ese terreno -pensó-. El lino crecería bien aquí.”. Así que rodeó el valle y cavó un pozo del otro lado antes de girar. Pahom miró hacia la loma. El aire estaba brumoso y trémulo con el calor, y a través de la bruma apenas se veía a la gente de la loma.</Text>
				<Text style={Estilo.parrafo}>“¡Ah! -pensó Pahom-. Los lados son demasiado largos. Este debe ser más corto.” Y siguió a lo largo del tercer lado, apurando el paso. Miró el sol. Estaba a mitad de camino del horizonte, y Pahom aún no había recorrido tres kilómetros del tercer lado del cuadrado. Aún estaba a quince kilómetros de su meta.</Text>
				<Text style={Estilo.parrafo}>“No -pensó-, aunque mis tierras queden irregulares, ahora debo volver en línea recta. Podría alejarme demasiado, y ya tengo gran cantidad de tierra.”.</Text>
				<Text style={Estilo.parrafo}>Pahom cavó un pozo de prisa.</Text>
				<Text style={Estilo.parrafo}>Echó a andar hacia la loma, pero con dificultad. Estaba agotado por el calor, tenía cortes y magulladuras en los pies descalzos, le flaqueaban las piernas. Ansiaba descansar, pero era imposible si deseaba llegar antes del poniente. El sol no espera a nadie, y se hundía cada vez más.</Text>
				<Text style={Estilo.parrafo}>“Cielos -pensó-, si no hubiera cometido el error de querer demasiado. ¿Qué pasará si llego tarde?”</Text>
				<Text style={Estilo.parrafo}>Miró hacia la loma y hacia el sol. Aún estaba lejos de su meta, y el sol se aproximaba al horizonte.</Text>
				<Text style={Estilo.parrafo}>Pahom siguió caminando, con mucha dificultad, pero cada vez más rápido. Apuró el paso, pero todavía estaba lejos del lugar. Echó a correr, arrojó la chaqueta, las botas, la botella y la gorra, y conservó sólo la azada que usaba como bastón.</Text>
				<Text style={Estilo.parrafo}>“Ay de mí. He deseado mucho, y lo eché todo a perder. Tengo que llegar antes de que se ponga el sol.”</Text>
				<Text style={Estilo.parrafo}>El temor le quitaba el aliento. Pahom siguió corriendo, y la camisa y los pantalones empapados se le pegaban a la piel, y tenía la boca reseca. Su pecho jadeaba como un fuelle, su corazón batía como un martillo, sus piernas cedían como si no le pertenecieran. Pahom estaba abrumado por el terror de morir de agotamiento.</Text>
				<Text style={Estilo.parrafo}>Aunque temía la muerte, no podía detenerse. “Después que he corrido tanto, me considerarán un tonto si me detengo ahora”, pensó. Y siguió corriendo, y al acercarse oyó que los bashkirs gritaban y aullaban, y esos gritos le inflamaron aún más el corazón. Juntó sus últimas fuerzas y siguió corriendo.</Text>
				<Text style={Estilo.parrafo}>El hinchado y brumoso sol casi rozaba el horizonte, rojo como la sangre. Estaba muy bajo, pero Pahom estaba muy cerca de su meta. Podía ver a la gente de la loma, agitando los brazos para que se diera prisa. Veía la gorra de piel de zorro en el suelo, y el dinero, y al jefe sentado en el suelo, riendo a carcajadas.</Text>
				<Text style={Estilo.parrafo}>“Hay tierras en abundancia -pensó-, ¿pero me dejará Dios vivir en ellas? ¡He perdido la vida, he perdido la vida! ¡Nunca llegaré a ese lugar!”</Text>
				<Text style={Estilo.parrafo}>Pahom miró el sol, que ya desaparecía, ya era devorado. Con el resto de sus fuerzas apuró el paso, encorvando el cuerpo de tal modo que sus piernas apenas podían sostenerlo. Cuando llegó a la loma, de pronto oscureció. Miró el cielo. ¡El sol se había puesto! Pahom dio un alarido.</Text>
				<Text style={Estilo.parrafo}>“Todo mi esfuerzo ha sido en vano”, pensó, y ya iba a detenerse, pero oyó que los bashkirs aún gritaban, y recordó que aunque para él, desde abajo, parecía que el sol se había puesto, desde la loma aún podían verlo. Aspiró una buena bocanada de aire y corrió cuesta arriba. Allí aún había luz. Llegó a la cima y vio la gorra. Delante de ella el jefe se reía a carcajadas. Pahom soltó un grito. Se le aflojaron las piernas, cayó de bruces y tomó la gorra con las manos.</Text>
				<Text style={Estilo.parrafo}>-¡Vaya, qué sujeto tan admirable! -exclamó el jefe-. ¡Ha ganado muchas tierras!</Text>
				<Text style={Estilo.parrafo}>El criado de Pahom se acercó corriendo y trató de levantarlo, pero vio que le salía sangre de la boca. ¡Pahom estaba muerto!</Text>
				<Text style={Estilo.parrafo}>Los pakshirs chasquearon la lengua para demostrar su lástima.</Text>
				<Text style={Estilo.parrafo}>Su criado empuñó la azada y cavó una tumba para Pahom, y allí lo sepultó.</Text>
				<Text style={Estilo.parrafo}>Dos metros de la cabeza a los pies era todo lo que necesitaba.</Text>
				<Text style={Estilo.parrafo}>--</Text>
			</ScrollView>

			<FooterHf />

		</View>
	);
};