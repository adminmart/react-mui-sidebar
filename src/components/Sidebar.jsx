import * as React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Profile } from "./UserProfile";

export const SidebarContext = React.createContext({
  width: "270px",
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
      showProfile = true,
      userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg"
    },
    ref
  ) => {
    const [isSidebarHover, setIsSidebarHover] = React.useState(false);
    const toggleWidth = isCollapse && !isSidebarHover ? collapsewidth : width;
    const theme = useTheme();
    const myTheme = createTheme({
      direction: direction,
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
            color: textColor,

          }}

        >
          <Box

            sx={{
              width: toggleWidth,
            }}
          >
            
              <SidebarContext.Provider value={{ textColor, isCollapse, width, collapsewidth, themeColor }}>
                {children}
              </SidebarContext.Provider>
             
            {showProfile ? <Profile userName={userName} designation={designation} userimg={userimg} isCollapse={isCollapse} /> : ""}
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
);
