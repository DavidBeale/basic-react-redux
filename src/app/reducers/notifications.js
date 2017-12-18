import { combineReducers } from 'redux'

import { LOAD_NOTIFICATIONS, TOGGLE_STATUS, TOGGLE_SHOW_UNACKNOWLEDGED } from '../actions/notifications';


const notificationItems = (state = [], action) => {
  switch (action.type) {
    case LOAD_NOTIFICATIONS:
        return action.payload;

    case TOGGLE_STATUS:
        return state.map(notification => {
            if (notification.id === action.payload) {
                return {
                    ...notification,
                    acknowledged: !notification.acknowledged
                }
            }

            return notification;
        });

    default:
      return state
  }
}


const showUnacknowledged = (state = true, action) => {
    switch (action.type) {
      case TOGGLE_SHOW_UNACKNOWLEDGED:
          return state = !state;

      default:
        return state
    }
}


export default combineReducers({
  notificationItems,
  showUnacknowledged
})
