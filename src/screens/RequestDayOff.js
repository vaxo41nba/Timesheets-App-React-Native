import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import DayOffPicker from '../components/modals/DayOffPicker';
import Drawer from '../components/Sidebar/Drawer';
import Vacations from '../navigation/Vacations';
import LeaveTypeDropdown from '../components/Vacation/RequestDayoff/LeaveTypeDropdown';
import ChooseDates from '../components/Vacation/RequestDayoff/ChooseDates';
import UsedDaysLimit from '../components/Vacation/RequestDayoff/UsedDaysLimit';
import RequestedDaysRow from '../components/Vacation/RequestDayoff/RequestedDaysRow';
import Bottom from '../components/Vacation/RequestDayoff/Bottom';

import {
  handleDayoffPicker,
  handleRequestSubmit,
} from '../redux/vacation/actions';
import { toggleOrangeModal } from '../redux/modal/actions';

export default function RequestDayOff() {
  const dispatch = useDispatch();
  const state = useSelector(s => s.vacation);
  const { dayOffPickerModal, confirmVisible } = state;

  const handlePicker = () => {
    dispatch(handleDayoffPicker(!dayOffPickerModal));
  };

  const handleSubmit = () => {
    dispatch(handleRequestSubmit(!confirmVisible));
    dispatch(toggleOrangeModal(true));
  };

  return (
    <Drawer>
      <View style={styles.container}>
        <Header title="Leave Request" />

        <ScrollView style={styles.scrollView}>
          <LeaveTypeDropdown onPress={handlePicker} />
          <ChooseDates />
          <RequestedDaysRow />
          <UsedDaysLimit />
        </ScrollView>

        <Bottom handleSubmit={handleSubmit} />
        <DayOffPicker />
        <Vacations confirmVisible={confirmVisible} />
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 0.8,
  },
});
