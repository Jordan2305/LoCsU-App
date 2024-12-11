import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar pantallas
import WelcomeScreen from './screens/WelcomeScreen';
import BusinessMainScreen from './screens/BusinessMainScreen';
import UserMainScreen from './screens/UserMainScreen';
import BusinessDetailsScreen from './screens/BusinessDetailsScreen';
import AppointmentDetailsScreen from './screens/AppointmentDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen 
          name="BusinessMain" 
          component={BusinessMainScreen} 
          options={{ title: 'Panel de Negocio' }}
        />
        <Stack.Screen 
          name="UserMain" 
          component={UserMainScreen} 
          options={{ title: 'Citas Disponibles' }}
        />
        <Stack.Screen 
          name="BusinessDetails" 
          component={BusinessDetailsScreen} 
          options={{ title: 'Detalles del Negocio' }}
        />
        <Stack.Screen 
          name="AppointmentDetails" 
          component={AppointmentDetailsScreen} 
          options={{ title: 'Detalles de Cita' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}