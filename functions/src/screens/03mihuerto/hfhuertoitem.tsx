import React from 'react';
import { ListItem, Avatar } from "react-native-elements";

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
            <ListItem.Subtitle>Germinacion: hfgerminacion </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>

);

export default HfHuertoItem;