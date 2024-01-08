import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


import {styled}  from '@mui/material/styles';
import Box from '@mui/material/Box';
import { SidebarContext } from './Sidebar';




import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Submenu = React.forwardRef(({
    children,
    title="",
    icon,
    subTextColor="",
    subBackgroundColor="#eee"
    },ref)=>
    
    {
      const [open, setOpen] = React.useState(false);
      const handleClick = () => {
        setOpen(!open);
      };

      const textColorcontext = React.useContext(SidebarContext);
      const maintextColor = !subTextColor?textColorcontext:subTextColor;

 const ListItemStyled = styled(ListItemButton)(() => ({
  whiteSpace: 'nowrap',
  marginBottom: '2px',
  padding: '8px 20px',
  borderRadius: `10px`,
  backgroundColor:open?subBackgroundColor:'#fff',
  color:open?maintextColor:'#fff',
   '&:hover': {
    backgroundColor: '#eee',
    color: '#fff',
  }
}));


  return (
  <Box>
      <ListItemStyled 
        onClick={handleClick} 
      >

          <ListItemIcon style={{minWidth:'30px'}} sx={open?{color:"#fff"}:{color:maintextColor}}>
            {icon?icon:<FiberManualRecordIcon/>}
          </ListItemIcon>
          <ListItemText primary={title} sx={open?{color:"#fff"}:{color:maintextColor}}/>
          {open ? <ExpandLess  sx={open?{color:'#fff'}:{color:maintextColor}}/> : <ExpandMore sx={open?{color:'#fff'}:{color:maintextColor}}/>}
    
    </ListItemStyled>

    <Collapse in={open} timeout="auto" unmountOnExit>   
      <List component="div" disablePadding>
          <Box sx={{ pl: 2 }}>
            {children}
          </Box>
      </List>
    </Collapse>
</Box>
  );

    });