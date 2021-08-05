import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import LeaveRequest from '../components/Vacation/MyLeaveRequests';
import Drawer from '../components/Sidebar/Drawer';

export default function MyLeaveRequests() {
  return (
    <Drawer>
      <View style={styles.container}>
        <Header title="My Requests" />

        <ScrollView>
          <LeaveRequest />
          <LeaveRequest />
          <LeaveRequest />
          <LeaveRequest />
        </ScrollView>
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
