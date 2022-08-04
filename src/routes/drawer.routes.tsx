import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';


export function DrawerRoutes() {
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerStyle: {
            paddingTop: 20
          },
          drawerActiveBackgroundColor: 'green',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#FFF',
        }}
      >
        <Drawer.Screen
          name='Home'
          component={AppRoutes}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}