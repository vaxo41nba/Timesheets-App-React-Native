import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import OrangeModal from './OrangeModal';
import AppText from '../AppText';

export default function ApproveRejectSuccess() {
  return (
    <OrangeModal cancel title="Done" render={arg => arg}>
      <View style={styles.block}>
        <AppText style={styles.text}>Sent successfully</AppText>
        <MaterialIcons name="check-circle-outline" size={50} color="#20B2B2" />
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
