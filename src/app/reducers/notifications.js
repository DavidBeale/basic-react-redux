const notifications = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_NOTIFICATIONS':
        return action.payload;

    default:
      return state
  }
}

export default notifications
