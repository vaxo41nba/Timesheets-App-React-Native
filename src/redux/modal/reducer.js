import { actionTypes } from './actions';

const INITIAL_STATE = {
  orangeVisible: false,
  workAbsentVisible: false,
  approve: false,
  reject: false,
  buttonsDisabled: true,
  confirmScreen: false,
  reason: null,
  reasonModal: false,
  success: false,
  fail: false,
  loginError: false,
  send: false,
  cancel: false,
  dayPickModal: false,
  drawerRef: {},
};

export default (state = INITIAL_STATE, action) => {
  const { bool, text, ref } = action;
  const { drawerRef, workAbsentVisible, buttonsDisabled } = state;
  switch (action.type) {
    case actionTypes.TOGGLE_ORANGE_MODAL:
      return {
        ...state,
        orangeVisible: bool,
      };
    case actionTypes.WORK_ABSENT_VISIBLE:
      return {
        ...state,
        workAbsentVisible: bool,
      };
    case actionTypes.HANDLE_APPROVE:
      return {
        ...state,
        approve: bool,
      };
    case actionTypes.HANDLE_REJECT:
      return {
        ...state,
        reject: bool,
      };
    case actionTypes.BUTTONS_DISABLED:
      return {
        ...state,
        buttonsDisabled: bool,
      };
    case actionTypes.CONFIRM_SCREEN:
      return {
        ...state,
        confirmScreen: bool,
      };
    case actionTypes.HANDLE_REASON:
      return {
        ...state,
        reason: text,
      };
    case actionTypes.HANDLE_REASON_MODAL:
      return {
        ...state,
        reasonModal: bool,
      };
    case actionTypes.HANDLE_SUCCESS:
      return {
        ...state,
        success: bool,
      };
    case actionTypes.HANDLE_FAIL:
      return {
        ...state,
        fail: bool,
      };
    case actionTypes.HANDLE_LOGIN:
      return {
        ...state,
        loginError: bool,
      };
    case actionTypes.HANDLE_SEND:
      return {
        ...state,
        send: bool,
      };
    case actionTypes.HANDLE_CANCEL:
      return {
        ...state,
        cancel: bool,
      };
    case actionTypes.HANDLE_DAY_PICK:
      return {
        ...state,
        dayPickModal: bool,
      };
    case actionTypes.DRAWER_REF:
      return {
        ...state,
        drawerRef: ref,
      };
    case actionTypes.RESET_MODALS:
      return {
        ...INITIAL_STATE,
        drawerRef,
        workAbsentVisible,
        buttonsDisabled,
      };
    default:
      return state;
  }
};
