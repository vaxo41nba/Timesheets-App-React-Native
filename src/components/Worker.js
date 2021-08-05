import React from 'react';
import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Status from './Buttons/Status';

export default function Worker({
  name, position, status, style, onPress,
}) {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <MaterialIcons name="account-box" size={55} color="#817F79" />

      <View style={styles.name_title}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {position}
        </Text>
      </View>
      {status && <Status status={status} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
  },
  name_title: {
    flex: 1,
    justifyContent: 'space-evenly',
    height: '100%',
    marginRight: 10,
  },
  name: { fontSize: 15, fontWeight: 'bold' },
  title: { fontSize: 15, opacity: 0.5 },
});
