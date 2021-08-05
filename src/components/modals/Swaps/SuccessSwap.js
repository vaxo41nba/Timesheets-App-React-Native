import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import AppText from '../../AppText';
import { setTitle } from '../../../redux/swap/actions';

export default function SuccessSwap() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isFocused) {
      dispatch(setTitle('Done'));
      setTimeout(() => {
        setVisible(true);
      }, 720);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {visible && (
        <View style={styles.block}>
          <AppText style={styles.text}>Sent successfully</AppText>
          <MaterialIcons
            name="check-circle-outline"
            size={50}
            color="#20B2B2"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
  container: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
});
