import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Timeline.scss";
import TweetBox from "./TweetBox";
import db from "../../firebase";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";
const Timeline = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            key={post.text}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Timeline;
