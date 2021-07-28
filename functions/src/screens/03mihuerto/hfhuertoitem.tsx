import React from 'react';
import { Button } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { connect } from 'react-redux';
import { removeHfPlantacion } from '../../redux/actions/hfplantacion'

//  (102 Rendering individual)
const HfHuertoItem = ( { dispatch, hfid, hftipo, hfcantidad, hfgerminacion } ) => (
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
                    title="BORRAR"
                    onPress={ () =>
                    {
                        dispatch( removeHfPlantacion( { hfid } ) );
                    } } />
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>

);

export default connect()( HfHuertoItem );