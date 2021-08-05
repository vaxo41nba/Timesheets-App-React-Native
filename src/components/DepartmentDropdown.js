import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AppText from './AppText';

import { toggleList, handleActiveDepartment } from '../redux/workers/actions';
import DepartmentsModal from './modals/DepartmentsModal';

export default function DepartmentDropdown() {
  const dispatch = useDispatch();
  const state = useSelector(s => s.workers);

  const { listVisible, departments, activeDepartment } = state;

  const handleList = () => {
    dispatch(toggleList(!listVisible));
  };

  const activateDepartment = title => {
    dispatch(handleActiveDepartment(title));
    handleList();
  };

  return (
    <>
      <Pressable style={styles.dropdownHeader} onPress={handleList}>
        <AppText numberOfLines={1} style={styles.title}>
          {activeDepartment}
        </AppText>
        <Text style={styles.title}>▼</Text>
      </Pressable>
      <DepartmentsModal
        departments={departments}
        activateDepartment={activateDepartment}
        visible={listVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  dropdownHeader: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#387C6D',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: 'white',
    height: '80%',
  },
  title: {
    fontSize: 17,
    color: 'black',
  },
});
