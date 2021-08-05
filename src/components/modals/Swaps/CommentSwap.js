import React, { useEffect } from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { setTitle } from '../../../redux/swap/actions';

export default function CommentSwap({ route, navigation }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) dispatch(setTitle(route.name));
  }, [isFocused]);

  const confirm = () => {
    navigation.navigate('Confirm');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please indicate the reason, if necessary:</Text>

      <TextInput style={styles.input} multiline />

      <View style={styles.bottom}>
        <MaterialIcons
          name="send"
          size={50}
          color="#FF9600"
          onPress={confirm}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    textAlignVertical: 'top',
    width: '100%',
    flex: 1,
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: 17,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 15,
  },
  text: {
    fontSize: 22,
  },
});
