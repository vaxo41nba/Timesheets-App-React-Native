import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

function Status({ status, navigation }) {
  const color = () => {
    switch (status) {
      case 'Confirmed':
        return '#20B2B2';
      case 'Fill In':
        return '#FF9600';
      case 'Pending':
        return '#9F9D9B';
      case 'Rejected':
        return '#FF9600';
      default:
        return 'lightgreen';
    }
  };

  const navigate = () => {
    navigation.navigate('MyTimesheet');
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color() }]}
      onPress={navigate}
    >
      <Text style={styles.buttonText}>{status}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={30}
        color="#817F79"
        style={{ marginRight: -10 }}
      />
    </TouchableOpacity>
  );
}

export default withNavigation(Status);

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 7,

    width: 120,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    opacity: 0.7,
  },
});
