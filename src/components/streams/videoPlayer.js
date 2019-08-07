import flv from "flv.js";
import React from "react";

class VideoPlayer extends React.Component {
  videoRef = React.createRef();

  componentDidMount() {
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  render() {
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
      </div>
    );
  }
}
export default VideoPlayer;
