import React from 'react';
import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';

import AppText from '../../AppText';

export default function LeaveTypeDropdown({ onPress }) {
  return (
    <View style={styles.type}>
      <AppText style={styles.text}>Leave Type</AppText>
      <Pressable style={styles.typeDropdown} onPress={onPress}>
        <AppText style={styles.choose}>Choose type</AppText>
        <Text style={styles.arrow}>▼</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    fontSize: 20,
    color: '#FF9600',
    marginBottom: 5,
  },
  choose: {
    fontSize: 15,
    color: '#9F9D9B',
    flex: 1,
  },
  typeDropdown: {
    borderWidth: 1,
    borderColor: '#9F9D9B',
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  type: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 40,
  },
});
