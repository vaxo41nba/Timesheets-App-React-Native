import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

import Drawer from '../components/Sidebar/Drawer';
import TopOrange from '../components/Vacation/TeamLeaveRequests/TopOrange';
import WorkerCard from '../components/Vacation/TeamLeaveRequests/WorkerCard';

export default function TeamLeaveRequests({ navigation }) {
  const {
    state: { params },
  } = navigation;

  return (
    <Drawer>
      <Header title="Team Requests" />
      <TopOrange route={params} />
      <ScrollView style={styles.container}>
        <WorkerCard />
        <WorkerCard approved />
        <WorkerCard />
        <WorkerCard />
        <WorkerCard approved />
        <WorkerCard />
        <WorkerCard approved />
      </ScrollView>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
