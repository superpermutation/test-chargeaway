import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {VFC} from 'react';
import {Profile, OrderHistory} from './src/screens';
import {PaymentMethods} from './src/screens/PaymentMethods';
import {ERoutes, StackScreenProps} from './src/types/navigation';

const Stack = createNativeStackNavigator<StackScreenProps>();

const App: VFC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ERoutes.Profile}
          component={Profile}
          options={{title: 'Профиль'}}
        />
        <Stack.Screen
          name={ERoutes.OrderHistory}
          component={OrderHistory}
          options={{title: 'История заказов'}}
        />
        <Stack.Screen
          name={ERoutes.PaymentMethods}
          component={PaymentMethods}
          options={{title: 'Методы оплаты'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
