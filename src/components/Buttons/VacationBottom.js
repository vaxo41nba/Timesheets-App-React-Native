import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import AppButton from './AppButton';

function VacationBottom({ navigation }) {
  const navigate = route => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <AppButton
        text="Send Request"
        buttonStyle={[styles.orange, styles.button]}
        textStyle={styles.orangeButtonText}
        medium={false}
        onPress={() => navigate('LeaveRequest')}
      />
      <AppButton
        text="My Request"
        textStyle={styles.buttonText}
        buttonStyle={styles.button}
        medium={false}
        onPress={() => navigate('MyLeaveRequests')}
      />
    </View>
  );
}

export default withNavigation(VacationBottom);

const styles = StyleSheet.create({
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  orange: {
    backgroundColor: '#FF9600',
  },
  orangeButtonText: {
    color: 'white',
    fontSize: 15,
  },
});
