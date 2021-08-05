import { actionTypes } from './actions';
import departments from '../../constants/departments';

const INITIAL_STATE = {
  listVisible: false,
  statusesVisible: false,
  departments,
  activeDepartment: 'All',
  currentRank: 'worker',
  currentStatus: 'All',
};

export default (state = INITIAL_STATE, action) => {
  const { bool, title, text } = action;
  switch (action.type) {
    case actionTypes.TOGGLE_LIST:
      return {
        ...state,
        listVisible: bool,
      };
    case actionTypes.TOGGLE_STATUS_LIST:
      return {
        ...state,
        statusesVisible: bool,
      };
    case actionTypes.ACTIVE_DEPARTMENT:
      return {
        ...state,
        activeDepartment: title,
      };
    case actionTypes.SET_RANK:
      return {
        ...state,
        currentRank: title,
      };
    case actionTypes.HANDLE_STATUS:
      return {
        ...state,
        currentStatus: text,
      };
    default:
      return state;
  }
};
