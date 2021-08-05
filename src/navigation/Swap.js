import React, { useEffect, useState } from 'react';
import {
  Platform, UIManager, LayoutAnimation, View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import OrangeModal from '../components/modals/OrangeModal';
import RequestSwap from '../components/modals/Swaps/RequestSwap';
import ChoosePerson from '../components/modals/Swaps/ChoosePerson';
import ConfirmSwap from '../components/modals/Swaps/ConfirmSwap';
import Success from '../components/modals/Swaps/SuccessSwap';
import Fail from '../components/modals/Swaps/FailSwap';
import Request from '../components/modals/Swaps/RequestBody';
import Comment from '../components/modals/Swaps/CommentSwap';

const Stack = createStackNavigator();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const config = {
  duration: 700,
  // create: {
  //   property: 'opacity',
  //   type: 'easeInEaseOut',
  // },
  // delete: {
  //   property: 'opacity',
  //   type: 'easeInEaseOut',
  // },
  update: {
    type: 'easeInEaseOut',
  },
};

export default function Swap() {
  const state = useSelector(s => s.swap);
  const {
    title, visible, firstDatePickerVisible, secondDatePickerVisible,
  } = state;

  const [height, setHeight] = useState(350);
  // console.log(LayoutAnimation.Presets);

  useEffect(() => {
    if (firstDatePickerVisible || secondDatePickerVisible) {
      LayoutAnimation.configureNext(config);
      setHeight(390);
    } else {
      LayoutAnimation.configureNext(config);
      setHeight(heightFunc());
    }
  }, [title, firstDatePickerVisible, secondDatePickerVisible]);

  const heightFunc = () => {
    switch (title) {
      case 'Confirm':
        return 200;
      case 'Request for cover':
        return 240;
      case 'Done':
        return 200;
      case 'Error':
        return 200;
      case 'Accept Shift Swap':
        return 300;
      default:
        return 350;
    }
  };

  return (
    <NavigationContainer>
      {visible && (
        <OrangeModal title={title} cancel>
          <View style={{ height }}>
            <Stack.Navigator
              headerMode="none"
              initialRouteName="Request for cover"
            >
              <Stack.Screen name="Request for cover" component={RequestSwap} />
              <Stack.Screen name="Choose Person" component={ChoosePerson} />
              <Stack.Screen name="Accept Shift Swap" component={Request} />
              <Stack.Screen name="Confirm" component={ConfirmSwap} />
              <Stack.Screen name="Comment" component={Comment} />
              <Stack.Screen name="Success" component={Success} />
              <Stack.Screen name="Fail" component={Fail} />
            </Stack.Navigator>
          </View>
        </OrangeModal>
      )}
    </NavigationContainer>
  );
}
