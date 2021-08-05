import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../AppText';

export default function BalanceRow({ type, used, total }) {
  const width = `${Math.round((used / total) * 100)}%`;

  return (
    <View style={styles.row}>
      <AppText style={styles.text}>{type}</AppText>
      <View style={styles.balance}>
        <AppText style={styles.text}>{`${used} / ${total}`}</AppText>
        <View style={styles.grey}>
          <View style={[styles.orange, { width }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  balance: {
    width: '30%',
    alignItems: 'center',
  },
  grey: {
    backgroundColor: '#C9C6C4',
    borderRadius: 10,
    height: 20,
    width: '100%',
    marginTop: 5,
  },
  orange: {
    backgroundColor: '#FF9600',
    height: '100%',
    borderRadius: 10,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '12%',
  },
  text: {
    fontSize: 15,
  },
});
