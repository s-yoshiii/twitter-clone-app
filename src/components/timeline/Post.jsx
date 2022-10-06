import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.scss";
const Post = forwardRef(
  ({ displayName, username, verified, text, avatar, image }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <h3 className="post__headerText">{displayName}</h3>
            <div className="post__headerSpecial">
              <VerifiedUser className="post__badge" sx={{ fontSize: 14 }} />@
              {username}
            </div>
            <div className="post__headerDiscription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishOutlined fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);
export default Post;
