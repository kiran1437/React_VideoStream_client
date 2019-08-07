import flv from "flv.js";
import React from "react";

class VideoPlayer extends React.Component {
  videoRef = React.createRef();

  componentDidMount() {
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.id}.flv`
    });

    player.attachMediaElement(this.videoRef.current);
    player.load();
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
