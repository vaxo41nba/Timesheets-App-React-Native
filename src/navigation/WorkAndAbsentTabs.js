import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { KeyboardAvoidingView, ScrollView } from 'react-native';
import TotalWorked from '../screens/TotalWorked';
import TotalAbsent from '../screens/TotalAbsent';
import Tabs from '../components/Tabs';

const Tab = createMaterialTopTabNavigator();

export default function WorkAndAbsentTabs({ toggle }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ height: 400 }}
        tabBar={({ state, navigation, descriptors }) => (
          <Tabs
            routes={state.routes}
            navigation={navigation}
            descriptors={descriptors}
          />
        )}
      >
        <Tab.Screen name="Total Days Worked">
          {() => (
            <KeyboardAvoidingView behavior="position" enabled>
              <ScrollView>
                <TotalWorked toggle={toggle} />
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </Tab.Screen>
        <Tab.Screen name="Total Days Absent">
          {() => (
            <KeyboardAvoidingView behavior="position" enabled>
              <ScrollView>
                <TotalAbsent toggle={toggle} />
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
