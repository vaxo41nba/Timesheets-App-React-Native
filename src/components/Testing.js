import React from 'react';
import { StyleSheet, View } from 'react-native';

const backgroundColor = 'black';

export default function Testing() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 250,
          height: 250,
          borderRadius: 200,
          borderWidth: 12,
          borderColor: backgroundColor,
          // backgroundColor: 'white',
          marginRight: -120,
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          backgroundColor: 'blue',
          justifyContent: 'space-evenly',
          overflow: 'hidden',
          zIndex: -10,
        }}
      >
        <View style={{ width: '100%', height: 12, backgroundColor }} />
        <View style={{ width: '100%', height: 12, backgroundColor }} />
        <View style={{ width: '100%', height: 12, backgroundColor }} />
        <View
          style={{
            width: 12,
            height: '100%',
            backgroundColor,
            position: 'absolute',
            left: 75 - 6,
            top: 0,
          }}
        />
      </View>
      <View
        style={{
          width: 250,
          height: 250,
          borderRadius: 200,
          borderWidth: 12,
          borderColor: backgroundColor,
          // backgroundColor: 'white',
          marginLeft: -120,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
