import React from "react";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
const Timeline = () => {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      {/* Post */}
    </div>
  );
};

export default Timeline;
