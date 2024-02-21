import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MenuIcon from '@mui/icons-material/Menu';
import {useTheme} from '@mui/material';
export const SidebarContext = React.createContext(0);
export const MenuContext = React.createContext(true);

export const Sidebar = React.forwardRef(({
    children,
    width = '300px',
    collapsewidth="70px",
    backgroundColor = '#fff',
    textColor="#8D939D",
    collapsible=false,
    sidebarlogo="https://adminmart.com/wp-content/uploads/2023/01/logo1.svg",
    miniSidebarlogo="https://i.imgur.com/UxCyPed.jpg"
    },ref)=>
    
    {

      const [menu,setmenu] = React.useState(!collapsible);
      let toggleWidth = !menu ? collapsewidth:width;
      const theme = useTheme();
      
      const onHoverEnter = () => {
         
        if (!collapsible) {
          toggleWidth = '300px';
        }
      };
    
      const onHoverLeave = () => {
           if(!menu){
            toggleWidth = '60px';
        
           }
      };

  return (

    <Box
      sx={{
        width:toggleWidth,
        transformOrigin: '0 0 0',  
        flexShrink: 0,
        backgroundColor:{backgroundColor}
      }}
      px={3}
    
    >

        <Drawer
          anchor="left"
          open 
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          variant="permanent"
          PaperProps={{
            sx: {
              transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.shortest,
              }),
              width:toggleWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <SimpleBar style={{ maxHeight:'calc(100% - 90px)' }}>
            
            {menu?<Box
                component="img"
                sx={{
                  height: 70,
                  width: 174,
                  paddingLeft:'24px',
                  display:'flex',
                  alignItems:'center'
                }}
                src={sidebarlogo}
              />:<Box
              component="img"
              sx={{
                height: 45,
                width: 50,
                paddingLeft:'9px',
                display:'flex',
                alignItems:'center'
              }}
              src={miniSidebarlogo}
            />} 


              <Box px={1}>
              <MenuContext.Provider value={!menu}>
                <SidebarContext.Provider value={textColor}>
                      {children}
                </SidebarContext.Provider>    
              </MenuContext.Provider>  
              </Box>
              
              </SimpleBar>
        </Drawer>

    </Box>
    
  );

    });