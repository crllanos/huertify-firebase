import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import GerminacionForm from './germinacionForm'
import { editHfPlantacion } from '../../redux/actions/hfplantacion'

// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Y CÓMO LLEGA ACA???????
// Revisar videos de los formularios (74 - 82)

const GerminacionFormEdit = ( props ) =>
{
    console.log( "GerminacionFormEdit.props", props );

    return (
        <View>
            <Text>Editando plantacion "2448784b-1828-4806-aacf-20f96ae66a41" (props.match.params.hfid: props.match undefined) </Text>
            <GerminacionForm
                hfplantacion={ props.hfplantacion }
                onSubmit={ ( hfplanta ) =>
                {
                    // Dispatch the action to edit the hfplanta (108)
                    // Redirect to Huerto
                    // REVISAR VIDEOS DE LOS FORMULARIOS!!! (desde el 100 al 106)
                    console.log( 'hfplanta updated', hfplanta ); // Llega gasta aca hfplanta updated
                    //props.dispatch( editHfPlantacion( hfplanta.hfid, hfplanta ) )
                    props.dispatch( editHfPlantacion( hfplanta.hftipo, hfplanta ) )

                    // REVISAR HFID onthefly EN
                    // - actions/hfplantacion.tsx
                    // - reducers/hfplantacion.tsx

                    // PENDIENTE VOLVER AL HUERTO
                    // props.history.push( '/' ); Uncaught TypeError: props.history is undefined
                } }
            />
        </View>
    );

}

//             console.log( hfplanta.hftipo + " === Zapallo", ( hfplanta.hftipo === "Zapallo" ) );
//             // hfplanta.hfid === props.match.params.hfid
// console.log( hfplanta.hftipo + " === Zapallo", ( hfplanta.hftipo === "Zapallo" ) );
const mapStateToProps = ( state, props ) =>
{
    console.log( "mapStateToProps.state.hfplantacion", state );

    return {
        hfplantacion: state.hfplantacion.find( ( hfplanta ) => hfplanta.hftipo === "Zapallo" )
    }
}

//export default GerminacionFormEdit;
export default connect( mapStateToProps )( GerminacionFormEdit );