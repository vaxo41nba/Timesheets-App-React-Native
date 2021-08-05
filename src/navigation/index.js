import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LogInScreen from '../screens/LogIn';
import TimesheetsScreen from '../screens/Timesheets';
import MyTimesheetScreen from '../screens/MyTimesheet';
import NotificationsScreen from '../screens/Notifications';
import MessagesScreen from '../screens/Messages';

import VacationMainScreen from '../screens/VacationMain';
import LeaveRequestScreen from '../screens/RequestDayOff';
import MyLeaveRequestsScreen from '../screens/MyLeaveRequests';
import LeaveDaysBalanceScreen from '../screens/DayoffsBalance';
import TeamLeaveRequestsScreen from '../screens/TeamLeaveRequests';
import TeamDayoffsBalanceScreen from '../screens/TeamDayoffsBalance';

const Navigator = createStackNavigator(
  {
    // Timesheets
    Login: LogInScreen,
    Timesheets: TimesheetsScreen,
    MyTimesheet: MyTimesheetScreen,
    Messages: MessagesScreen,
    Notifications: NotificationsScreen,

    // Vacations and leave requests
    VacationMain: VacationMainScreen,
    LeaveRequest: LeaveRequestScreen,
    MyLeaveRequests: MyLeaveRequestsScreen,
    LeaveDaysBalance: LeaveDaysBalanceScreen,
    TeamLeaveRequests: TeamLeaveRequestsScreen,
    TeamDayoffsBalance: TeamDayoffsBalanceScreen,
  },
  { headerMode: 'none' },
);

export default createAppContainer(Navigator);
