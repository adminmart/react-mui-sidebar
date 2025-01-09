import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { SidebarContext } from "./Sidebar";
import CircleOutlined from "@mui/icons-material/CircleOutlined";

type SubmenuProps = {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  borderRadius?: string;
  textFontSize?: string;
  disabled?: boolean;
};

const Submenu = React.forwardRef<HTMLDivElement, SubmenuProps>(
  (
    {
      children,
      title = "",
      icon,
      borderRadius = "8px",
      textFontSize = "14px",
      disabled = false,
    },
    ref
  ) => {
    const customizer = React.useContext(SidebarContext);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const ListItemStyled = styled(ListItemButton)(() => ({
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "10px 12px",
      borderRadius: borderRadius,
      color: open ? "#fff" : customizer.textColor,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? "0.6" : "1",
      backgroundColor: !open ? "" : customizer.themeColor,
      ".MuiListItemIcon-root": {
        color: open ? "#fff" : customizer.textColor,
      },
      "&:hover": {
        backgroundColor: open ? customizer.themeColor : customizer.themeColor + 20,
        color: open ? "#fff" : customizer.themeColor,
        ".MuiListItemIcon-root": {
          color: open ? "#fff" : customizer.themeColor,
        },
      },
    }));

    const ListIConStyled = styled(ListItemIcon)(() => ({
      display: "flex",
      gap: "10px",
      marginBottom: "0px",
      padding: "0px",
      minWidth: "30px",
      cursor: "pointer",
      color: "inherit",
    }));

    return (
      <Box ref={ref}>
        <ListItemStyled onClick={handleClick} sx={{ display: "flex", gap: "15px" }}>
          <ListIConStyled style={{ minWidth: "0px" }}>
            {icon ? icon : <CircleOutlined />}
          </ListIConStyled>
          {!customizer.isCollapse && (
            <>
              <ListItemText sx={{ my: 0 }}>
                <Typography fontSize={textFontSize} sx={{ lineHeight: "1" }} variant="caption">
                  {title}
                </Typography>
              </ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemStyled>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      </Box>
    );
  }
);

export {Submenu};