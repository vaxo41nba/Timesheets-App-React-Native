import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  Switch,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import LoginErrorModal from '../components/modals/LoginErrorModal';
import AppText from '../components/AppText';
import AppInput from '../components/AppInput';

import { toggleOrangeModal, handleLogin } from '../redux/modal/actions';
import { setRank } from '../redux/workers/actions';
import SelectLanguage from '../components/modals/SelectLanguage';
import { toggleVacation } from '../redux/vacation/actions';

export default function LogIn({ navigation }) {
  const dispatch = useDispatch();
  const state = useSelector(s => s);

  const {
    approve_reject: { loginError },
    workers: { currentRank },
    vacation: { vacationMode },
  } = state;

  const [language, setLanguage] = useState('English');
  const [languageModal, setLanguageModal] = useState(false);
  const [rankDropdown, setRankDropdown] = useState(false);
  const [height, setHeight] = useState('100%');

  const changeLanguage = lang => {
    setLanguage(lang);
    setLanguageModal(false);
  };

  const handleError = bool => {
    dispatch(handleLogin(bool));
    dispatch(toggleOrangeModal(bool));
  };

  const adjustHeight = focus => {
    if (focus.currentTarget.isFocused()) {
      setHeight(Dimensions.get('window').height);
    } else {
      setHeight('100%');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      >
        <ScrollView contentContainerStyle={[styles.container, { height }]}>
          {/* Logo */}
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />

          <View style={styles.inputs}>
            {/* ID input */}
            <AppInput
              style={styles.input}
              placeholder="ID number"
              placeholderTextColor="#AAA1A1"
              onFocus={adjustHeight}
              onBlur={adjustHeight}
            />

            {/* Temporary Solution (switching ranks) */}
            <TouchableOpacity
              style={styles.dropdownInput}
              onPress={() => setRankDropdown(!rankDropdown)}
            >
              <AppText style={styles.language}>
                {currentRank || 'Select Rank'}
              </AppText>
              <AppText style={styles.arrow}>▼</AppText>
            </TouchableOpacity>
            {rankDropdown && (
              <View style={styles.dropdownBlock}>
                <AppText
                  style={styles.dropdownItem}
                  onPress={() => {
                    setRankDropdown(!rankDropdown);
                    dispatch(setRank('manager'));
                  }}
                >
                  Manager
                </AppText>
                <AppText
                  style={styles.dropdownItem}
                  onPress={() => {
                    setRankDropdown(!rankDropdown);
                    dispatch(setRank('worker'));
                  }}
                >
                  Worker
                </AppText>
                <AppText
                  style={styles.dropdownItem}
                  onPress={() => {
                    setRankDropdown(!rankDropdown);
                    dispatch(setRank('dealer'));
                  }}
                >
                  Dealer
                </AppText>
              </View>
            )}

            {/* TEMPORARY */}
            {/* Modal */}
            <TouchableOpacity
              style={styles.dropdownInput}
              onPress={() => setLanguageModal(!languageModal)}
            >
              <AppText style={styles.language}>
                {language || 'Language'}
              </AppText>
              <AppText style={styles.arrow}>▼</AppText>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              <AppText style={{ fontSize: 20 }}>Vacation Mode:</AppText>
              <Switch
                trackColor={{ false: 'grey', true: 'black' }}
                thumbColor={vacationMode ? 'orange' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  dispatch(toggleVacation(!vacationMode));
                }}
                value={vacationMode}
              />
            </View>

            <SelectLanguage visible={languageModal} onPress={changeLanguage} />
          </View>

          {/* Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate(vacationMode ? 'VacationMain' : 'Timesheets')}
            onLongPress={() => handleError(true)}
            style={styles.button}
          >
            <AppText style={styles.buttonText}>Login</AppText>
          </TouchableOpacity>
          {/* Error Modal */}
          {loginError && <LoginErrorModal handleError={handleError} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  arrow: {
    color: '#FF9600',
    fontSize: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9600',
    borderRadius: 15,
    width: 180,
    height: 55,
  },
  buttonText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dropdownItem: {
    fontSize: 25,
  },
  dropdownBlock: {
    height: 100,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'space-evenly',
  },
  dropdownInput: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 2,
    borderColor: '#FF9600',
    paddingLeft: 15,
    paddingRight: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  error: {
    fontSize: 25,
  },
  inputs: {
    height: '30%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FF9600',
    paddingHorizontal: 15,
    fontSize: 20,
    borderRadius: 10,
  },
  language: {
    fontSize: 20,
    color: '#AAA1A1',
    flex: 1,
  },
  logo: {
    height: '16%',
    width: '80%',
    resizeMode: 'contain',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
  },
  errorBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: 'white',
    height: 100,
  },
  errorTop: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#FF9600',
    height: 70,
  },
  okButton: {
    backgroundColor: '#FF9600',
    width: 80,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#817F79',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#9A9E9D',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.6,
    elevation: 11,
  },
  nonBlurredContent: {
    justifyContent: 'center',
  },
});
