import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box,styled,useTheme,Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const Submenu = React.forwardRef(({
    children,
    title="",
    icon,
    subTextColor='#8D939D',
    subBackgroundColor="#eee"
    },ref)=>
    
    {
      const [open, setOpen] = React.useState(false);
      const handleClick = () => {
        setOpen(!open);
      };

 const ListItemStyled = styled(ListItemButton)(() => ({
  whiteSpace: 'nowrap',
  marginBottom: '2px',
  padding: '8px 20px',
  borderRadius: `10px`,
  backgroundColor:open?subBackgroundColor:'#fff',
  color:open?subTextColor:'#fff',
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

          <ListItemIcon style={{minWidth:'30px'}} sx={open?{color:"#fff"}:{color:subTextColor}}>
            {icon?icon:<FiberManualRecordIcon/>}
          </ListItemIcon>
          <ListItemText primary={title} sx={open?{color:"#fff"}:{color:subTextColor}}/>
         
       
         {open ? <ExpandLess  sx={open?{color:'#fff'}:{color:subTextColor}}/> : <ExpandMore sx={open?{color:'#fff'}:{color:subTextColor}}/>}
    
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