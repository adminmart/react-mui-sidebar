import * as React from 'react';
import { useMediaQuery, Box, Drawer, useTheme } from '@mui/material';

export const Sidebar = React.forwardRef(({
    children,
    width = '255px',
    subHeading='',
    backgroundColor = 'background.paper' 
    },ref)=>
    
    {
        
  return (
    // <List
    //   sx={{ width: '100%', maxWidth: width, bgcolor: backgroundColor }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       {subHeading}
    //     </ListSubheader>
    //   }
    // >
    // <div width="350px">
    //     {children}
    // </div>

    // <Drawer
    //   anchor="left"
    //   variant="temporary"
    //   PaperProps={{
    //     sx: {
    //       width:width,
    //       // backgroundColor:
    //       //   customizer.activeMode === 'dark'
    //       //     ? customizer.darkBackground900
    //       //     : customizer.activeSidebarBg,
    //       // color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
    //       border: '0 !important',
    //       boxShadow: (theme) => theme.shadows[8],
    //     },
    //   }}
    // >
      <Box sx={{ px: 3 }} width={width}>

         {children}

      </Box>



      
    // </Drawer>

    
      

    
  );

    });










// export const Sidebar = () => { 
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List 
//       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
//           Nested List Items
//         </ListSubheader>
//       }
//     >
//       <ListItemButton>
//         <ListItemIcon>
//           <SendIcon />
//         </ListItemIcon>
//         <ListItemText primary="Sent mail" />
//       </ListItemButton>
//       <ListItemButton>
//         <ListItemIcon>
//           <DraftsIcon/>
//         </ListItemIcon>
//         <ListItemText primary="Drafts" />
//       </ListItemButton>
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Starred" />
//           </ListItemButton>
//         </List>
//       </Collapse>
//     </List>
//   );
// }