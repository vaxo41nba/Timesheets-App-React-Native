import React, { useEffect, useState } from 'react';
import {
  StyleSheet, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './AppText';

export default function TimesheetRow({ title, d, h }) {
  const currentRank = useSelector(state => state.workers.currentRank);
  const currentStatus = useSelector(state => state.workers.currentStatus);

  const [night, setNight] = useState(null);
  const [other, setOther] = useState(null);
  const [val, setVal] = useState(null);

  useEffect(() => {
    effect();
  });

  const effect = () => {
    if (title === 'Other') {
      setVal(other);
    } else {
      setVal(night);
    }
    return null;
  };

  const rankConditional = () => currentRank === 'manager'
    && (title === 'Other' || title === 'Worked at night')
    && (currentStatus === 'Fill In' || currentStatus === 'Rejected');

  const changeText = value => {
    if (title === 'Other') {
      setOther(value.replace(/[^0-9]/g, ''));
    }
    if (title === 'Worked at night') {
      setNight(value.replace(/[^0-9]/g, ''));
    }
  };

  return (
    <View style={styles.row}>
      {/* Title */}
      <View style={{ width: '65%' }}>
        <AppText style={[styles.text, { color: '#090909' }]}>{title}</AppText>
      </View>

      {/* Days */}
      <View style={styles.rowBlock}>
        <AppText medium={!title} style={[styles.text, !title && styles.topRow]}>
          {d}
        </AppText>
      </View>

      {/* Hours */}
      {rankConditional() ? (
        <>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="numeric"
            contextMenuHidden
            value={val}
            onChangeText={value => changeText(value)}
          />
          {other || night ? (
            <TouchableOpacity>
              <MaterialIcons
                style={styles.icon}
                name="check-circle"
                size={30}
                color="#FF9600"
              />
            </TouchableOpacity>
          ) : null}
        </>
      ) : (
        <View style={styles.rowBlock}>
          <AppText
            medium={!title}
            style={[styles.text, !title && styles.topRow]}
          >
            {h}
          </AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#FF9600',
    width: 30,
    height: 30,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  icon: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBlock: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 15,
    color: '#817F79',
  },
  topRow: {
    color: '#090909',
    fontSize: 17,
  },
});
