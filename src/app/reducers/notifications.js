import { LOAD_NOTIFICATIONS, TOGGLE_STATUS } from '../actions/notifications';


const notifications = (state = [], action) => {
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

export default notifications
