import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import AppText from './AppText';
import months from '../constants/months';
import {
  setFirstDate,
  setSecondDate,
  setFirstShow,
  setSecondShow,
} from '../redux/swap/actions';

export default function DateSelect({ type }) {
  const dispatch = useDispatch();
  const state = useSelector(s => s.swap);
  let date;
  let datePickerVisible;

  const {
    firstDate,
    firstDatePickerVisible,
    secondDate,
    secondDatePickerVisible,
  } = state;

  if (type === 'first') {
    date = firstDate;
    datePickerVisible = firstDatePickerVisible;
  }
  if (type === 'second') {
    date = secondDate;
    datePickerVisible = secondDatePickerVisible;
  }

  const onChange = e => {
    const currentDate = e.toString() || date;
    if (type === 'first') {
      dispatch(setFirstShow(Platform.OS === 'ios'));
      dispatch(setFirstDate(new Date(currentDate)));
    }
    if (type === 'second') {
      dispatch(setSecondShow(Platform.OS === 'ios'));
      dispatch(setSecondDate(new Date(currentDate)));
    }
  };

  const showMode = () => {
    if (type === 'first') {
      dispatch(setFirstShow(!firstDatePickerVisible));
    }
    if (type === 'second') {
      dispatch(setSecondShow(!secondDatePickerVisible));
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={showMode}
        title="Show date picker!"
        style={styles.picker}
      >
        <AppText style={styles.date}>
          {`${date.getDate()}-${months[date.getMonth()].substring(
            0,
            3,
          )}-${date.getFullYear()}`}
        </AppText>
        <Ionicons name="calendar-outline" size={25} />
      </TouchableOpacity>

      {datePickerVisible && (
        <View>
          <CalendarPicker
            width={Dimensions.get('window').width - 40}
            minDate={new Date()}
            onDateChange={onChange}
            startFromMonday
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 15,
  },
  picker: {
    borderWidth: 2,
    borderColor: '#9F9D9B',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});
