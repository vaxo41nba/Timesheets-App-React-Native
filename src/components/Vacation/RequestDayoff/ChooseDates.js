import React, { useEffect, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../AppText';
import VacationDatePicker from '../VacationDatePicker';
import {
  setEndDateVisible,
  setStartDateVisible,
} from '../../../redux/vacation/actions';
import months from '../../../constants/months';

if (
  Platform.OS === 'android'
  && UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const config = {
  duration: 300,
  update: {
    type: 'easeInEaseOut',
  },
};

export default function ChooseDates() {
  const startOpacity = useRef(new Animated.Value(0)).current;
  const endOpacity = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const state = useSelector(s => s.vacation);

  const {
    startDatePickerVisible, endDatePickerVisible, startDate, endDate,
  } = state;

  useEffect(() => {
    if (startDatePickerVisible) {
      Animated.timing(startOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    if (!startDatePickerVisible) {
      Animated.timing(startOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [startDatePickerVisible]);

  useEffect(() => {
    if (endDatePickerVisible) {
      Animated.timing(endOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    if (!endDatePickerVisible) {
      Animated.timing(endOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [endDatePickerVisible]);

  const showStart = () => {
    dispatch(setStartDateVisible(!startDatePickerVisible));
    dispatch(setEndDateVisible(false));
    animate();
  };

  const showEnd = () => {
    dispatch(setEndDateVisible(!endDatePickerVisible));
    dispatch(setStartDateVisible(false));
    animate();
  };

  const animate = () => {
    LayoutAnimation.configureNext(config);
  };

  const startBorder = () => startDatePickerVisible && { borderColor: 'black' };
  const endBorder = () => endDatePickerVisible && { borderColor: 'black' };

  return (
    <View style={styles.dates}>
      <View style={styles.datesRow}>
        <View>
          <AppText style={styles.text}>From date:</AppText>
          <Pressable
            style={[styles.datePick, startBorder()]}
            onPress={showStart}
          >
            <AppText style={styles.text}>
              {`${startDate.getDate()}-${months[startDate.getMonth()].substring(
                0,
                3,
              )}-${startDate.getFullYear()} `}
            </AppText>
            <Ionicons name="calendar-outline" size={25} color="black" />
          </Pressable>
        </View>

        <View>
          <AppText style={styles.text}>To date:</AppText>
          <Pressable style={[styles.datePick, endBorder()]} onPress={showEnd}>
            <AppText style={styles.text}>
              {`${endDate.getDate()}-${months[endDate.getMonth()].substring(
                0,
                3,
              )}-${endDate.getFullYear()} `}
            </AppText>
            <Ionicons name="calendar-outline" size={25} color="black" />
          </Pressable>
        </View>
      </View>

      <Animated.View style={{ opacity: startOpacity }}>
        <VacationDatePicker animate={animate} type="start" />
      </Animated.View>

      <Animated.View style={{ opacity: endOpacity }}>
        <VacationDatePicker animate={animate} type="end" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  dates: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#A5D2B668',
    marginLeft: 20,
    paddingVertical: 10,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  datePick: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#C9C6C4',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
});
