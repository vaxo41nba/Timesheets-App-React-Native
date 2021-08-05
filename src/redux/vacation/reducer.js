import { actionTypes } from './actions';

const INITIAL_STATE = {
  vacationMode: false,
  month: null,
  dayOffPickerModal: false,
  confirmVisible: false,
  startDate: new Date(),
  endDate: new Date(),
  startDatePickerVisible: false,
  endDatePickerVisible: false,
};

export default (state = INITIAL_STATE, action) => {
  const { month, bool, startDate, endDate } = action;
  switch (action.type) {
    case actionTypes.SET_MONTH:
      return {
        ...state,
        month,
      };
    case actionTypes.HANDLE_DAYOFF_PICKER:
      return {
        ...state,
        dayOffPickerModal: bool,
      };
    case actionTypes.HANDLE_SUBMIT:
      return {
        ...state,
        confirmVisible: bool,
      };
    case actionTypes.START_DATE:
      return {
        ...state,
        startDate,
      };
    case actionTypes.END_DATE:
      return {
        ...state,
        endDate,
      };
    case actionTypes.SET_START_DATE_VISIBLE:
      return {
        ...state,
        startDatePickerVisible: bool,
      };
    case actionTypes.SET_END_DATE_VISIBLE:
      return {
        ...state,
        endDatePickerVisible: bool,
      };
    case actionTypes.TOGGLE_VACATION:
      return {
        ...state,
        vacationMode: bool,
      };
    default:
      return state;
  }
};
