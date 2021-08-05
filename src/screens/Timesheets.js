import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRank } from '../redux/workers/actions';
import ChooseTimesheet from './ChooseTimesheet';
import MyTimesheet from './MyTimesheet';
import TeamTimeSheet from './TeamTimeSheet';

export default function Timesheets() {
  const dispatch = useDispatch();
  const currentRank = useSelector((state) => state.workers.currentRank);

  const navigateAs = (rank) => {
    dispatch(setRank(rank));
  };

  return (
    <>
      {currentRank === 'manager' && <TeamTimeSheet />}
      {(currentRank === 'worker' || currentRank === 'dealer') && (
        <MyTimesheet />
      )}
      {!currentRank && <ChooseTimesheet navigateAs={navigateAs} />}
    </>
  );
}
