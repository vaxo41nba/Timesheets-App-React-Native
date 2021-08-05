import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Notifications/Card';
import Drawer from '../components/Sidebar/Drawer';

import notifications from '../constants/notifications';

export default function Notifications() {
  return (
    <>
      <Drawer>
        <Header title='Notifications' />
        <ScrollView contentContainerStyle={styles.container}>
          {notifications.map((not) => (
            <Card
              key={not.notification}
              notification={not.notification}
              warning={not.warning}
              date={not.date}
              message={not.message}
              swap={not.swap}
            />
          ))}
        </ScrollView>
      </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
