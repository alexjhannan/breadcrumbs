import ACTION_TYPES from '~/constants/action_types'

export default function invite(state = {}, action) {
  switch(action.type) {
    case ACTION_TYPES.AddToInviteFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added guest.'
      });
      return newState;
    }
    case ACTION_TYPES.GuestAdded: {
      const newState = Object.assign({}, state);
      newState.guests = newState.guests || [];
      newState.guests = newState.guests.slice();
      newState.guests.push(action.guest);
      return newState;
    }
    default:
      return state;
  }
}
