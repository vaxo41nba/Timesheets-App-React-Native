import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import holidays from '../constants/holidays'; // paidVacation, // unpaidVacation, // sickLeave,
import { handleDayPick } from '../redux/modal/actions';
import AppText from './AppText';

export default function Day({ curDate, curState }) {
  const dispatch = useDispatch();
  const store = useSelector(s => s);
  const {
    approve_reject: { dayPickModal },
    workers: { currentStatus, currentRank },
    vacation: { month },
  } = store;

  const handlePicker = () => {
    dispatch(handleDayPick(!dayPickModal));
  };

  const isWeekend = date => {
    const day = new Date(date.timestamp).getDay();
    return day === 0 || day === 6;
  };

  const thumbnail = date => {
    // if (sickLeave.includes(date.day)) return 'SL';
    // if (unpaidVacation.includes(date.day)) return 'UV';
    // if (paidVacation.includes(date.day)) return 'PV';
    if (isWeekend(date)) {
      return 'H';
    }
    return '8h';
  };

  const isThisMonth = () => curDate.month === month;

  const isHoliday = date => {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].month === date.month && holidays[i].day === date.day) {
        return true;
      }
    }
    return false;
  };

  const modalDisabled = () => currentRank === 'worker'
    || currentStatus === 'Confirmed'
    || currentStatus === 'Pending';

  const hourBlockBackground = (date, state) => {
    if (state === 'today') {
      return 'white';
      // return '#FFD69B';
    }
    if (isHoliday(date)) {
      return 'lightblue';
    }
    if (isWeekend(date)) {
      return '#FF9600';
    }
    return 'white';
  };

  const background = (date, state) => ({
    backgroundColor: hourBlockBackground(date, state),
  });

  const border = state => {
    if (state === 'today') {
      return {
        borderWidth: 2,
        borderColor: '#9F9D9B',
        borderRadius: 5,
      };
    }
    return null;
  };

  return (
    <Pressable
      disabled={modalDisabled()}
      style={styles.dayContainer}
      onPress={handlePicker}
    >
      <View
        style={[
          styles.hourBlock,
          background(curDate, curState),
          border(curState),
        ]}
      >
        <AppText
          style={[styles.hoursText, isWeekend(curDate) && styles.whiteText]}
        >
          {thumbnail(curDate)}
        </AppText>
      </View>
      <View
        style={[
          styles.dayBlock,
          isThisMonth(curDate) ? styles.orange : styles.grey,
        ]}
      >
        <AppText style={styles.dayNumber}>{curDate.day}</AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  orange: {
    backgroundColor: '#FF9600',
  },
  grey: {
    backgroundColor: '#9F9D9B',
  },
  whiteText: {
    color: 'white',
  },
  dayBlock: {
    width: '50%',
    height: '50%',

    // borderWidth: 1,
    // borderColor: '#707070',

    position: 'absolute',
    right: 0,
    bottom: 0,

    elevation: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },
  dayNumber: {
    fontSize: 13,
    color: 'white',
  },
  dayContainer: {
    width: 40,
    height: 40,
  },
  hourBlock: {
    paddingLeft: 2,

    width: '85%',
    height: '85%',

    position: 'absolute',
    left: 0,
    top: 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 6,
  },
  hoursText: {
    color: '#8D8D8D',
    fontSize: 15,
  },
});
