import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-modal';


const PruebaModal = ( props ) =>
{
	{/* hack: (!!undefined === false) */ }

	console.log( 'props.verModal en PruebaModal', props.verModal );

	Modal.setAppElement( '#root' );

	return (
		<Modal
			onRequestClose={ props.closeModal }
			isOpen={ !!props.verModal }
			contentLabel="Prueba Modal"
		>
			<View>
				<Text>Prueba de Modal</Text>
			</View>

			{ props.texto && <View><Text>Prueba de render condicional: { props.texto } </Text></View> }

			<View>
				<Button
					title="Prueba de Modal"
					onPress={ props.closeModal } />
			</View>
		</Modal>
	);
}

export default PruebaModal;