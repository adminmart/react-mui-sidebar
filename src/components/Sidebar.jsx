import * as React from 'react';
import { Box, Drawer, useTheme } from '@mui/material';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export const Sidebar = React.forwardRef(({
    children,
    width = '255px',
    backgroundColor = '#fff',
    logo="https://adminmart.com/wp-content/uploads/2023/01/logo1.svg"
    },ref)=>
    
    {

        
  return (



    <Box
      sx={{
        width: width,
        flexShrink: 0,
        backgroundColor:{backgroundColor}
      }}
      px={3}
    
    >

        <Drawer
          anchor="left"
          open 
          variant="permanent"
          PaperProps={{
            sx: {
              
              width: width,
              boxSizing: 'border-box',
            },
          }}
        >


             <SimpleBar style={{ maxHeight:'calc(100% - 90px)' }}>
             <Box
                component="img"
               
                sx={{
                  height: 70,
                  width: 174,
                  paddingLeft:'24px',
                  display:'flex',
                  alignItems:'center'
                }}
                alt="The house from the offer."
                src={logo}
              />
              <Box px={3}>
                 {children}
              </Box>
              
              </SimpleBar>
        
        
        </Drawer>

    </Box>


















    
      // <Box 
      
      // width={width}
      // border={4}
      // borderLeft={0}
      // borderRight={2}
      // borderTop={0}
      // borderBottom={0}
      // borderColor="#eee"
      // height={'100%'}
      // >
      //    <SimpleBar style={{ maxHeight:'calc(100% - 190px)' }}>{children}</SimpleBar>
      // </Box>
    
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