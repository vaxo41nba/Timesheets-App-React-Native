import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import AppText from '../AppText';

function Card({
  notification, warning, date, message, navigation, swap,
}) {
  const messages = () => {
    navigation.navigate('Messages');
  };

  return (
    <View style={styles.container}>
      <AppText medium style={styles.text}>
        {notification}
      </AppText>

      {warning && (
        <View style={styles.warning}>
          <Ionicons name="warning-outline" size={40} color="#FF9600" />
          <AppText style={styles.warningText}>{warning}</AppText>
        </View>
      )}

      {swap && (
        <View style={styles.swap}>
          <AppText style={styles.swapText}>{swap[0]}</AppText>
          <MaterialIcons name="swap-horiz" size={45} color="#817F79" />
          <AppText style={styles.swapText}>{swap[1]}</AppText>
        </View>
      )}

      {message && (
        <View style={styles.warning}>
          <MaterialIcons name="chat" size={40} color="#FF9600" />
          <AppText style={styles.warningText} onPress={messages}>
            {message}
            <AppText style={{ color: '#FF9600' }}> ...see more</AppText>
          </AppText>
        </View>
      )}
      <AppText style={styles.date}>{date}</AppText>
    </View>
  );
}
export default withNavigation(Card);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginVertical: 10,

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  date: {
    color: '#817F79',
    fontSize: 15,
    marginTop: 10,
  },
  swap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
  },
  swapText: {
    color: '#FF9600',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    lineHeight: 28,
  },
  warning: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 25,
  },
  warningText: {
    fontSize: 15,
    flex: 1,
    marginLeft: 20,
    lineHeight: 25,
  },
});
