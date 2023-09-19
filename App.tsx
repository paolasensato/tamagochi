import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import useUserStore from './src/stores/userStore';
import Feedback from './src/components/Feedback';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const store = useUserStore();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {store.token ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Criar Conta" component={Register} />
            </>
          )}
        </Stack.Navigator>
        <Feedback />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
