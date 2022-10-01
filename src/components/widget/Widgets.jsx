import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="キーワードを入力してください" id="" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>今どうしている？</h2>
        <TwitterTweetEmbed tweetId={"1576134851090071552"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="yoshiii_s"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/yoshiii_s"}
          options={{ text: "#react.js勉強中", via: "yoshiii_s" }}
        />
      </div>
    </div>
  );
};
