import React from 'react';
//import { Link } from 'react-router-dom'; // SE CAE =c
import { Button } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";



//  (102 Rendering individual) // COMO PASARLE EL navigation??
// Al quitar el borrar, queda obsoleto connect y ya no está disponible dispatch
const HfHuertoItem = ( { hfid, hftipo, hfcantidad, hfgerminacion } ) => (
    <ListItem
        key={ hfid }
        bottomDivider

        onPress={ () =>
        {
            console.log( hftipo );
            //props.navigation.navigate("UserDetailScreen", {
            //  userId: user.id,
            //});
        } }
    >
        <ListItem.Chevron />
        <Avatar
            source={ require( '../../assets/images/Cucumber_leaf.png' ) }
            rounded
        />
        <ListItem.Content>
            <ListItem.Title>{ hfcantidad } { hftipo }</ListItem.Title>
            <ListItem.Subtitle>
                Germinacion: hfgerminacion
                <Button
                    title="Ver"
                    onPress={ () =>
                    {
                        console.log( 'de alguna manera hacer un Link' );
                        // navigation.navigate( 'Germinacion', { hfid: -999, otro: 'mas' } ); // Uncaught TypeError: navigation is undefined
                    } } />
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>

);

export default HfHuertoItem;
//export default connect()( HfHuertoItem ); // Sin el botón para borrar, connect queda obsoleto