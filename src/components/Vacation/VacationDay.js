import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import AppText from '../AppText';
import { paidVacation } from '../../constants/holidays';

export default function VacationDay({ curDate, curState }) {
  const month = useSelector(state => state.vacation.month);

  const isThisMonth = () => curDate.month === month;

  const background = () => {
    if (
      curDate.day > paidVacation[0]
      && curDate.day < paidVacation[paidVacation.length - 1]
    ) {
      return styles.vacation;
    }
    if (curDate.day === paidVacation[0]) {
      return styles.first;
    }
    if (curDate.day === paidVacation[paidVacation.length - 1]) {
      return styles.last;
    }
    return null;
  };

  const today = () => {
    if (curState === 'today') {
      return styles.today;
    }
    return null;
  };

  return (
    <>
      {isThisMonth() && (
        <View style={[styles.dayContainer, background()]}>
          <View style={today()}>
            <AppText style={styles.dayNumber}>{curDate.day}</AppText>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dayNumber: {
    fontSize: 15,
  },
  dayContainer: {
    width: '102%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  today: {
    backgroundColor: '#C9C6C4',
    borderRadius: 30,
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vacation: {
    backgroundColor: '#FFF2E0',
  },
  first: {
    backgroundColor: '#FFF2E0',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  last: {
    backgroundColor: '#FFF2E0',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});
