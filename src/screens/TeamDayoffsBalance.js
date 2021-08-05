import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Drawer from '../components/Sidebar/Drawer';
import Header from '../components/Header';
import workers from '../constants/Workers';
import Worker from '../components/Worker';
import AppInput from '../components/AppInput';

export default function TeamDayoffsBalance({ navigation }) {
  const navigate = () => navigation.navigate('LeaveDaysBalance');
  return (
    <Drawer>
      <Header title="Balance" />

      <View style={styles.container}>
        <AppInput placeholder="Search" style={styles.input} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {workers.map(worker => (
            <Worker
              name={worker.name}
              position={worker.position}
              key={worker.name}
              style={styles.worker}
              onPress={navigate}
            />
          ))}
        </ScrollView>
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C3C2',
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  worker: {
    marginVertical: 10,
  },
});
