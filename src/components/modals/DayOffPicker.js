import React from 'react';
import {
  Modal, Pressable, StyleSheet, TouchableHighlight,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useDispatch, useSelector } from 'react-redux';

import AppText from '../AppText';
import { handleDayoffPicker } from '../../redux/vacation/actions';

const options = [
  'Paid vacation (PV)',
  'Unpaid vacation (UV)',
  'Paid maternity leave (PML)',
  'Unpaid maternity leave (UML)',
  'Sick leave (SL)',
  'Study leave (STL)',
];

export default function DayOffPicker() {
  const dispatch = useDispatch();
  const dayOffPicker = useSelector(state => state.vacation.dayOffPickerModal);

  const handlePicker = () => {
    dispatch(handleDayoffPicker(!dayOffPicker));
  };

  return (
    <Modal transparent visible={dayOffPicker} animationType="fade">
      <BlurView
        style={[StyleSheet.absoluteFill, styles.modalView]}
        intensity={300}
      >
        <Pressable style={styles.modalBlock}>
          {options.map(option => (
            <TouchableHighlight
              onPress={handlePicker}
              style={styles.text}
              underlayColor="lightgrey"
              key={option}
            >
              <AppText style={{ fontSize: 15 }}>{option}</AppText>
            </TouchableHighlight>
          ))}

          <TouchableHighlight
            underlayColor="lightgrey"
            style={styles.cancel}
            onPress={handlePicker}
          >
            <AppText style={styles.cancelText}>Cancel</AppText>
          </TouchableHighlight>
        </Pressable>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cancel: {
    borderWidth: 1,
    borderColor: '#9F9D9B',
    borderRadius: 15,
    width: '40%',
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cancelText: { fontSize: 13, textTransform: 'uppercase' },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  modalBlock: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 7,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
});
