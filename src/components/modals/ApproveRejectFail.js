import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import OrangeModal from './OrangeModal';
import AppText from '../AppText';

export default function ApproveRejectFail() {
  return (
    <OrangeModal cancel title="Error">
      <View style={styles.block}>
        <AppText style={styles.text}>
          Error while sending
          {' '}
          {'\n'}
          {' '}
          Please, try again
        </AppText>
        <MaterialIcons name="error" size={50} color="#FF9600" />
      </View>
    </OrangeModal>
  );
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
});
