import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import workers from '../constants/shiftWorkers';
import Worker from '../components/ShiftWorker';

export default function ShiftWorkers() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {workers.map(worker => (
          <Worker
            name={worker.name}
            requested={worker.swapRequested}
            shift={worker.shift}
            key={worker.name}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});
