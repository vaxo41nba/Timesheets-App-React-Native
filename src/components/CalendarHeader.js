import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import months from '../constants/months';
import AppText from './AppText';

export default class CalendarHeader extends Component {
  add = () => {
    const { addMonth } = this.props;
    return addMonth(1);
  };

  sub = () => {
    const { addMonth } = this.props;
    return addMonth(-1);
  };

  render() {
    const { month } = this.props;
    return (
      <>
        <View style={styles.months}>
          <AppText style={styles.month}>{months[month.getMonth()]}</AppText>

          <View style={styles.arrows}>
            <AntDesign
              name="left"
              size={22}
              color="#9F9D9B"
              onPress={this.sub}
            />

            <AntDesign
              name="right"
              size={22}
              color="#9F9D9B"
              onPress={this.add}
            />
          </View>
        </View>

        <View style={styles.weeks}>
          <AppText style={styles.week}>M</AppText>
          <AppText style={styles.week}>T</AppText>
          <AppText style={styles.week}>W</AppText>
          <AppText style={styles.week}>T</AppText>
          <AppText style={styles.week}>F</AppText>
          <AppText style={styles.week}>S</AppText>
          <AppText style={styles.week}>S</AppText>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  arrows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  month: {
    fontSize: 20,
  },
  months: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 13,
    paddingRight: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  weeks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  week: {
    color: '#9F9D9B',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
});
