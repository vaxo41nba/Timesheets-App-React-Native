export const actionTypes = {
  TOGGLE_ORANGE_MODAL: 'TOGGLE_ORANGE_MODAL',
  WORK_ABSENT_VISIBLE: 'WORK_ABSENT_VISIBLE',
  HANDLE_APPROVE: 'HANDLE_APPROVE',
  HANDLE_REJECT: 'HANDLE_REJECT',
  BUTTONS_DISABLED: 'BUTTONS_DISABLED',
  CONFIRM_SCREEN: 'CONFIRM_SCREEN',
  HANDLE_REASON: 'HANDLE_REASON',
  HANDLE_REASON_MODAL: 'HANDLE_REASON_MODAL',
  HANDLE_SUCCESS: 'HANDLE_SUCCESS',
  HANDLE_FAIL: 'HANDLE_FAIL',
  HANDLE_LOGIN: 'HANDLE_LOGIN',
  HANDLE_SEND: 'HANDLE_SEND',
  HANDLE_CANCEL: 'HANDLE_CANCEL',
  HANDLE_DAY_PICK: 'HANDLE_DAY_PICK',
  DRAWER_REF: 'DRAWER_REF',
  RESET_MODALS: 'RESET_MODALS',
};

export const toggleOrangeModal = bool => ({
  type: actionTypes.TOGGLE_ORANGE_MODAL,
  bool,
});

export const handleWorkAbsentVisible = bool => ({
  type: actionTypes.WORK_ABSENT_VISIBLE,
  bool,
});

export const handleApprove = bool => ({
  type: actionTypes.HANDLE_APPROVE,
  bool,
});

export const handleReject = bool => ({
  type: actionTypes.HANDLE_REJECT,
  bool,
});

export const handleButtonsDisabled = bool => ({
  type: actionTypes.BUTTONS_DISABLED,
  bool,
});

export const handleConfirmScreen = bool => ({
  type: actionTypes.CONFIRM_SCREEN,
  bool,
});

export const handleReason = text => ({
  type: actionTypes.HANDLE_REASON,
  text,
});

export const handleReasonModal = bool => ({
  type: actionTypes.HANDLE_REASON_MODAL,
  bool,
});

export const handleSuccess = bool => ({
  type: actionTypes.HANDLE_SUCCESS,
  bool,
});

export const handleFail = bool => ({
  type: actionTypes.HANDLE_FAIL,
  bool,
});

export const handleLogin = bool => ({
  type: actionTypes.HANDLE_LOGIN,
  bool,
});

export const handleSend = bool => ({
  type: actionTypes.HANDLE_SEND,
  bool,
});

export const handleCancel = bool => ({
  type: actionTypes.HANDLE_CANCEL,
  bool,
});

export const handleDayPick = bool => ({
  type: actionTypes.HANDLE_DAY_PICK,
  bool,
});

export const setDrawerRef = ref => ({
  type: actionTypes.DRAWER_REF,
  ref,
});

export const resetModals = () => ({
  type: actionTypes.RESET_MODALS,
});
