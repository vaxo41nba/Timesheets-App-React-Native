import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './AppText';

function Header({ navigation, title = 'timesheets' }) {
  const drawerRef = useSelector(state => state.approve_reject.drawerRef);

  const back = () => {
    navigation.goBack();
  };

  const open = () => {
    drawerRef.openDrawer();
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        onPress={back}
        name="keyboard-return"
        size={35}
        color="white"
      />
      <AppText style={styles.text}>{title}</AppText>
      <View style={styles.icon}>
        <MaterialIcons name="menu" size={40} color="white" onPress={open} />
        <AppText style={styles.number}>2</AppText>
      </View>
    </View>
  );
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#FF9600',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  },
  icon: {
    flexDirection: 'row',
    marginRight: -5,
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: -3,
    marginTop: -5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 7,
    textTransform: 'uppercase',
  },
});
