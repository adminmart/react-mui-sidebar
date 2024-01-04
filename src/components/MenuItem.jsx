import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import {
  ListItemIcon,
  List,
  styled,
  ListItemText,
  Chip,
  useTheme,
  Typography,
  ListItemButton,
  Badge,
} from '@mui/material';


export const MenuItem = React.forwardRef(({
    children,
    icon,
    link="#",
    textcolor='#8D939D',
    badge=false,
    badgeColor='primary',
    badgeContent="new",
    disabled=false,
    textFontSize="16px"
    },ref)=>
    
    {

      const ListItemStyled = styled(ListItemButton)(() => ({
        whiteSpace: 'nowrap',
        marginBottom: '2px',
        padding: '8px 20px',
        borderRadius: `10px`,
        backgroundColor:'#fff',
        color:textcolor,
       
      }));
 
 
  return (
    <ListItemStyled
      href={link}
  >

        <ListItemIcon
          sx={{
            minWidth: '30px',
            p: '3px 0',
            color:textcolor
          }}
        >
          {icon?icon:<FiberManualRecordIcon sx={{color:textcolor}}/>}
        </ListItemIcon>

        <ListItemText>
           
            <Typography fontSize={textFontSize} variant="caption">{children}</Typography>
           
        </ListItemText>

        {badge?<Chip label={badgeContent} color={badgeColor} size="small" />:''}

  </ListItemStyled>
  );

    });