import React from "react";
import "./SidebarOption.scss";
export const SidebarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
