export const actionTypes = {
  TOGGLE_LIST: 'TOGGLE_LIST',
  TOGGLE_STATUS_LIST: 'TOGGLE_STATUS_LIST',
  ACTIVE_DEPARTMENT: 'ACTIVE_DEPARTMENT',
  SET_RANK: 'SET_RANK',
  HANDLE_STATUS: 'HANDLE_STATUS',
};

export const toggleList = bool => ({
  type: actionTypes.TOGGLE_LIST,
  bool,
});

export const toggleStatusList = bool => ({
  type: actionTypes.TOGGLE_STATUS_LIST,
  bool,
});

export const handleActiveDepartment = title => ({
  type: actionTypes.ACTIVE_DEPARTMENT,
  title,
});

export const setRank = title => ({
  type: actionTypes.SET_RANK,
  title,
});

export const handleStatus = text => ({
  type: actionTypes.HANDLE_STATUS,
  text,
});
