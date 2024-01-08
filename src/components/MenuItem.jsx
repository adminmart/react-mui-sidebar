import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
 

import ListItemIcon from '@mui/material/ListItemIcon';
import {styled}  from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { SidebarContext } from './Sidebar';




export const MenuItem = React.forwardRef(({
    children,
    icon,
    link="#",
    textcolor="",
    badge=false,
    badgeColor='primary',
    badgeContent="new",
    textFontSize="16px"
    },ref)=>
    
    {

      const textColorcontext = React.useContext(SidebarContext);
      const maintextColor = !textcolor?textColorcontext:textcolor;

      const ListItemStyled = styled(ListItemButton)(() => ({
        whiteSpace: 'nowrap',
        marginBottom: '2px',
        padding: '8px 20px',
        borderRadius: `10px`,
        backgroundColor:'#fff',
        color:maintextColor,
       
      }));
 
 
  return (
    <ListItemStyled
      href={link}
  >

        <ListItemIcon
          sx={{
            minWidth: '30px',
            p: '3px 0',
            color:maintextColor
          }}

        >
          {icon?icon:<FiberManualRecordIcon sx={{color:maintextColor}}/>}
        </ListItemIcon>

        <ListItemText>
           
            <Typography fontSize={textFontSize} variant="caption">{children}</Typography>
           
        </ListItemText>

        {badge?<Chip label={badgeContent} color={badgeColor} size="small" />:''}

  </ListItemStyled>
  );

    });