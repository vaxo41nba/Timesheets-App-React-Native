import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../AppText';

export default function Message({ user, date, message }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.user}>
        {user}
        :
      </AppText>
      <AppText style={styles.message}>{message}</AppText>
      <AppText style={styles.date}>{date}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  date: {
    fontSize: 13,
    color: '#FF9600',
    alignSelf: 'flex-end',
  },
  message: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 15,
    alignSelf: 'flex-start',
  },
  user: {
    fontSize: 14,
    color: '#FF9600',
    alignSelf: 'flex-start',
    width: 80,
  },
});
