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
               <MenuItem textcolor="#434E5F" link="/sdsa" badge="true" icon={<SendIcon/>}>Modern</MenuItem>
               <MenuItem textcolor="#434E5F" icon={<MediationIcon/>}>eCommerce</MenuItem>
           </Menu>
           <Menu subHeading="APPS">
           <MenuItem icon={<CallOutlinedIcon/>} textcolor="#434E5F">Contact</MenuItem>
             <Submenu subBackgroundColor="#434E5F" subTextColor="#434E5F" title="Blog">
                 <MenuItem textcolor="#434E5F">Post</MenuItem>
                 <MenuItem textcolor="#434E5F">Details</MenuItem>
                    <Submenu subBackgroundColor="#434E5F" subTextColor="#434E5F" title="Blog Inner">
                       <MenuItem textcolor="#434E5F">new</MenuItem>
                       <MenuItem textcolor="#434E5F">Hello</MenuItem>
                    </Submenu>
             </Submenu>
             <MenuItem textcolor="#434E5F">Chats</MenuItem>
           </Menu>

           
        </Sidebar>
  )

}
  