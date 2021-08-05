import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  toggleOrangeModal,
  handleApprove,
  handleReject,
  handleConfirmScreen,
  handleReasonModal,
} from '../../redux/modal/actions';
import AppButton from './AppButton';

export default function BottomButtons() {
  const dispatch = useDispatch();
  const state = useSelector(s => s.approve_reject);

  const { buttonsDisabled } = state;

  const pressApprove = () => {
    dispatch(toggleOrangeModal(true));
    dispatch(handleApprove(true));
    dispatch(handleConfirmScreen(true));
  };

  const pressReject = () => {
    dispatch(toggleOrangeModal(true));
    dispatch(handleReject(true));
    dispatch(handleReasonModal(true));
  };

  return (
    <>
      <View style={styles.bottom}>
        <AppButton
          text="Approve"
          color
          onPress={pressApprove}
          buttonStyle={styles.bottomButton}
          textStyle={styles.buttonText}
          disabled={buttonsDisabled}
        />

        <AppButton
          text="Reject"
          onPress={pressReject}
          buttonStyle={styles.bottomButton}
          textStyle={styles.buttonText}
          disabled={buttonsDisabled}
        />
      </View>
      {buttonsDisabled && (
        <Text style={styles.warning}>
          Buttons get activated when manager fills in the information
        </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    width: 120,
    height: 55,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: '#9F9D9B',
  },
  warning: {
    color: '#FF9600',
    textAlign: 'center',
    marginTop: 5,
    marginHorizontal: 15,
  },
});
