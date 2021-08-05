import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import TimesheetRow from '../components/TimesheetRow';
import { worked } from '../constants/workAndAbsent';

export default function TotalWorked({ toggle }) {
  return (
    <View style={styles.container}>
      {/* Rows */}
      {worked.map(row => (
        <TimesheetRow
          key={row.title}
          title={row.title}
          d={row.day}
          h={row.hours}
        />
      ))}

      {/* Toggle Arrow */}
      <TouchableOpacity style={styles.down} onPress={toggle}>
        <MaterialIcons name="keyboard-arrow-down" size={60} color="#FF9600" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: 400,
  },
  down: {
    alignItems: 'center',
  },
});
