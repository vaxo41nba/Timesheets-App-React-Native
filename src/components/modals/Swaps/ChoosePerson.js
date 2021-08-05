import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Fontisto } from '@expo/vector-icons';

import { setTitle } from '../../../redux/swap/actions';
import AppText from '../../AppText';
import AppInput from '../../AppInput';
import AppButton from '../../Buttons/AppButton';

export default function ChoosePerson({ navigation, route }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [padding, setPadding] = useState(0);
  const [placeholder, setPlaceholder] = useState(null);

  useEffect(() => {
    if (isFocused) {
      dispatch(setTitle(route.name));

      setTimeout(() => {
        setPadding(10);
        setVisible(true);
        setPlaceholder('Write a comment . . .');
      }, 720);
    }

    return () => {
      setPadding(0);
      setPlaceholder(null);
    };
  }, [isFocused]);

  const back = () => {
    navigation.goBack();
  };
  const confirm = () => {
    navigation.navigate('Confirm');
  };

  return (
    <View style={styles.container}>
      {visible && (
        <>
          <AppText medium style={styles.text}>
            Choose a person:
          </AppText>
          <AppInput placeholder="Name Surname" style={styles.personInput} />

          <AppText medium style={styles.text}>
            Send message
          </AppText>

          <AppInput
            style={[styles.input, { padding }]}
            multiline
            placeholder={placeholder}
          />

          <View style={styles.bottom}>
            <Fontisto
              onPress={back}
              name="angle-left"
              size={25}
              color="#FF9600"
            />
            <AppButton
              text="Send"
              onPress={confirm}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: '20%',
    borderColor: '#817F79',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FF9600',
    fontSize: 15,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    textAlignVertical: 'top',
    width: '100%',
    flex: 1,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 10,
  },
  personInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#9F9D9B',
    marginBottom: 25,
  },
  text: {
    fontSize: 17,
    marginBottom: 10,
  },
});
