import { actionTypes } from './actions';

const INITIAL_STATE = {
  firstDatePickerVisible: false,
  firstDate: new Date(),
  secondDatePickerVisible: false,
  secondDate: new Date(),
  title: null,
  visible: false,
};

export default (state = INITIAL_STATE, action) => {
  const {
    firstDate, secondDate, bool, title,
  } = action;
  switch (action.type) {
    case actionTypes.SET_FIRST_DATE:
      return {
        ...state,
        firstDate,
      };
    case actionTypes.SET_FIRST_DATEPICKER_VISIBLE:
      return {
        ...state,
        firstDatePickerVisible: bool,
      };
    case actionTypes.SET_SECOND_DATE:
      return {
        ...state,
        secondDate,
      };
    case actionTypes.SET_SECOND_DATEPICKER_VISIBLE:
      return {
        ...state,
        secondDatePickerVisible: bool,
      };
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title,
      };
    case actionTypes.SWAP_VISIBLE:
      return {
        ...state,
        visible: bool,
      };
    default:
      return state;
  }
};
