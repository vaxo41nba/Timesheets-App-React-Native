import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function AppInput({ style, ...props }) {
  return <TextInput style={[styles.input, style]} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'MontserratAlternates_Regular',
  },
});
