import { connect } from 'react-redux';
import InviteComponent from '~/components/InviteComponent';
import { getInvite } from '~/actions/get_invite';
import { addToInvite } from '../actions/add_to_invite';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(getInvite()),
    onAddToInvite: (name) => dispatch(addToInvite(name))
  };
}

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(InviteComponent);

export default InviteContainer;
