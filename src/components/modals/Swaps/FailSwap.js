import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { setTitle } from '../../../redux/swap/actions';
import AppText from '../../AppText';

export default function FailSwap() {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) dispatch(setTitle('Error'));
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <AppText style={styles.text}>
          Error while sending
          {' '}
          {'\n'}
          {' '}
          Please, try again
        </AppText>
        <MaterialIcons name="error" size={50} color="#FF9600" />
      </View>
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
  container: { padding: 15, backgroundColor: 'white', flex: 1 },
  text: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
});
