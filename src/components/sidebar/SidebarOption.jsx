import React from "react";

export const SidebarOption = ({ text, Icon }) => {
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
