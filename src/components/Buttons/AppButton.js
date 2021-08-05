import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from '../AppText';

export default function AppButton({
  buttonStyle,
  textStyle,
  text,
  color,
  disabled = false,
  medium = true,
  ...rest
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        buttonStyle,
        disabled && { backgroundColor: '#C4C3C2' },
      ]}
      {...rest}
    >
      <AppText
        medium={medium}
        style={[
          styles.text,
          textStyle,
          color && !disabled && { color: '#FF9600' },
        ]}
      >
        {text}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 40,
    borderColor: '#9F9D9B',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    color: '#9F9D9B',
  },
});
