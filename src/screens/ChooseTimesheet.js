import React from 'react';
import {
  Image, ScrollView, StyleSheet, View,
} from 'react-native';
import AppButton from '../components/Buttons/AppButton';

export default function ChooseTimesheet(/* { navigateAs } */) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {/* Timesheet Buttons */}
        <AppButton
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          text="My Timesheet"
          // onPress={() => navigateAs('worker')}
        />
        <AppButton
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          text="Team Timesheet"
          // onPress={() => navigateAs('manager')}
        />
        <AppButton
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          text="My Shifts"
        />
        <AppButton
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          text="All Shifts"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9600',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    height: 200,
    width: '80%',
    resizeMode: 'contain',
    marginVertical: 20,
    alignSelf: 'center',
  },
});
