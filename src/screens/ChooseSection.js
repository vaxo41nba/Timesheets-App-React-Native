import React from 'react';
import {
  Image, Pressable, StyleSheet, View,
} from 'react-native';

import AppText from '../components/AppText';

import sections from '../constants/sections';

export default function ChooseSection() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      <View style={styles.flex}>
        {sections.map(section => (
          <Pressable key={section.name} style={styles.block}>
            <View style={styles.orange}>
              <Image source={section.icon} style={styles.icon} />
            </View>
            <AppText style={styles.text} medium>
              {section.name}
            </AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    width: '50%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    height: '100%',
    resizeMode: 'contain',
  },
  logo: {
    height: '15%',
    resizeMode: 'contain',
    marginVertical: 20,
    alignSelf: 'center',
  },
  orange: {
    backgroundColor: '#FF9600',
    borderRadius: 15,
    height: 80,
    width: '85%',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 15,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
});
