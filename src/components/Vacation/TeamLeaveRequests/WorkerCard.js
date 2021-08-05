import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import AppText from '../../AppText';

export default function WorkerCard({ approved }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MaterialIcons
          name="account-box"
          size={55}
          color="#817F79"
          style={styles.marginLeft}
        />

        <View style={styles.flex0_7}>
          <AppText style={styles.text} numberOfLines={1} medium>
            Vakho Elisabedashvili
          </AppText>
          <AppText style={styles.title} numberOfLines={1}>
            Front End Web Developer
          </AppText>
        </View>

        <View style={styles.flex0_3}>
          <AppText>3 Days Off</AppText>
        </View>
      </View>

      <View style={[styles.row, styles.white]}>
        <View style={styles.flex0_7}>
          <AppText style={styles.text}>Unpaid maternity leave</AppText>
          <View style={styles.left}>
            <View style={styles.date}>
              <Ionicons name="calendar-outline" size={20} color="#9F9D9B" />
              <AppText style={[styles.text, styles.grey]}> 5-Jun-2021</AppText>
            </View>
            <View style={styles.line} />
            <View style={styles.date}>
              <Ionicons name="calendar-outline" size={20} color="#9F9D9B" />
              <AppText style={[styles.text, styles.grey]}> 15-Jun-2021</AppText>
            </View>
          </View>
        </View>
        <View style={styles.flex0_3}>
          {approved ? (
            <AppText style={[styles.text, styles.green]}>Approved</AppText>
          ) : (
            <View style={styles.buttons}>
              <Ionicons
                name="ios-close-circle-outline"
                size={40}
                color="#FF9600"
              />
              <Ionicons
                name="ios-checkmark-circle-outline"
                size={40}
                color="#A5D2B6"
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  flex0_3: {
    flex: 0.3,
    alignItems: 'center',
  },
  grey: {
    color: '#9F9D9B',
  },
  green: {
    color: '#55AE77',
  },
  flex0_7: {
    flex: 0.7,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  line: {
    backgroundColor: '#9F9D9B',
    width: 20,
    height: 1,
    marginHorizontal: 5,
  },
  marginLeft: { marginLeft: -10 },
  row: {
    backgroundColor: '#FFF2E0',
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { fontSize: 15 },
  title: { fontSize: 15, opacity: 0.5 },
  white: { backgroundColor: 'white', paddingVertical: 20 },
});
