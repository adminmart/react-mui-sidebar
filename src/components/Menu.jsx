import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

import { MenuContext } from './Sidebar';  

export const Menu = React.forwardRef(({
    children,
    backgroundColor = 'background.paper',
    subHeading='menu'
    },ref)=>
    
    {

      const minisidebar = React.useContext(MenuContext);
 
  return (

          <List
            ref={ref}
            sx={{ width: '100%', maxWidth: '100%',paddingY:'10px',bgcolor: backgroundColor }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" sx={{paddingY:'3px',paddingX:"0px",lineHeight:'26px',fontWeight:'bold',fontSize:"12px",color:"#5A6A85"}} id="nested-list-subheader">
                {!minisidebar?subHeading:'...'}
              </ListSubheader>
            }
          >
            {children}
          </List>
  );

    });