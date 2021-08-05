import React from 'react';
import {
  StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';

export default function SwapBottom({ text, onPress }) {
  return (
    <View style={styles.bottom}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="orange"
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#FF9600',
    borderColor: '#817F79',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,

    shadowColor: '#00000029',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
