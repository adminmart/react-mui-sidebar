import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const MenuItem = React.forwardRef(({
    children,
    icon,
    },ref)=>
    
    {

      const [open, setOpen] = React.useState(false);

      const handleClick = () => {
        setOpen(!open);
      };

  return (

    <ListItemButton onClick={handleClick}>
       <ListItemIcon>
       {icon?icon:<FiberManualRecordIcon/>}
       </ListItemIcon>
       <ListItemText primary={children} />
    </ListItemButton>

  );

    });