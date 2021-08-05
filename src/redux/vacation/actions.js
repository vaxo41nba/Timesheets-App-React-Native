export const actionTypes = {
  SET_MONTH: 'SET_MONTH',
  HANDLE_DAYOFF_PICKER: 'HANDLE_DAYOFF_PICKER',
  HANDLE_SUBMIT: 'HANDLE_SUBMIT',
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  SET_START_DATE_VISIBLE: 'SET_START_DATE_VISIBLE',
  SET_END_DATE_VISIBLE: 'SET_END_DATE_VISIBLE',
  TOGGLE_VACATION: 'TOGGLE_VACATION',
};

export const setMonth = month => ({
  type: actionTypes.SET_MONTH,
  month,
});
export const handleDayoffPicker = bool => ({
  type: actionTypes.HANDLE_DAYOFF_PICKER,
  bool,
});
export const handleRequestSubmit = bool => ({
  type: actionTypes.HANDLE_SUBMIT,
  bool,
});
export const setStartDate = startDate => ({
  type: actionTypes.START_DATE,
  startDate,
});
export const setEndDate = endDate => ({
  type: actionTypes.END_DATE,
  endDate,
});
export const setStartDateVisible = bool => ({
  type: actionTypes.SET_START_DATE_VISIBLE,
  bool,
});
export const setEndDateVisible = bool => ({
  type: actionTypes.SET_END_DATE_VISIBLE,
  bool,
});
export const toggleVacation = bool => ({
  type: actionTypes.TOGGLE_VACATION,
  bool,
});
