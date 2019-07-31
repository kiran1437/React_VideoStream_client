import React from "react";
import { connect } from "react-redux";
import { signInAction, signOutAction } from "../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", this._onAuthLoad);
  }

  _onAuthLoad = async () => {
    await window.gapi.client.init({
      clientId:
        "1031257106151-9scvaac73l6a647pqvqcc3hl4d5hhuf2.apps.googleusercontent.com",
      scope: "email"
    });
    this.auth = await window.gapi.auth2.getAuthInstance();
    this._onAuthChange(this.auth.isSignedIn.get()); //to get initial log status
    this.auth.isSignedIn.listen(this._onAuthChange);
  };

  _onAuthChange = isSignedIn => {
    const gUserId = this.auth.currentUser.get().getId();
    isSignedIn ? this.props.signInAction(gUserId) : this.props.signOutAction();
  };

  renderAuthButton() {
    switch (this.props.isSignedIn) {
      case false:
        return (
          <button className="ui red google button" onClick={this.SignInClick}>
            <i className="google icon" />
            Sign in with Google
          </button>
        );
      case true:
        return (
          <button className="ui red google button" onClick={this.SignOutClick}>
            <i className="google icon" />
            Sign Out
          </button>
        );

      default:
        return null;
    }
  }

  SignInClick = () => {
    this.auth.signIn();
  };
  SignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    console.log(this.props);
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapPropsToState = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapPropsToState,
  { signInAction, signOutAction }
)(GoogleAuth);
