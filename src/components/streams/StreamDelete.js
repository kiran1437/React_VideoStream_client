import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import _ from "lodash";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui negative button"
          onClick={() => {
            this.props.deleteStream(id);
          }}
        >
          Delete
        </button>
        <button onClick={this.onDismiss} className="ui button">
          Cancel
        </button>
      </React.Fragment>
    );
  };

  onDismiss = () => {
    history.push("/");
  };

  render() {
    const { title = "" } = _.pick(this.props.stream, "title");

    return (
      <Modal
        title="Delete Stream"
        content={`Delete the stream ${title}?`}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
