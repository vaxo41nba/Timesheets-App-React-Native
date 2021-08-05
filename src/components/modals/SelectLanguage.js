import React from 'react';
import {
  Modal, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import AppText from '../AppText';

export default function SelectLanguage({ visible, onPress }) {
  const eng = () => onPress('English');
  const geo = () => onPress('Georgian');

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.modalView}>
        <BlurView
          intensity={300}
          style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        >
          <View style={styles.block}>
            <TouchableHighlight
              style={styles.item}
              onPress={eng}
              underlayColor="lightgrey"
            >
              <AppText style={styles.text}>English</AppText>
            </TouchableHighlight>
            <View style={styles.line} />
            <TouchableHighlight
              style={styles.item}
              onPress={geo}
              underlayColor="lightgrey"
            >
              <AppText style={styles.text}>Georgian</AppText>
            </TouchableHighlight>
          </View>
        </BlurView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  block: {
    height: '20%',
    width: '70%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  item: {
    width: '100%',
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: { borderTopWidth: 1, width: '90%', marginVertical: 5 },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 1,
  },
  nonBlurredContent: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
});
