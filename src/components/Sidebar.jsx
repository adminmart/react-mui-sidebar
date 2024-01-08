import * as React from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export const SidebarContext = React.createContext(0);

export const Sidebar = React.forwardRef(({
    children,
    width = '255px',
    backgroundColor = '#fff',
    textColor="#8D939D",
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
                src={logo}
              />
              <Box px={3}>
                <SidebarContext.Provider value={textColor}>
                      {children}
                </SidebarContext.Provider>
                 
              </Box>
              
              </SimpleBar>
        
        
        </Drawer>

    </Box>
    
  );

    });