import React, { useEffect } from 'react';
import {
  ScrollView, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import DateSelect from '../../DateSelect';
import AppText from '../../AppText';
import { setTitle } from '../../../redux/swap/actions';

export default function RequestSwap({ navigation, route }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const state = useSelector(s => s.swap);
  const { firstDatePickerVisible, secondDatePickerVisible } = state;

  useEffect(() => {
    if (isFocused) dispatch(setTitle(route.name));
  }, [isFocused]);

  const choosePerson = () => {
    navigation.navigate('Choose Person');
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      {!firstDatePickerVisible && !secondDatePickerVisible && (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <AppText medium style={styles.text}>
            Choose your date to swap:
          </AppText>
          <DateSelect type="first" />

          <AppText medium style={styles.text}>
            Ask a date for a swap:
          </AppText>
          <DateSelect type="second" />

          <View style={styles.bottom}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="orange"
              onPress={choosePerson}
            >
              <AppText style={styles.buttonText}>Next</AppText>
            </TouchableHighlight>
          </View>
        </ScrollView>
      )}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {firstDatePickerVisible && <DateSelect type="first" />}
        {secondDatePickerVisible && <DateSelect type="second" />}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    borderColor: '#817F79',
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 15,
    color: '#FF9600',
  },
  scrollView: {
    height: '100%',
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
  },
});
