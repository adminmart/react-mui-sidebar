import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled, useTheme } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { SidebarContext } from "./Sidebar";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import Links from "./Links";

type MenuItemProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  component?: React.ElementType;
  badge?: boolean;
  link?: string;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  badgeContent?: string;
  badgeTextColor?: string;
  textFontSize?: string;
  borderRadius?: string;
  disabled?: boolean;
  badgeType?: "filled" | "outlined";
  target?: string;
  isSelected?: boolean;
};

const MenuItem = ({
  children,
  icon,
  component,
  badge = false,
  link = "/",
  badgeColor = "secondary",
  badgeContent = "6",
  badgeTextColor = "#fff",
  textFontSize = "14px",
  borderRadius = "8px",
  disabled = false,
  badgeType = "filled",
  target = "",
  isSelected = false,
}: MenuItemProps) => {
  const customizer = React.useContext(SidebarContext);
  const theme = useTheme();
  const ListItemStyled: any = styled(ListItemButton)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: "10px 12px",
    width: "100%",
    textAlign: theme.direction === "ltr" ? "left" : "right",
    borderRadius: borderRadius,
    color: customizer.textColor,
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? "0.6" : "1",
    ".MuiListItemIcon-root": {
      color: customizer.textColor,
    },
    "&:hover": {
      backgroundColor: disabled ? "#fff" : customizer.themeColor + 20,
      color: customizer.themeColor,
      ".MuiListItemIcon-root": {
        color: customizer.themeColor,
      },
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: customizer.themeColor,
      "&:hover": {
        backgroundColor: customizer.themeColor,
        color: "white",
      },
      ".MuiListItemIcon-root": {
        color: "#fff",
      },
    },
  }));

  const ListIConStyled = styled(ListItemIcon)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "0px",
    padding: "0px",
    cursor: "pointer",

    color: "inherit",
  }));

  return (
    <Box>
      <Links component={component} href={link} to={link}>
        <ListItemStyled
          sx={{ display: "flex", gap: "15px" }}
          target={target}
          selected={isSelected ? true : false}
        >
          <ListIConStyled
            sx={{
              minWidth: "0px",
            }}
          >
            {icon ? icon : <CircleOutlined />}
          </ListIConStyled>
          {!customizer.isCollapse ? (
            <>
              <ListItemText sx={{ my: 0 }}>
                <Typography
                  fontSize={textFontSize}
                  sx={{ lineHeight: "1" }}
                  variant="caption"
                >
                  {children}
                </Typography>
              </ListItemText>

              {badge && (
                <Chip
                  label={badgeContent}
                  color={badgeColor}
                  variant={badgeType}
                  size="small"
                  sx={{ color: badgeTextColor }}
                />
              )}
            </>
          ) : null}
        </ListItemStyled>
      </Links>
    </Box>
  );
};

export { MenuItem };
