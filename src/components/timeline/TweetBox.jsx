import { Avatar, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./TweetBox.scss";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      username: "yoshii_s",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://pbs.twimg.com/profile_images/1504842282121392132/1JiRCd_m_400x400.jpg",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            type="text"
            placeholder="いまどうしてる？"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          type="submit"
          className="tweetBox__tweetButton"
          sx={{ ml: "auto" }}
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
