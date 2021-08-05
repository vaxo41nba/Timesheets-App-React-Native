import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../AppText';

export default function TopRow() {
  return (
    <View style={styles.row}>
      <AppText style={styles.text}>13 days off</AppText>
      <AppText style={[styles.text, styles.orange]}>Pending</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  orange: {
    color: '#FF9600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
    marginHorizontal: 20,
  },
});
