import React from 'react';
import {
  Pressable, ScrollView, StyleSheet, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import Kalender from '../components/Kalender';
import WorkAndAbsentTabsModal from '../components/modals/WorkAndAbsentTabsModal';
import ApproveRejectModal from '../components/modals/ApproveRejectModal';
import BottomButtons from '../components/Buttons/BottomButtons';
import MockBottom from '../components/Buttons/MockBottom';
import Drawer from '../components/Sidebar/Drawer';
import Swap from '../navigation/Swap';
import AppText from '../components/AppText';

import {
  handleWorkAbsentVisible,
  handleButtonsDisabled,
} from '../redux/modal/actions';

export default function MyTimesheet({ navigation }) {
  const dispatch = useDispatch();
  const rank = useSelector(state => state.workers.currentRank);

  const workAbsent = () => {
    dispatch(handleWorkAbsentVisible(true));
    dispatch(handleButtonsDisabled(false));
  };

  return (
    <Drawer>
      <View style={styles.container}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Kalender />

          {/* Check buttons worked/absent */}
          <Pressable style={styles.button} onPress={workAbsent}>
            <AppText style={styles.buttonTxet}>
              Total Days Worked / Absent
            </AppText>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={40}
              color="#9F9D9B"
            />
          </Pressable>
        </ScrollView>

        {/* Bottom Buttons */}
        {(rank === 'worker' || rank === 'dealer') && <BottomButtons />}
        {rank === 'manager' && <MockBottom />}

        {/* Work and Absent Modal */}
        <WorkAndAbsentTabsModal />

        {/* Request for a shift swap modal */}
        <Swap />

        {/* Approve and Reject Modal */}
        <ApproveRejectModal navigation={navigation} />
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#FF9600',
    borderRadius: 15,
    height: 50,
    paddingLeft: 10,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  buttonTxet: {
    flex: 1,
    fontSize: 15,
  },
  container: {
    paddingBottom: 15,
    flex: 1,
    backgroundColor: 'white',
  },
});
