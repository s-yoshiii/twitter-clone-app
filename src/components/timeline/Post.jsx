import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <h3 className="post__headerText">プログラミングチュートリアル</h3>
          <div className="post__headerSpecial">
            <VerifiedUser className="post__badge" sx={{ fontSize: 14 }} />
            @name
          </div>
          <div className="post__headerDiscription">
            <p>テキストテキストテキスト</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random/" alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
