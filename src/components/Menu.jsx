import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DraftsIcon from '@mui/icons-material/Drafts';


export const Menu = React.forwardRef(({
    children,
    backgroundColor = 'background.paper',
    subHeading='sads'
    },ref)=>
    
    {
 
  return (

          <List
            ref={ref}
            sx={{ width: '100%', maxWidth: '100%', bgcolor: backgroundColor }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {subHeading}
              </ListSubheader>
            }
          >
            {children}
             {/* <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary={children} />
             </ListItemButton> */}
            
          </List>


      // <ListItemButton ref={ref}>
      //   <ListItemIcon>
      //        <DraftsIcon/>
      //   </ListItemIcon>
      //   <ListItemText primary={children} />
      // </ListItemButton>
    //   <ListItemButton>
    //     <ListItemIcon>
    //       <DraftsIcon/>
    //     </ListItemIcon>
    //     <ListItemText primary="Drafts" />
    //   </ListItemButton>
    //   <ListItemButton onClick={handleClick}>
    //     <ListItemIcon>
    //       <InboxIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Inbox" />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>
    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <StarBorder />
    //         </ListItemIcon>
    //         <ListItemText primary="Starred" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>
  );

    });