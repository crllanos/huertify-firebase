import React from "react";
import { View, Text } from "react-native";

const GerminacionFormEdit = ( props ) =>
{
    console.log( props );

    return (
        <View>
            <Text>Editando plantacion { props.match.params.hfid } </Text>
        </View>
    );

}

export default GerminacionFormEdit;