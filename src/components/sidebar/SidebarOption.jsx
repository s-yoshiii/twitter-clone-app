import React from "react";
import "./SidebarOption.scss";
export const SidebarOption = ({ text, Icon }) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
