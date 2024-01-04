import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
 
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import { Badge, Box, Link } from '@mui/material';
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
      const theme = useTheme();
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
            color:textcolor,
            
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