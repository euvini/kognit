import 'react-native-gesture-handler';
import { StatusBar, NativeBaseProvider } from 'native-base'
import React from 'react';
import { DrawerRoutes } from './src/routes/drawer.routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <DrawerRoutes />
    </NativeBaseProvider>
  );
}