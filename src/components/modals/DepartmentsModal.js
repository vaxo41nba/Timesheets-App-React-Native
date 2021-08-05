import React from 'react';
import {
  Modal, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { BlurView } from 'expo-blur';

import AppText from '../AppText';

export default function DepartmentsModal({
  departments,
  activateDepartment,
  visible,
}) {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.modalView}>
        <BlurView
          intensity={300}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <View style={styles.block}>
            {departments.map(dep => {
              const activate = () => {
                activateDepartment(dep);
              };
              return (
                <TouchableHighlight
                  key={dep}
                  style={styles.department}
                  onPress={activate}
                  underlayColor="lightgrey"
                >
                  <AppText style={styles.text}>{dep}</AppText>
                </TouchableHighlight>
              );
            })}
          </View>
        </BlurView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
    width: '80%',

    elevation: 10,
    shadowColor: '#00000029',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  department: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#9F9D9B',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  nonBlurredContent: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
