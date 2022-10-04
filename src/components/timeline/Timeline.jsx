import React from "react";
import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
const Timeline = () => {
  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    console.log(querySnapshot.docs.map((doc) => doc.data()));
  });
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <Post
        displayName="プログラミングチュートリアル"
        username="yoshiii_s"
        verified={true}
        text="はじめてのツイート"
        avatar="https://pbs.twimg.com/profile_images/1504842282121392132/1JiRCd_m_400x400.jpg"
        image="https:/source.unsplash.com/random"
      />
    </div>
  );
};

export default Timeline;
