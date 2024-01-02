import React from 'react';
import { Sidebar } from '../components/Sidebar';
import {MenuItem} from '../components/MenuItem';
import { Menu } from '../components/Menu';
import { Submenu } from '../components/Submenu';
import SendIcon from '@mui/icons-material/Send';
import MediationIcon from '@mui/icons-material/Mediation';

export default {
  title: 'Sidebar',
  component: Sidebar,
}


export const Primary = ({ ...props }) => {
 
  return (

        <Sidebar {...props} width={'300px'}>
            
           <Menu subHeading={'HOME'} >
               <MenuItem icon={<SendIcon/>}>Modern</MenuItem>
               <MenuItem icon={<MediationIcon/>}>eCommerce</MenuItem>
           </Menu>
           <Menu subHeading="APPS">
           <MenuItem>Contact</MenuItem>
             <Submenu title="Blog">
                 <MenuItem>Post</MenuItem>
                 <MenuItem>Details</MenuItem>
                    <Submenu title="Blog Inner">
                       <MenuItem>new</MenuItem>
                       <MenuItem>Hello</MenuItem>
                    </Submenu>
             </Submenu>
           </Menu>
        </Sidebar>
  )

}
  