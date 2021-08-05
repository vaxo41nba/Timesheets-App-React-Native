import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { toggleStatusList, handleStatus } from '../redux/workers/actions';
import AppText from './AppText';

export default function Statuses({ arr }) {
  const dispatch = useDispatch();
  const state = useSelector(s => s.workers);

  const { statusesVisible, currentStatus } = state;

  const handleList = () => {
    dispatch(toggleStatusList(!statusesVisible));
  };

  const activateStatus = title => {
    dispatch(handleStatus(title));
    handleList();
  };

  return (
    <View style={styles.container}>
      {arr.map(status => (
        <Pressable
          style={styles.status}
          key={status}
          onPress={() => activateStatus(status)}
        >
          <AppText>{status}</AppText>
          <View style={styles.radio}>
            {currentStatus === status && <View style={styles.selected} />}
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  dropdownHeader: {
    height: 40,
    borderWidth: 2,
    borderColor: '#387C6D',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: 'white',
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: '70%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  status: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});
