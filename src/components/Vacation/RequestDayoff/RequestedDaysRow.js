import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../AppText';

export default function RequestedDaysRow() {
  return (
    <View style={styles.days}>
      <AppText style={styles.requestedDays}>Requested:</AppText>
      <AppText style={styles.requestedDays}>5 days</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  days: {
    flexDirection: 'row',
  },
  requestedDays: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    marginVertical: 30,
  },
});
