import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../AppText';

export default function BottomRow() {
  return (
    <View style={styles.row}>
      <View style={styles.leaveType}>
        <AppText style={styles.whiteText}>Unpaid maternity leave</AppText>
      </View>

      <View style={styles.dates}>
        <View style={styles.dateRow}>
          <View style={styles.calendarCircle}>
            <View style={styles.circle} />
            <Ionicons
              style={styles.calendarIcon}
              name="calendar-outline"
              color="#9F9D9B"
              size={20}
            />
          </View>

          <AppText style={styles.greyText}>5-Jun-2021</AppText>
        </View>

        <View style={styles.verticalLine} />

        <View style={styles.dateRow}>
          <View style={styles.calendarCircle}>
            <View style={styles.circle} />
            <Ionicons
              style={styles.calendarIcon}
              name="calendar-outline"
              color="#9F9D9B"
              size={20}
            />
          </View>

          <AppText style={styles.greyText}>17-Jun-2021</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarIcon: {
    marginHorizontal: 7,
  },
  circle: {
    backgroundColor: '#9F9D9B',
    width: 15,
    height: 15,
    borderRadius: 15,
  },
  calendarCircle: { alignItems: 'center', flexDirection: 'row' },
  dates: {
    marginRight: 20,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greyText: {
    color: '#848181',
    fontSize: 15,
  },
  leaveType: {
    backgroundColor: '#A5D2B6',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    paddingRight: 10,
    paddingLeft: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    height: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  whiteText: {
    fontSize: 15,
    color: 'white',
  },
  verticalLine: {
    backgroundColor: '#9F9D9B',
    width: 1,
    height: 20,
    marginLeft: 7,
    marginVertical: -5,
  },
});
