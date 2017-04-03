import React, { PropTypes } from 'react';

export default class InviteComponent extends React.Component {
  static propTypes = {
    onGetInvite: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  componentDidMount() {
    this.props.onGetInvite();
  }

  render() {
    const { host, agenda } = this.props.invite;

    return (
      <div className="bg-info meeting-form">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <b>Name:</b>
          </div>
          <div className="col-sm-8 col-md-10">
            <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.onAddToInvite(this.state.name)}
            >
              I am coming!
            </button>
          </div>
        </div>
      </div>
    );
  }
};
