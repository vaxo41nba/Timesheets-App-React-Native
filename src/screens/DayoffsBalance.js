import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import Drawer from '../components/Sidebar/Drawer';
import BalanceRow from '../components/Vacation/LeaveDaysBalance/BalanceRow';

export default function LeaveDaysBalance() {
  return (
    <Drawer>
      <Header title="Balance" />
      <View style={styles.container}>
        <BalanceRow type="Paid vacation" used={7} total={24} />
        <BalanceRow type="Unpaid vacation" used={7} total={15} />
        <BalanceRow type="Paid maternity leave" used={0} total={126} />
        <BalanceRow type="Unpaid Maternity leave" used={450} total={547} />
        <BalanceRow type="Sick leave" used={10} total={40} />
        <BalanceRow type="Study leave" used={5} total={30} />
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
