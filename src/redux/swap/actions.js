export const actionTypes = {
  SET_FIRST_DATE: 'SET_FIRST_DATE',
  SET_FIRST_DATEPICKER_VISIBLE: 'SET_FIRST_DATEPICKER_VISIBLE',
  SET_SECOND_DATE: 'SET_SECOND_DATE',
  SET_SECOND_DATEPICKER_VISIBLE: 'SET_SECOND_DATEPICKER_VISIBLE',
  SET_TITLE: 'SET_TITLE',
  SWAP_VISIBLE: 'SWAP_VISIBLE',
};

export const setFirstDate = firstDate => ({
  type: actionTypes.SET_FIRST_DATE,
  firstDate,
});

export const setFirstShow = bool => ({
  type: actionTypes.SET_FIRST_DATEPICKER_VISIBLE,
  bool,
});

export const setSecondDate = secondDate => ({
  type: actionTypes.SET_SECOND_DATE,
  secondDate,
});

export const setSecondShow = bool => ({
  type: actionTypes.SET_SECOND_DATEPICKER_VISIBLE,
  bool,
});

export const setTitle = title => ({
  type: actionTypes.SET_TITLE,
  title,
});

export const setSwapVisible = bool => ({
  type: actionTypes.SWAP_VISIBLE,
  bool,
});
