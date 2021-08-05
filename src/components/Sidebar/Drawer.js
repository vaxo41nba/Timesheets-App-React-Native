import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerLayout } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { setDrawerRef } from '../../redux/modal/actions';
import Sidebar from './index';

export default function Drawer({ children }) {
  const dispatch = useDispatch();

  return (
    <DrawerLayout
      ref={drawer => dispatch(setDrawerRef(drawer))}
      drawerWidth={Dimensions.get('screen').width * 0.85}
      keyboardDismissMode="on-drag"
      drawerPosition="right"
      drawerType="front"
      renderNavigationView={() => <Sidebar />}
    >
      {children}
    </DrawerLayout>
  );
}
