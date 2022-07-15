import React, {useContext} from "react";
import { View, Text } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import { AuthContext } from "../utils/auth";


const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {splashLoading ? (
          <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        ) : userInfo.auth_token ? (
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        ) : (
          <>
          <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
          </>
        )}
        {/* //<Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        //<Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        //<Stack.Screen name="Home" component={HomeScreen}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
