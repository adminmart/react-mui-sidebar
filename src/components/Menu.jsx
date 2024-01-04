import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';

export const Menu = React.forwardRef(({
    children,
    backgroundColor = 'background.paper',
    subHeading='menu'
    },ref)=>
    
    {
 
  return (

          <List
            ref={ref}
            sx={{ width: '100%', maxWidth: '100%',paddingY:'10px',bgcolor: backgroundColor }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" sx={{paddingLeft:'2px',lineHeight:'26px',fontWeight:'bold'}} id="nested-list-subheader">
                {subHeading}
              </ListSubheader>
            }
          >
            {children}
          </List>
  );

    });