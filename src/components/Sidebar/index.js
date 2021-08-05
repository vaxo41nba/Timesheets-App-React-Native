import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './SidebarHeader';
import Body from './SidebarBody';

export default function Sidebar() {
  return (
    <View style={styles.sidebarContainer}>
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
