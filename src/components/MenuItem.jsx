import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ListItemIcon from '@mui/material/ListItemIcon';
import {styled}  from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import { SidebarContext } from './Sidebar';
import { MenuContext } from './Sidebar';

export const MenuItem = React.forwardRef(({
    children,
    icon,
    link="#",
    textcolor="",
    badge=false,
    badgeColor='primary',
    badgeContent="new",
    textFontSize="16px",
    disabled=false
    },ref)=>
    
    {

      const textColorcontext = React.useContext(SidebarContext);
      const minisidebar = React.useContext(MenuContext);

      const maintextColor = !textcolor?textColorcontext:textcolor;

      const ListItemStyled = styled(ListItemButton)(() => ({
        whiteSpace: 'nowrap',
        marginBottom: '2px',
        padding: '8px 20px',
        borderRadius: `10px`,
        backgroundColor:'#fff',
        color:maintextColor, 
        cursor:disabled?"default":"pointer",
        opacity:disabled?"0.6":"1"
      }));


      const ListIConStyled = styled(ListItemIcon)(() => ({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'10px',
        marginBottom: '10px',
        padding: '5px 5px',
        minWidth:'30px',
        cursor:'pointer',
        marginLeft:'-10px',
        borderRadius: `10px`,
        color:open?maintextColor:'#fff',
         '&:hover': {
          backgroundColor: '#eee',
          color: '#fff',
        }
      }));
 
 
  return (
    <Box>
    {!minisidebar?
    <ListItemStyled
      href={link}
    >
        <ListItemIcon
          sx={{
            minWidth: '30px',
            p: '0px 0',
            color:maintextColor
          }}

        >
          {icon?icon:<FiberManualRecordIcon sx={{color:maintextColor}}/>}
        </ListItemIcon>

        <ListItemText sx={{my:0}}>
           
            <Typography fontSize={textFontSize} variant="caption">{children}</Typography>
           
        </ListItemText>

        {badge?<Chip label={badgeContent} color={badgeColor} size="small" />:''}

  </ListItemStyled>:
   <ListIConStyled
  >
     {icon?icon:<FiberManualRecordIcon sx={{color:maintextColor}}/>}
  </ListIConStyled>
}

</Box>


  );

    });