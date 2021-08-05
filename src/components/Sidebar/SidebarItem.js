import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';

import AppText from '../AppText';
import { setDrawerRef, toggleOrangeModal } from '../../redux/modal/actions';
import { setSwapVisible } from '../../redux/swap/actions';

function SidebarItem({ title, icon, number, navigation }) {
  const drawerRef = useSelector((state) => state.approve_reject.drawerRef);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(setDrawerRef(drawerRef));
    },
    []
  );

  const onPress = () => {
    if (title === 'request for a swap') {
      dispatch(setSwapVisible(true));
      dispatch(toggleOrangeModal(true));
    } else {
      navigate();
    }
    drawerRef.closeDrawer();
  };

  const notificationNumber = () => title === 'notifications';
  const messageNumber = () => title === 'messaging';

  const navigate = () => {
    switch (title) {
      case 'notifications':
        navigation.navigate('Notifications');
        break;
      case 'messaging':
        navigation.navigate('Messages');
        break;
      case 'balance':
        navigation.navigate('TeamDayoffsBalance');
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ width: 50, flexDirection: 'row' }}>
        <MaterialIcons name={icon} size={40} color='#000' />
        {notificationNumber() && (
          <AppText style={styles.notification}>{number}</AppText>
        )}
        {messageNumber() && <AppText style={styles.message}>{number}</AppText>}
      </View>
      <AppText style={styles.title}>{title}</AppText>
    </TouchableOpacity>
  );
}

export default withNavigation(SidebarItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  message: {
    position: 'absolute',
    top: -10,
    right: -5,
    fontSize: 22,
    color: '#FF9600',
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    top: -5,
    right: 0,
    fontSize: 22,
    color: '#FF9600',
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 25,
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
