import React from 'react';
import { Sidebar } from '../components/Sidebar';
import {MenuItem} from '../components/MenuItem';
import { Menu } from '../components/Menu';
import { Submenu } from '../components/Submenu';
import SendIcon from '@mui/icons-material/Send';
import MediationIcon from '@mui/icons-material/Mediation';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export default {
  title: 'Sidebar',
  component: Sidebar,
}


export const Primary = ({ ...props }) => {
 
  return (

        <Sidebar {...props} width={'300px'}>
            
           <Menu subHeading="HOME">
               <MenuItem link="/sdsa" badge="true" icon={<SendIcon/>}>Modern</MenuItem>
               <MenuItem icon={<MediationIcon/>}>eCommerce</MenuItem>
           </Menu>
           <Menu subHeading="APPS">
           <MenuItem textcolor="red" icon={<CallOutlinedIcon/>}>Contact</MenuItem>
             <Submenu subBackgroundColor="#434E5F" subTextColor="#434E5F" title="Blog">
                 <MenuItem>Post</MenuItem>
                 <MenuItem>Details</MenuItem>
                    <Submenu subBackgroundColor="#434E5F" subTextColor="#434E5F" title="Blog Inner">
                       <MenuItem>new</MenuItem>
                       <MenuItem>Hello</MenuItem>
                    </Submenu>
             </Submenu>
             <MenuItem>Chats</MenuItem>
           </Menu>

           
        </Sidebar>
  )

}
  