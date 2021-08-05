import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from '../AppText';

export default function SidebarHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.worker}>
        <MaterialIcons name="account-box" size={60} color="#FFf" />
        <View style={styles.name_title}>
          <AppText style={styles.name} numberOfLines={1}>
            Vakhtang Elisabedashvili
          </AppText>
          <AppText style={styles.title} numberOfLines={1}>
            Front end web/mobile developer
          </AppText>
        </View>
      </View>
      <AppText style={styles.department}>Software Developement</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  department: {
    fontSize: 20,
    marginLeft: 10,
    marginVertical: 15,
  },
  header: {
    backgroundColor: '#FF9600',
    padding: 10,
  },
  name_title: {
    flex: 1,
    justifyContent: 'space-evenly',
    height: '100%',
    marginRight: 10,
    marginLeft: 10,
    paddingVertical: '2%',
  },
  name: { fontSize: 15, fontWeight: 'bold' },
  worker: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  title: { fontSize: 15, opacity: 0.5 },
});
