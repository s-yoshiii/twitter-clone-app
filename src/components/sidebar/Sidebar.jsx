import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import { SidebarOption } from "./SidebarOption";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/*ツイッターアイコン*/}
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption text="ホーム" Icon={HomeIcon} />
      <SidebarOption text="話題を検索" Icon={HomeIcon} />
      <SidebarOption text="通知" Icon={HomeIcon} />
      <SidebarOption text="メッセージ" Icon={HomeIcon} />
      <SidebarOption text="ブックマーク" Icon={HomeIcon} />
      <SidebarOption text="リスト" Icon={HomeIcon} />
      <SidebarOption text="プロフィール" Icon={HomeIcon} />
      <SidebarOption text="もっと見る" Icon={HomeIcon} />
      {/*ツイッターボタン*/}
    </div>
  );
};

export default Sidebar;
