import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../../AppText';

export default function UsedDaysLimit() {
  return (
    <View style={styles.usedBlock}>
      <View style={styles.used}>
        <AppText style={styles.text}>Used days / Limit:</AppText>
      </View>
      <View style={styles.daysLeftBlock}>
        <View style={styles.orange}>
          <AppText style={[styles.text, styles.white]}>0 / 24</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  daysLeftBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orange: {
    borderRadius: 10,
    backgroundColor: '#FF9600',
    height: '80%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  used: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#A5D2B668',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usedBlock: {
    height: 60,
    flexDirection: 'row',
  },
  white: {
    color: 'white',
  },
});
