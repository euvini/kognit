import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/home';
import { Notifications } from '../pages/notifications';

export function AppRoutes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='notifications' component={Notifications} />
        </Stack.Navigator>
    );
}