import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppInput from '../components/AppInput';
import AppText from '../components/AppText';
import Header from '../components/Header';
import Message from '../components/Messages/Message';
import Drawer from '../components/Sidebar/Drawer';

import messages from '../constants/messages';

export default function Messages() {
  return (
    <Drawer>
      <Header title="Messages" />
      <View style={styles.workerBlock}>
        <AppText style={styles.worker}>Vakhtang Elisabedashvili</AppText>
      </View>
      <View style={styles.container}>
        <View style={styles.scrollStyle}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'height' : null}
            keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
            style={styles.flex}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {messages.map(mes => (
                <Message
                  key={mes.message}
                  user={mes.user}
                  date={mes.date}
                  message={mes.message}
                />
              ))}
            </ScrollView>
            <View style={styles.bottom}>
              <AppInput multiline placeholder="Reply..." style={styles.input} />
              <MaterialIcons name="send" size={40} color="#FF9600" />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
    borderColor: '#C4C3C2',
    borderWidth: 1,
    marginRight: 15,
  },
  flex: { flex: 1 },
  scrollStyle: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 3,
  },
  workerBlock: {
    height: 60,
    backgroundColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
  },
  worker: {
    color: 'white',
    fontSize: 20,
  },
});
