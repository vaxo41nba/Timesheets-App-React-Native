import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { BlurView } from 'expo-blur';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import { resetModals } from '../../redux/modal/actions';

const CancelIcon = ({ style }) => {
  const dispatch = useDispatch();
  function cancel() {
    dispatch(resetModals());
  }

  return (
    <MaterialIcons
      name='clear'
      size={40}
      color='white'
      onPress={cancel}
      style={style}
    />
  );
};

export default function OrangeModal({ children, title }) {
  const state = useSelector((s) => s.approve_reject);
  const { orangeVisible } = state;

  return (
    <Modal animationType='fade' transparent visible={orangeVisible}>
      <BlurView
        intensity={Platform.OS === 'android' ? 300 : 250}
        style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
      >
        <KeyboardAvoidingView
          behavior='position'
          enabled
          style={styles.container}
        >
          <ScrollView>
            <View style={styles.topRowCancel}>
              <CancelIcon style={{ opacity: 0 }} />
              <AppText style={styles.title}>{title}</AppText>
              <CancelIcon />
            </View>
            <View style={styles.bottom}>{children}</View>
          </ScrollView>
        </KeyboardAvoidingView>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // this is mandatory, doesn't work elevation otherwise

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 20,
  },
  topRowCancel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF9600',
    height: 60,
    paddingLeft: 15,
    paddingRight: 12,
  },
  nonBlurredContent: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
});
