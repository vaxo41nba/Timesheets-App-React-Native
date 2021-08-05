import React from 'react';
import { Modal, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import WorkAndAbsentTabs from '../../navigation/WorkAndAbsentTabs';

import { handleWorkAbsentVisible } from '../../redux/modal/actions';

export default function WorkAndAbsentTabsModal() {
  const dispatch = useDispatch();
  const visible = useSelector(
    state => state.approve_reject.workAbsentVisible,
  );

  const toggle = () => dispatch(handleWorkAbsentVisible(false));

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <SafeAreaView style={styles.modalBlock}>
        <WorkAndAbsentTabs toggle={toggle} />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
    flex: 1,
  },
});
