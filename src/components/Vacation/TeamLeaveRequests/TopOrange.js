import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../AppText';
import DepartmentDropdown from '../../DepartmentDropdown';
import Statuses from '../../Statuses';
import VacationDatePicker from '../VacationDatePicker';
import { setStartDateVisible } from '../../../redux/vacation/actions';

import months from '../../../constants/months';
import { config } from '../RequestDayoff/ChooseDates';

if (
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TopOrange({ route }) {
  const dispatch = useDispatch();
  const state = useSelector(scroll => scroll.vacation);
  const { startDatePickerVisible, startDate } = state;

  const showStart = () => {
    dispatch(setStartDateVisible(!startDatePickerVisible));
    animate();
  };

  const animate = () => {
    LayoutAnimation.configureNext(config);
  };

  return (
    <View style={styles.container}>
      {route === 'team' && (
        <>
          <View style={styles.row}>
            <View style={styles.marginLeft}>
              <AppText style={styles.text}>Choose a date</AppText>
            </View>

            <View style={styles.flex}>
              <Pressable style={styles.datePick} onPress={showStart}>
                <AppText style={[styles.text, styles.white]}>
                  {`${startDate.getDate()}-${months[
                    startDate.getMonth()
                  ].substring(0, 3)}-${startDate.getFullYear()} `}
                </AppText>
                <Ionicons name="calendar-outline" size={25} color="white" />
              </Pressable>
            </View>
          </View>

          <View style={styles.calendar}>
            <VacationDatePicker animate={animate} type="start" />
          </View>

          <View style={styles.row}>
            <View style={styles.marginLeft}>
              <AppText style={styles.text}>Leave Requests:</AppText>
            </View>

            <View style={styles.flex}>
              <AppText style={[styles.text, styles.white]}>3</AppText>
            </View>
          </View>
        </>
      )}

      {route === 'all' && (
        <View style={{ paddingHorizontal: 15 }}>
          <AppText medium style={styles.text}>
            Departments
          </AppText>
          <DepartmentDropdown />
          <AppText medium style={styles.text}>
            Status
          </AppText>
          <Statuses arr={['All', 'Approved', 'Pending']} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#FF9600',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingBottom: 10,
  },
  datePick: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  flex: {
    width: '50%',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 20,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 17,
    color: 'black',
  },
  white: {
    color: 'white',
  },
});
