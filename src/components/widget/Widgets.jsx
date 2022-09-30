import { Search } from "@mui/icons-material";
import React from "react";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="キーワードを入力してください" id="" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>今どうしている？</h2>
      </div>
    </div>
  );
};
