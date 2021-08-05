import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';
import AppText from '../AppText';

import {
  toggleOrangeModal,
  handleSend,
  handleConfirmScreen,
  handleReasonModal,
  handleCancel,
} from '../../redux/modal/actions';
import ApproveRejectModal from '../modals/ApproveRejectModal';
import AppButton from './AppButton';

function MockBottom({ navigation }) {
  const dispatch = useDispatch();
  const currentStatus = useSelector(state => state.workers.currentStatus);

  const pressSend = () => {
    dispatch(toggleOrangeModal(true));
    dispatch(handleReasonModal(true));
    dispatch(handleSend(true));
  };

  const pressCancel = () => {
    dispatch(toggleOrangeModal(true));
    dispatch(handleConfirmScreen(true));
    dispatch(handleCancel(true));
  };

  return (
    <>
      {!(currentStatus === 'Fill In') && (
        <View style={styles.statusBottom}>
          <AppText style={styles.status}>{currentStatus}</AppText>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={35}
            color="#FF9600"
            onPress={pressSend}
            style={{ flex: 1, textAlign: 'right' }}
          />
        </View>
      )}

      {currentStatus === 'Fill In' && (
        <View style={styles.bottom}>
          <AppButton
            color
            text={currentStatus === 'Fill In' ? 'Send' : 'Sent'}
            onPress={pressSend}
            buttonStyle={styles.bottomButton}
            textStyle={styles.buttonText}
            disabled={!(currentStatus === 'Fill In')}
          />
          <AppButton
            text="Cancel"
            onPress={pressCancel}
            buttonStyle={styles.bottomButton}
            textStyle={styles.buttonText}
            disabled={!(currentStatus === 'Fill In')}
          />
        </View>
      )}

      {/* Reason */}
      <ApproveRejectModal navigation={navigation} />
    </>
  );
}

export default withNavigation(MockBottom);

const styles = StyleSheet.create({
  bottomButton: {
    width: 120,
    height: 45,
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
  },
  statusBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingBottom: 10,
  },
  status: {
    fontSize: 20,
  },
  warning: {
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
});
