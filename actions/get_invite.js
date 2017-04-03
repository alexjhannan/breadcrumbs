import ACTION_TYPES from '~/constants/action_types';
import database from '~/firebase/database';

export function getInvite() {
  return (dispatch) => {
    dispatch(getInviteRequestedAction());
    return database.ref('/').once('value', (snap) => {
      const invite = snap.val();
      dispatch(getInviteFulfilledAction(invite))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getInviteRejectedAction());
    });
  }
}

function getInviteRequestedAction() {
  return {
    type: ACTION_TYPES.GetInviteRequested
  };
}

function getInviteRejectedAction() {
  return {
    type: ACTION_TYPES.GetInviteRejected
  }
}

function getInviteFulfilledAction(invite) {
  return {
    type: ACTION_TYPES.GetInviteFulfilled,
    invite
  };
}
