import { connect } from 'react-redux';
import InviteComponent from '../components/InviteComponent.jsx';
import { getInvite } from '../actions/get_invite';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(getInvite()),
  };
}

const InviteContainer = connect(mapStateToProps, mapDispatchToProps)(InviteComponent);

export default InviteContainer;
