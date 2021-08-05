import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import ConfirmSwap from '../components/modals/Swaps/ConfirmSwap';
import Success from '../components/modals/Swaps/SuccessSwap';
import Fail from '../components/modals/Swaps/FailSwap';
import OrangeModal from '../components/modals/OrangeModal';

const Stack = createStackNavigator();

export default function Vacations({ confirmVisible }) {
  const title = useSelector(state => state.swap.title);
  return (
    <NavigationContainer>
      {confirmVisible && (
        <OrangeModal title={title} cancel>
          <View style={{ height: 200 }}>
            <Stack.Navigator headerMode="none" initialRouteName="Confirm">
              <Stack.Screen name="Confirm" component={ConfirmSwap} />
              <Stack.Screen name="Success" component={Success} />
              <Stack.Screen name="Fail" component={Fail} />
            </Stack.Navigator>
          </View>
        </OrangeModal>
      )}
    </NavigationContainer>
  );
}
