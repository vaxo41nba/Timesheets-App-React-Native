import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import AppButton from '../../Buttons/AppButton';
import { setTitle } from '../../../redux/swap/actions';
import AppText from '../../AppText';

export default function ConfirmSwap({ route, navigation }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isFocused) {
      dispatch(setTitle(route.name));
      setTimeout(() => {
        setVisible(true);
      }, 720);
    }
    return () => {
      setVisible(false);
    };
  }, [isFocused]);

  const yes = () => {
    navigation.navigate('Success');
  };

  const yesLongPress = () => {
    navigation.navigate('Fail');
  };
  const no = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {visible && (
        <>
          <AppText style={styles.text}>Are you sure?</AppText>
          <View style={styles.buttons}>
            <AppButton
              buttonStyle={styles.button}
              color
              text="YES"
              onPress={yes}
              onLongPress={yesLongPress}
            />
            <AppButton buttonStyle={styles.button} text="NO" onPress={no} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
