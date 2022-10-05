import { Avatar, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./TweetBox.scss";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            type="text"
            placeholder="いまどうしてる？"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
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
