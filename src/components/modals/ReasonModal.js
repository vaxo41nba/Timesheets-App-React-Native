import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import OrangeModal from './OrangeModal';
import AppInput from '../AppInput';

import {
  handleReason,
  handleConfirmScreen,
  handleReasonModal,
} from '../../redux/modal/actions';

export default function ReasonModal() {
  const dispatch = useDispatch();

  const send = () => {
    dispatch(handleConfirmScreen(true));
    dispatch(handleReasonModal(false));
  };

  return (
    <OrangeModal title="Comment" cancel>
      <AppInput
        style={styles.input}
        onChangeText={text => dispatch(handleReason(text))}
        placeholder="Write a comment..."
        multiline
      />
      <View style={styles.sendIcon}>
        <MaterialIcons name="send" size={45} color="#FF9600" onPress={send} />
      </View>
    </OrangeModal>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlignVertical: 'top',
    width: '100%',
    height: 150,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  sendIcon: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 12,
  },
  text: {
    fontSize: 22,
    marginTop: 5,
    marginBottom: 20,
  },
});
