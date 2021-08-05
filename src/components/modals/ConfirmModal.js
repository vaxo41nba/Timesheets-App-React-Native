import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import OrangeModal from './OrangeModal';
import AppButton from '../Buttons/AppButton';
import AppText from '../AppText';

import {
  handleSuccess,
  handleFail,
  handleConfirmScreen,
  handleApprove,
  handleReject,
  handleCancel,
  handleSend,
} from '../../redux/modal/actions';

export default function ConfirmModal({ cancel }) {
  const dispatch = useDispatch();

  const yes = () => {
    if (cancel) {
      cancel();
      dispatch(handleCancel(false));
    } else {
      dispatch(handleSuccess(true));
    }
    dispatch(handleConfirmScreen(false));
  };

  const yesLongPress = () => {
    dispatch(handleFail(true));
    dispatch(handleConfirmScreen(false));
  };
  const no = () => {
    dispatch(handleConfirmScreen(false));
    dispatch(handleApprove(false));
    dispatch(handleReject(false));
    dispatch(handleCancel(false));
    dispatch(handleSend(false));
  };

  return (
    <OrangeModal title="Confirm">
      <AppText style={styles.text}>Are You Sure?</AppText>

      <View style={styles.buttons}>
        <AppButton
          text="Yes"
          onPress={yes}
          onLongPress={yesLongPress}
          color="orange"
        />
        <AppButton text="No" onPress={no} />
      </View>
    </OrangeModal>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 40,
  },
  text: {
    fontSize: 22,
    marginTop: 35,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
