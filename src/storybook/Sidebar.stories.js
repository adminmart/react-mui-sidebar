import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { MenuItem } from "../components/MenuItem";
import { Submenu } from '../components/Submenu';
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import CircleOutlined from "@mui/icons-material/CircleOutlined";

export default {
  title: "Sidebar",
  component: Sidebar,
};

export const Primary = ({ ...props }) => {
  return (
    <>
      <Sidebar
        {...props}
        width={"300px"}
        collapsewidth="80px"
        isCollapse={false}
        themeColor="#5d87ff"
        textColor="#2b2b2b"
      >
        <Logo>Wrappixels</Logo>
        <Menu subHeading="DASHBOARDS">
          <MenuItem link="/" badge="true" icon={<InboxIcon fontSize="24" />}>
            Modern
          </MenuItem>
          <MenuItem icon={<DraftsIcon fontSize="24" />}>Analytical</MenuItem>
          <MenuItem icon={<SendIcon fontSize="24" />}>eCommerce</MenuItem>
        </Menu>
        <Menu subHeading="APPLICATIONS">
            <Submenu icon={<SendIcon  fontSize="24"/>} subBackgroundColor="#434E5F" subTextColor="#5A6A85" title="Users">
              <MenuItem icon={<CircleOutlined fontSize="7"/>}>Dean</MenuItem>
              <MenuItem icon={<CircleOutlined fontSize="7"/>}>Marrie</MenuItem>
              <MenuItem icon={<CircleOutlined fontSize="7"/>}>John</MenuItem>
              <MenuItem icon={<CircleOutlined fontSize="7"/>}>Salma</MenuItem>
             </Submenu>
        </Menu>
      </Sidebar>
    </>
  );
};
