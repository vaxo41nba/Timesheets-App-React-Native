import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import AppText from './AppText';

export default function Tabs({ navigation, descriptors, routes }) {
  return (
    <View style={styles.container}>
      {routes.map(route => {
        const focused = descriptors[route.key].navigation.isFocused();
        const navigate = () => {
          navigation.navigate(route.name);
        };
        return (
          <Pressable
            key={route.key}
            style={[styles.tab, focused && styles.focused]}
            onPress={navigate}
          >
            <AppText medium style={styles.tabText}>
              {route.name}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  focused: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  tab: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderEndColor: '#707070',
    borderBottomColor: '#707070',
    backgroundColor: '#FDD8A4',
  },
  tabText: {
    fontSize: 15,
  },
});
