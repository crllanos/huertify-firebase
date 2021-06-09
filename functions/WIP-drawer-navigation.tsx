import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const AuthContext = React.createContext("TODO");



// 0.- export default
export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
  
    // TODO Implementar sing-in Google
    const authContext = React.useMemo(() => {
      return {
        signIn: () => {
          setIsLoading(false);
          setUserToken("asdf"); // debe ser un token JWT?
        },
        signUp: () => {
          setIsLoading(false);
          setUserToken("asdf");
        },
        signOut: () => {
          setIsLoading(false);
          setUserToken(null);
        }
      };
    }, []);


    // Setea un "cargando..." mula de 1 segundo. Pa que?
    React.useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);
    
    // Provisto ya por Expo
    /* if (isLoading) {
      return {} ; //<Splash />;
    }*/
  
    // Return main de la aplicacion
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  };
  




// 1.- RootStack
const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
      {
      userToken ? ( /* Si hay token (VALIDARLO!!! JWT) */
        <RootStack.Screen
          name="App"
          component={DrawerScreen} // cajonera
          options={{
            animationEnabled: true
          }}
        />
      ) : ( /* si no lo hay */
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen} // pantalla de autenticacion
          options={{
            animationEnabled: true
          }}
        />
      )}
    </RootStack.Navigator>
  );
  




// 2.- Drawer
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Home" component={BottomTabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
  



  // 4.- BottomTabs
// Botonera de abajo
const BottomTabs    = createBottomTabNavigator();

const BottomTabsScreen = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="Home" component={HomeStackScreen} />
    <BottomTabs.Screen name="Search" component={SearchStackScreen} />
  </BottomTabs.Navigator>
);








import InicioScreen from './src/screens/01inicio/index'
import LoginScreen from './src/screens/02login/index'
import MiHuertoScreen from './src/screens/03mihuerto/index'

// 3.- Stack
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={ SignIn } // TODO
      options={{ title: "Sign In" }}
      />
    {/* sign-in de Google debería solucionar esto 
    <AuthStack.Screen
    name="CreateAccount"
    component={CreateAccount}
    options={{ title: "Create Account" }}
    />
*/}
  </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
          title: route.params.name
        })}
        />
  </HomeStack.Navigator>
);

const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
    <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);
