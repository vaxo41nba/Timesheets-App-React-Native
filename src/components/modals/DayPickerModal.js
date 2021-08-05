import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import AppInput from '../AppInput';
import { handleDayPick } from '../../redux/modal/actions';

const options = [
  '8h (Default) ',
  'Paid Vacation (PV)',
  'Sick Leave (SL)',
  'Unpaid Vacation (UV)',
];

export default function DayPickerModal() {
  const dispatch = useDispatch();
  const dayPick = useSelector(state => state.approve_reject.dayPickModal);

  const [hours, setHours] = useState(null);

  const handlePicker = () => {
    dispatch(handleDayPick(!dayPick));
  };

  return (
    <Modal transparent visible={dayPick} animationType="fade">
      <BlurView
        style={[StyleSheet.absoluteFill, styles.modalView]}
        intensity={250}
      >
        <Pressable style={styles.modalBlock}>
          <View style={styles.inputCheck}>
            <AppInput
              style={styles.input}
              placeholder="Enter hours worked"
              keyboardType="number-pad"
              value={hours}
              onChangeText={value => {
                setHours(value.replace(/[^0-9]/g, ''));
              }}
              maxLength={2}
              contextMenuHidden
            />

            <TouchableOpacity
              disabled={!hours}
              style={{ opacity: hours ? 1 : 0.3 }}
            >
              <MaterialIcons name="check-circle" size={40} color="#FF9600" />
            </TouchableOpacity>
          </View>

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
    width: '50%',
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cancelText: { fontSize: 13, textTransform: 'uppercase' },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginRight: 5,
    fontSize: 15,
  },
  inputCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '20%',
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
