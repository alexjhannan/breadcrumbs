import ACTION_TYPES from '~/constants/action_types';
import database from '~/firebase/database';

export function watchGuestAddedEvent(dispatch) {
  database.ref('/guests').on('child_added', (snap) => {
    dispatch(getGuestAddedAction(snap.val()));
  });
}

function getGuestAddedAction(guest) {
  return {
    type: ACTION_TYPES.GuestAdded,
    guest
  };
}
