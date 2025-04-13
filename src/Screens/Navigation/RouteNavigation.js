import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from '../ScreenA/index';
import ScreenB from '../ScreenB/index';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="screenA" component={ScreenA} />
                <Stack.Screen name="screenB" component={ScreenB} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default RouteNavigation;
