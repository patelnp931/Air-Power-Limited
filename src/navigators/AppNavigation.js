import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants/AppRoutes'
import { useSelector } from 'react-redux';
import Splashscreen from '../screen/splashScreen';
import welcomeScreen from '../screen/welcomeScreen';
import dashboard from '../screen/dashboard';
import { COLORS } from '../theme/colors';

const Stack = createStackNavigator();

const AppNavigation = () => {

    const Options = {
        headerTitle: '',
        headerStyle: { backgroundColor: COLORS.backgroundColor, elevation: 0 },
    }

    const splashVisible = useSelector(state => state?.splashScreenReducer.visible)
    const welcomescreenVisible = useSelector(state => state?.welcomeScreenReducer?.showingWelcomeScreen)

    if (splashVisible) {
        return <Splashscreen />
    }
    return (
        <Stack.Navigator>
            {welcomescreenVisible ?
                <Stack.Screen name={ROUTES.WELCOMESCREEN} component={welcomeScreen} options={{ headerShown: false }} /> :
                <Stack.Screen name={ROUTES.DASHBOARD} component={dashboard} options={{ headerShown: false }} />}
        </Stack.Navigator>
    );
};

export { AppNavigation };