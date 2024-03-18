import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { SidebarContext } from './Sidebar';

export const Menu = React.forwardRef(({
  children,
  subHeading = 'menu'
}, ref) => {

  const customizer = React.useContext(SidebarContext);

  return (
    <Box sx={{ px: customizer.isCollapse ? 2 : 3, pt: 2 }}>
      <List
        ref={ref}
        component="nav"
        subheader={
          <ListSubheader component="div" sx={{ paddingY: '3px', color: customizer.textColor, paddingX: "18px", lineHeight: '20px', fontWeight: 'bold', fontSize: "12px" }} >
            {!customizer.isCollapse ? subHeading : '...'}
          </ListSubheader>
        }
      >
        {children}
      </List>
    </Box>
  );

});