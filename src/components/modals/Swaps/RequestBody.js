import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../../AppText';
import { setTitle } from '../../../redux/swap/actions';
import AppButton from '../../Buttons/AppButton';

export default function RequestBody({ route }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) dispatch(setTitle(route.name));
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {/* First Block */}
      <View style={styles.block}>
        <MaterialIcons name="account-box" size={60} color="#817F79" />
        <View style={styles.name_date}>
          <AppText style={styles.name}>Vakhtang Elisabedashvili</AppText>
          <View style={{ flexDirection: 'row' }}>
            <AppText medium style={styles.date}>
              5-May-2021
            </AppText>
            <AppText style={styles.day_night}>Day</AppText>
          </View>
        </View>
      </View>

      <MaterialIcons
        name="swap-horiz"
        size={60}
        color="#FF9600"
        style={styles.swapIcon}
      />

      {/* Second Block */}
      <View style={styles.block}>
        <MaterialIcons name="account-box" size={60} color="#817F79" />
        <View style={styles.name_date}>
          <AppText style={styles.name}>Mariam Mekhrishvili</AppText>
          <View style={{ flexDirection: 'row' }}>
            <AppText medium style={styles.date}>
              7-May-2021
            </AppText>
            <AppText style={styles.day_night}>Night</AppText>
          </View>
        </View>
      </View>

      <View style={styles.approve_reject}>
        <AppButton buttonStyle={styles.button} color text="Approve" />
        <AppButton buttonStyle={styles.button} text="Reject" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  button: {
    width: 90,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  date: {
    fontSize: 17,
    color: '#FF9600',
  },
  day_night: {
    fontSize: 17,
    textTransform: 'uppercase',
    marginLeft: 30,
  },
  approve_reject: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  name_date: {
    marginLeft: 20,
    justifyContent: 'space-between',
    height: 60,
  },
  name: { fontSize: 17 },
  swapIcon: { alignSelf: 'center', marginVertical: 10 },
});
