import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import store, { persistor,  } from '../redux/store/Store';
import { PersistGate } from 'redux-persist/integration/react';

import IntroductionScreen from '../screen/IntroductionScreen';
import SignUpIndexScreen from '../screen/SignUpIndexScreen';
import SignUpWithEmailPrimaryScreen from '../screen/SignUpWithEmailPrimaryScreen';
import SignInScreen from '../screen/SignInScreen';

export const ApplicationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='IntroductionScreen' component={IntroductionScreen} />
                        <Stack.Screen name='SignUpIndexScreen' component={SignUpIndexScreen} />
                        <Stack.Screen name='SignUpWithEmailPrimaryScreen' component={SignUpWithEmailPrimaryScreen} />
                        {/* <Stack.Screen name='SignInScreen' component={SignInScreen} /> */}
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>

    );
}
