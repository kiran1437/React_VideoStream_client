import React from "react";

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
    this._onAuthChange();
    this.auth.isSignedIn.listen(this._onAuthChange);
  };

  _onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    switch (this.state.isSignedIn) {
      case false:
        return <div>Not Signed In</div>;

      case true:
        return <div>Signed In</div>;

      default:
        return <div>Don't know</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
