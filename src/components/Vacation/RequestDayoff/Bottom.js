import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../../Buttons/AppButton';

export default function Bottom({ handleSubmit }) {
  return (
    <View style={styles.bottom}>
      <AppButton
        text="Submit Request"
        buttonStyle={styles.submit}
        textStyle={[styles.text, styles.white]}
        medium={false}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  submit: {
    borderRadius: 10,
    backgroundColor: '#55AE77',
    paddingHorizontal: 20,
    height: 50,
    width: null,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  white: {
    color: 'white',
  },
});
