import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context"; // Cargar aca la llamada al constrctor (es 1 puta linea)

// TODO Llamadas a mis screens
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./Screens"; // TODO Llamadas a mis screens



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
    if (isLoading) {
      return <Splash />;
    }
  
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
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{
            animationEnabled: true
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
  );
  


// 2.- Drawer
const Drawer        = createDrawerNavigator();
const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Home" component={TabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
  


// Stack
const AuthStack     = createStackNavigator();
const HomeStack     = createStackNavigator();
const ProfileStack  = createStackNavigator();
const SearchStack   = createStackNavigator();

// BottomTabs
const Tabs          = createBottomTabNavigator();



const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

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

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);
















