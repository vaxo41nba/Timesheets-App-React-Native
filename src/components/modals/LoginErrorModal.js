import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import OrangeModal from './OrangeModal';
import AppText from '../AppText';

export default function LoginErrorModal({ handleError }) {
  const onPress = () => {
    handleError(false);
  };
  return (
    <OrangeModal title="Error">
      <View style={styles.modalView}>
        <AppText style={{ fontSize: 20, marginVertical: 30 }}>
          Please, fill in the fields
        </AppText>

        <TouchableOpacity style={styles.okButton} onPress={onPress}>
          <AppText style={{ fontSize: 17, color: '#FF9600' }}>OK</AppText>
        </TouchableOpacity>
      </View>
    </OrangeModal>
  );
}

const styles = StyleSheet.create({
  okButton: {
    width: 80,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9F9D9B',
    marginBottom: 20,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
