import { Avatar, Button } from "@mui/material";
import React from "react";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <Avatar />
        <input type="text" placeholder="いまどうしてる？" />
        <input
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
        />
        <Button type="submit" className="tweetBox__tweetButton">
          ツイートする
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
