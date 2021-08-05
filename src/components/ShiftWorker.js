import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ShiftWorker({ name, requested, shift }) {
  const conditional = () => {
    if (requested) {
      return (
        <Text style={{ fontSize: 22, color: '#FF9600' }}>
          Requested shift swap
        </Text>
      );
    }
    return (
      <Text style={styles.shift} numberOfLines={1}>
        {`Shift ${shift}`}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="account-box" size={70} color="#817F79" />

      <View style={styles.name_title}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        {conditional()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    marginVertical: 15,
  },
  name_title: {
    flex: 1,
    justifyContent: 'space-evenly',
    height: '100%',
    marginHorizontal: 10,
  },
  name: { fontSize: 22 },
  shift: { fontSize: 22, color: '#817F79' },
});
