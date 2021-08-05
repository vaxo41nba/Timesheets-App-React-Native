import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';

import {
  setEndDate,
  setEndDateVisible,
  setStartDate,
  setStartDateVisible,
} from '../../redux/vacation/actions';

export default function VacationDatePicker({ type, animate }) {
  const dispatch = useDispatch();
  const state = useSelector(s => s.vacation);
  let date;
  let datePickerVisible;

  const {
    startDate, startDatePickerVisible, endDate, endDatePickerVisible,
  } = state;

  if (type === 'start') {
    date = startDate;
    datePickerVisible = startDatePickerVisible;
  }
  if (type === 'end') {
    date = endDate;
    datePickerVisible = endDatePickerVisible;
  }

  const onChange = e => {
    const currentDate = e.toString() || date;
    if (type === 'start') {
      dispatch(setStartDateVisible(Platform.OS === 'ios'));
      dispatch(setStartDate(new Date(currentDate)));
    }
    if (type === 'end') {
      dispatch(setEndDateVisible(Platform.OS === 'ios'));
      dispatch(setEndDate(new Date(currentDate)));
    }
    animate();
  };

  return (
    <>
      {datePickerVisible && (
        <CalendarPicker
          width={Dimensions.get('window').width - 40}
          minDate={new Date()}
          onDateChange={onChange}
          startFromMonday
          headerWrapperStyle={{ marginTop: 10 }}
          todayBackgroundColor="orange"
        />
      )}
    </>
  );
}
