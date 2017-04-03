import { connect } from 'react-redux';
import InviteComponent from '~/components/InviteComponent';
import { getInvite } from '~/actions/get_invite';
import { addToInvite } from '~/actions/add_to_invite';
import { watchGuestAddedEvent } from '~/actions/guest_added_event';


function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  watchGuestAddedEvent(dispatch);
  return {
    onGetInvite: () => dispatch(getInvite()),
    onAddToInvite: (name) => dispatch(addToInvite(name))
  };
}

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(InviteComponent);

export default InviteContainer;
