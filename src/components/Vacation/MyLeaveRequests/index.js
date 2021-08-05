import React from 'react';
import { StyleSheet, View } from 'react-native';

import TopRow from './TopRow';
import BottomRow from './BottomRow';

export default function UpcomingLeaveRequest() {
  return (
    <>
      <TopRow />
      <BottomRow />
      <View style={styles.line} />
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderColor: '#A5D2B6',
    width: '90%',
    alignSelf: 'center',
  },
});
