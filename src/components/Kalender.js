import React, { useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { useSelector, useDispatch } from 'react-redux';

import DayPickerModal from './modals/DayPickerModal';
import Day from './Day';
import VacationDay from './Vacation/VacationDay';
import { setMonth } from '../redux/vacation/actions';
import CalendarHeader from './CalendarHeader';

export default function Kalender() {
  const dispatch = useDispatch();
  const vacationMode = useSelector(state => state.vacation.vacationMode);

  useEffect(() => {
    const date = new Date();
    dispatch(setMonth(date.getMonth() + 1));
  }, []);

  const handleMonthChange = month => {
    dispatch(setMonth(month.month));
  };

  return (
    <>
      <Calendar
        style={{ marginHorizontal: 10 }}
        firstDay={1}
        customHeader={CalendarHeader}
        onMonthChange={handleMonthChange}
        dayComponent={({ date, state }) => (
          <>
            {vacationMode ? (
              <VacationDay curDate={date} curState={state} />
            ) : (
              <Day curDate={date} curState={state} />
            )}
          </>
        )}
      />

      {/* Picker Modal */}
      {!vacationMode && <DayPickerModal />}
    </>
  );
}
