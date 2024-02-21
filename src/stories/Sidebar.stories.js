import React from 'react';
import { Sidebar } from '../components/Sidebar';
import {MenuItem} from '../components/MenuItem';
import { Menu } from '../components/Menu';
import { Submenu } from '../components/Submenu';
import SendIcon from '@mui/icons-material/Send';
import MediationIcon from '@mui/icons-material/Mediation';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CameraIcon from '@mui/icons-material/Camera';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MemoryIcon from '@mui/icons-material/Memory';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
export default {
  title: 'Sidebar',
  component: Sidebar,
}


export const Primary = ({ ...props }) => {
 
  return (

        <Sidebar {...props} width={'300px'}>
            
           <Menu subHeading="HOME">
               <MenuItem link="/sdsa" badge="true" icon={<CameraIcon/>}>Modern</MenuItem>
               <MenuItem icon={<ShoppingCartCheckoutIcon/>}>eCommerce</MenuItem>
               <MenuItem icon={<AttachMoneyIcon/>}>NFT</MenuItem>
               <MenuItem icon={<MemoryIcon/>}>Crypto</MenuItem>
               <MenuItem icon={<ShowChartIcon/>}>Activity</MenuItem>
               <MenuItem icon={<QueueMusicIcon/>}>Music</MenuItem>
           </Menu>
           <Menu subHeading="APPS">
           <MenuItem icon={<CalendarMonthIcon/>}>Calendar</MenuItem>
           <MenuItem icon={<AlignVerticalTopIcon/>}>Kanban</MenuItem>
           <MenuItem icon={<CommentOutlinedIcon/>}>Chat</MenuItem>
           <MenuItem icon={<EmailOutlinedIcon/>}>Email</MenuItem>
           <MenuItem icon={<DescriptionOutlinedIcon/>}>Notes</MenuItem>
           <MenuItem icon={<LocalPhoneOutlinedIcon/>}>Contact Table</MenuItem>
           <MenuItem icon={<ListAltOutlinedIcon/>}>Contact List</MenuItem>
           <MenuItem icon={<ArticleOutlinedIcon/>}>Invoice</MenuItem>
           <MenuItem icon={<AccountCircleOutlinedIcon/>}>User Profile</MenuItem>
           {/* <MenuItem icon={<PieChartOutlineOutlinedIcon/>}>Blog</MenuItem> */}
             <Submenu icon={<PieChartOutlineOutlinedIcon/>} subBackgroundColor="#434E5F" subTextColor="#8D939D" title="Blog">
             <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>Posts</MenuItem>
             <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>Details</MenuItem>
                    <Submenu icon={<PieChartOutlineOutlinedIcon/>} subBackgroundColor="#434E5F" subTextColor="#8D939D" title="Blog Inner">
                       <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>new</MenuItem>
                       <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>Hello</MenuItem>
                    </Submenu>
             </Submenu>
             <Submenu icon={<ShoppingBasketOutlinedIcon/>} subBackgroundColor="#434E5F" subTextColor="#8D939D" title="Ecommerce">
             <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>Shop</MenuItem>
             <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>Details</MenuItem>
             <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>List</MenuItem>
             <MenuItem icon={<FiberManualRecordOutlinedIcon/>}>Checkout</MenuItem>
             </Submenu>
           </Menu>
           <Menu subHeading="PAGES">
               <MenuItem icon={<AttachMoneyIcon/>}>Pricing</MenuItem>
               <MenuItem icon={<HelpOutlineOutlinedIcon/>}>FAQ</MenuItem>
               <MenuItem icon={<AccountCircleOutlinedIcon/>}>Account Setting</MenuItem>
               <MenuItem disabled={true} icon={<WebAssetOutlinedIcon/>}>Landing Page</MenuItem>
           </Menu>

           
        </Sidebar>
  )

}
  