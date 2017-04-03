import ACTION_TYPES from '~/constants/action_types';
import database from '~/firebase/database';

export function addToInvite(name) {
  return (dispatch) => {
    dispatch(addToInviteRequestedAction());
    const guestsRef = database.ref('/guests');
    guestsRef.push({
      name
    })
    .then(() => {
      dispatch(addToInviteFulfilledAction({ name }));
    })
    .catch((error) => {
      dispatch(addToInviteRejectedAction());
    });
  }
}

function addToInviteRequestedAction() {
  return {
    type: ACTION_TYPES.AddToInviteRequested
  };
}

function addToInviteRejectedAction() {
  return {
    type: ACTION_TYPES.AddToInviteRejected
  }
}

function addToInviteFulfilledAction(guest) {
  return {
    type: ACTION_TYPES.AddToInviteFulfilled,
    guest
  };
}
