import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Typography } from "@mui/material";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import Usereimg from "../assets/images/user-1.jpg";
import { useTheme } from "@mui/material";
import { IconPower } from "@tabler/icons-react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import img1 from '../assets/images/user-1.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Profile } from "./UserProfile";

export const SidebarContext = React.createContext({
  width: "300px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: false,
  themeColor: "#5d87ff"

});



export const Sidebar = React.forwardRef(
  (
    {
      children,
      width = "260px",
      collapsewidth = "80px",
      textColor = "#2b2b2b",
      isCollapse = false,
      themeColor = "#5d87ff",
      themeSecondaryColor = "#49beff",
      mode = "light",
      direction = "ltr",
      userName = "Mathew",
      designation = "Designer",
      userimg = img1

    },
    ref
  ) => {
    const [isSidebarHover, setIsSidebarHover] = React.useState(false);
    const toggleWidth = isCollapse && !isSidebarHover ? collapsewidth : width;
    const theme = useTheme();
    const myTheme = createTheme({
      palette: {
        mode: mode,
        primary: {
          main: themeColor,
        },
        secondary: {
          main: themeSecondaryColor,
          contrastText: '#fff'
        }
      },
    });




    if (mode === "dark") {
      textColor = "rgba(255,255,255, 0.9)"
    }
    return (
      <ThemeProvider theme={myTheme}>
        <Box dir={direction}
          sx={{
            width: toggleWidth,
            flexShrink: 0,
            fontFamily: 'inherit',
            color: textColor
          }}

        >
          <Drawer
            anchor="left"
            open

            variant="permanent"
            PaperProps={{
              sx: {
                transition: theme.transitions.create("width", {
                  duration: theme.transitions.duration.shortest,
                }),
                width: toggleWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <SimpleBar style={{ height: "calc(100% - 50px)" }}>
              <SidebarContext.Provider value={{ textColor, isCollapse, width, collapsewidth, themeColor }}>
                {children}
              </SidebarContext.Provider>
            </SimpleBar>
            <Profile userName={userName} designation={designation} userimg={userimg} isCollapse={isCollapse} />
          </Drawer>
        </Box>
      </ThemeProvider>
    );
  }
);
