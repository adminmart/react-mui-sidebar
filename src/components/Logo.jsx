import * as React from "react";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SidebarContext } from "./Sidebar";

export const Logo = React.forwardRef(({
  children,
  img = "https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
}, ref) => {
  const customizer = React.useContext(SidebarContext);
  const LogoStyled = styled(Link)(() => ({

    whiteSpace: "nowrap",
    overflow: customizer.isCollapse ? 'hidden' : 'visible',
    WebkitLineClamp: '1',
    fontSize: '2rem',
    padding: '15px 22px',
    textOverflow: 'ellipsis',
  }));

  return (
    <LogoStyled href="/">
      {
        (img == "" ? (
          <Typography variant="body" >
            {children}
          </Typography>
        ) : (
          <Box
            component="img"
            sx={{

              display: "flex",
              alignItems: "center",
            }}
            src={img}
          />
        ))
      }
    </LogoStyled>
  );
});
