import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import InicioScreen from '../screens/01inicio/index'
import LoginScreen from '../screens/02login/index'
import MiHuertoScreen from '../screens/03mihuerto/index'
import GerminacionScreen from '../screens/04germinacion/index'
import CuantatierraScreen from '../screens/05cuantatierra/index'
import SandboxScreen from '../screens/sandbox/index'



//const Home = () => <Text style={ styles.header }>Home</Text>;

//const About = () => <Text style={ styles.header }>About</Text>;

//const Topic = ( { match } ) => (
//    <Text style={ styles.topic }>{ match.params.topicId }</Text>
//);

/**
const Topics = ( { match } ) => (
    <View>
        <Text style={ styles.header }>Topics</Text>
        <View>
            <Link
                to={ `${match.url}/rendering` }
                style={ styles.subNavItem }
                underlayColor="#f0f4f7"
            >
                <Text>Rendering with React</Text>
            </Link>
            <Link
                to={ `${match.url}/components` }
                style={ styles.subNavItem }
                underlayColor="#f0f4f7"
            >
                <Text>Components</Text>
            </Link>
            <Link
                to={ `${match.url}/props-v-state` }
                style={ styles.subNavItem }
                underlayColor="#f0f4f7"
            >
                <Text>Props v. State</Text>
            </Link>
        </View>

        <Route path={ `${match.path}/:topicId` } component={ Topic } />
        <Route
            exact
            path={ match.path }
            render={ () => (
                <Text style={ styles.topic }>Please select a topic.</Text>
            ) }
        />
    </View>
);
*/

const NativeNavigation = () => (
    <NativeRouter>
        <View style={ styles.container }>
            <View style={ styles.nav }>
                <Link to="/" underlayColor="#f0f4f7" style={ styles.navItem }>
                    <Text>Inicio</Text>
                </Link>
                <Link
                    to="/login"
                    underlayColor="#f0f4f7"
                    style={ styles.navItem }
                >
                    <Text>Login</Text>
                </Link>
                <Link
                    to="/mihuerto"
                    underlayColor="#f0f4f7"
                    style={ styles.navItem }
                >
                    <Text>Mi huerto</Text>
                </Link>
                <Link
                    to="/germinacion"
                    underlayColor="#f0f4f7"
                    style={ styles.navItem }
                >
                    <Text>Germinación</Text>
                </Link>
                <Link
                    to="/cuantatierra"
                    underlayColor="#f0f4f7"
                    style={ styles.navItem }
                >
                    <Text>Cuanta tierra..</Text>
                </Link>
                <Link
                    to="/sandbox"
                    underlayColor="#f0f4f7"
                    style={ styles.navItem }
                >
                    <Text>Sandbox</Text>
                </Link>
            </View>
            {/**
             */}


            <Route path="/" component={ InicioScreen } exact={ true } /> {/** DEFINIR MIS COMPONENTES */ }
            <Route path="/login" component={ LoginScreen } />
            <Route path="/mihuerto" component={ MiHuertoScreen } />
            <Route path="/germinacion" component={ GerminacionScreen } />
            <Route path="/cuantatierra" component={ CuantatierraScreen } />
            <Route path="/sandbox" component={ SandboxScreen } />
        </View>
    </NativeRouter>
);

const styles = StyleSheet.create( {
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
} );
/*
*/

export default NativeNavigation;