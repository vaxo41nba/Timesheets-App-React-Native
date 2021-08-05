import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import DepartmentDropdown from '../components/DepartmentDropdown';
import Worker from '../components/Worker';

import workers from '../constants/Workers';
import Drawer from '../components/Sidebar/Drawer';
import Statuses from '../components/Statuses';
import AppText from '../components/AppText';
import { handleStatus } from '../redux/workers/actions';

const statusArr = ['All', 'Fill In', 'Pending', 'Rejected', 'Confirmed'];

export default function TeamTimeSheet() {
  const dispatch = useDispatch();
  const state = useSelector(s => s.workers);
  const { activeDepartment, currentStatus } = state;

  useEffect(
    () => () => {
      dispatch(handleStatus(currentStatus));
    },
    [],
  );

  const showWorkers = worker => (worker.department === activeDepartment || activeDepartment === 'All')
    && (worker.status === currentStatus || currentStatus === 'All');

  return (
    <>
      <Drawer>
        <Header />
        <View style={styles.container}>
          <View style={styles.orange}>
            <AppText medium style={styles.text}>
              Departments
            </AppText>
            <DepartmentDropdown />
            <AppText medium style={styles.text}>
              Status
            </AppText>
            <Statuses arr={statusArr} />
          </View>

          <ScrollView contentContainerStyle={styles.workers}>
            {workers.map(worker => (
              <View key={worker.name}>
                {showWorkers(worker) && (
                  <Worker
                    name={worker.name}
                    status={worker.status}
                    position={worker.position}
                  />
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orange: {
    padding: 15,
    backgroundColor: '#FF9600',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  workers: {
    padding: 10,
    paddingRight: 15,
  },
  text: {
    fontSize: 17,
    marginVertical: 5,
  },
});
