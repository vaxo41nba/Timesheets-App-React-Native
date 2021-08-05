import React, { useState } from 'react';
import {
  ScrollView, StyleSheet, View, Switch,
} from 'react-native';

import Header from '../components/Header';
import Kalender from '../components/Kalender';
import Drawer from '../components/Sidebar/Drawer';
import AppButton from '../components/Buttons/AppButton';
import VacationBottom from '../components/Buttons/VacationBottom';

export default function VacationMain({ navigation }) {
  const [temporary, setTemporary] = useState(false);

  return (
    <Drawer>
      <View style={styles.container}>
        <Header title="Leave Request" />

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Kalender />
        </ScrollView>

        <Switch
          onValueChange={() => setTemporary(!temporary)}
          value={temporary}
        />

        {/* Temporary Solution */}
        {temporary && (
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'space-evenly',
            }}
          >
            <AppButton
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
              text="Team Requests"
              onPress={() => navigation.navigate('TeamLeaveRequests', 'team')}
            />
            <AppButton
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
              text="All Requests"
              onPress={() => navigation.navigate('TeamLeaveRequests', 'all')}
            />
          </View>
        )}

        <VacationBottom />
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: '10%',
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    borderColor: '#FF9600',
    borderWidth: 2,
    width: '40%',
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#848181',
    fontSize: 15,
  },
});
