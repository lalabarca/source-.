export default function (state, action) {
  if (state === undefined) {
    return null;
  }

  // handle action SET_ACTIVE_CITY
  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;

    default:
      return state;
  }
}
