import * as React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Profile } from "./UserProfile";

type SidebarProps = {
  children: React.ReactNode;
  width?: string;
  collapsewidth?: string;
  textColor?: string;
  isCollapse?: boolean;
  themeColor?: string;
  themeSecondaryColor?: string;
  mode?: "light" | "dark";
  direction?: "ltr" | "rtl";
  userName?: string;
  designation?: string;
  showProfile?: boolean;
  userimg?: string;
  onLogout?: () => void;
};

export const SidebarContext = React.createContext({
  width: "270px",
  collapsewidth: "80px",
  textColor: "#8D939D",
  isCollapse: false,
  themeColor: "#5d87ff",
});

let handleLogout = () => {
  alert("Logout Successfully");
};

const Sidebar = ({
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
  userimg = "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
  onLogout = handleLogout,
}: SidebarProps) => {
  const [isSidebarHover, _setIsSidebarHover] = React.useState(false);
  const toggleWidth = isCollapse && !isSidebarHover ? collapsewidth : width;
  // const theme = useTheme();
  const myTheme = createTheme({
    direction: direction,
    palette: {
      mode: mode,
      primary: {
        main: themeColor,
      },
      secondary: {
        main: themeSecondaryColor,
        contrastText: "#fff",
      },
    },
  });

  if (mode === "dark") {
    textColor = "rgba(255,255,255, 0.9)";
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        dir={direction}
        sx={{
          width: toggleWidth,
          flexShrink: 0,
          fontFamily: "inherit",
          color: textColor,
        }}
      >
        <Box sx={{ width: toggleWidth }}>
          <SidebarContext.Provider
            value={{ textColor, isCollapse, width, collapsewidth, themeColor }}
          >
            {children}
          </SidebarContext.Provider>
          {showProfile ? (
            <Profile
              userName={userName}
              designation={designation}
              userimg={userimg}
              isCollapse={isCollapse}
              onLogout={onLogout}
            />
          ) : null}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export { Sidebar };
