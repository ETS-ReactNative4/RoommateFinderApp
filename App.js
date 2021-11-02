import LoginNavigation from "./navigation/LoginNavigation";
import HomeNavigation from "./navigation/HomeNavigation";
import ProfileScreen from "./screens/ProfileScreen";

import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shownSplashScreen, setShownSplashScreen] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn == false ? (
          <Stack.Screen
            name="LoginNavigation"
            component={LoginNavigation}
            options={{ headerShown: false }}
            initialParams={{
              setIsLoggedIn: setIsLoggedIn,
              shownSplashScreen: shownSplashScreen,
              setShownSplashScreen: setShownSplashScreen,
            }}
          />
        ) : (
          <Stack.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{ headerShown: false }}
            initialParams={{ setIsLoggedIn: setIsLoggedIn }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
