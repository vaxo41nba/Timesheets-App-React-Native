import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ChooseTimesheetButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9600',
    borderColor: '#387C6D',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: '80%',
    marginBottom: 22,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
