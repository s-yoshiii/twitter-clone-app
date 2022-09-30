import React from "react";
import Post from "./Post";
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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Timeline;
