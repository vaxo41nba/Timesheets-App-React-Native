import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Item from './SidebarItem';
import sidebarItems from '../../constants/sidebar';

export default function SidebarBody() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {sidebarItems.map(item => (
        <Item title={item.title} icon={item.icon} key={item.title} number={2} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
