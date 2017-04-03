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
        <div className="container">
          <div className="well">
            <h1>Meeting invite</h1>
          </div>
          <div className="bg-warning meeting-summary">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Host:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                {host}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Agenda:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                {agenda}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Guests:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                { this.props.invite.guests &&
                  <ul>
                    {
                      this.props.invite.guests.map((guest) => <li>{ guest.name }</li>)
                    }
                  </ul>
                }
              </div>
            </div>
          </div>
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
      </div>
    );
  }
};
