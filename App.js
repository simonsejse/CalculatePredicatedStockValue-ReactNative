import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Redux */
import store from './store';
import { Provider } from 'react-redux';

/* Screens */
import HomeScreen from './screens/HomeScreen';
import PreloadScreen from './screens/PreloadScreen';
import FinalStepScreen from './screens/FinalStepScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen
              name='Preload'
              component={PreloadScreen}
              options={{ headerShown: false, presentation: 'modal' }}
            />
            <Stack.Screen
              name='FinalStep'
              component={FinalStepScreen}
              options={{ headerShown: false, presentation: 'fullScreenModal' }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </Provider>
  );
}
