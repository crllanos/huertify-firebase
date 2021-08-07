import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import GerminacionForm from './germinacionForm'

// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Revisar videos de los formularios

const mapStateToProps = ( state, props ) =>
{
    return {
        hfplantacion: state.hfplantacion.find( ( hfplanta ) => hfplanta.hfid === props.match.params.hfid )
    }
}

const GerminacionFormEdit = ( props ) =>
{
    console.log( props );

    return (
        <View>
            <Text>Editando plantacion { props.match.params.hfid } </Text>
            <GerminacionForm
                hfplantacion={ props.hfplantacion }
                onSubmit={ ( hfplanta ) =>
                {
                    // Dispatch the action to edit the hfplanta
                    // Redirect to Huerto
                    console.log( 'hfplanta updated', hfplanta );

                } }
            />
        </View>
    );

}

//export default GerminacionFormEdit;
export default connect( mapStateToProps )( GerminacionFormEdit );