
## React MUI Sidebar

React MUI Sidebar helps to create side Navigation.


## Authors

- [@adminmart](https://github.com/adminmart)


## Installation

To install react mui sidebar npm package

```bash
  npm i react-mui-sidebar
```


## Issues

For any Issues, create new issue on https://github.com/adminmart/react-mui-sidebar/issues


## Usage/Examples

```javascript
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
               <MenuItem link="/" badge="true" icon={<SendIcon/>}>Modern</MenuItem>
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
  
```


## API Reference

#### Sidebar Api Reference

```http
  <Sidebar></Sidebar>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `width`           |   `string`    |   `255px`              |   set the width of sidebar         |
| `textColor`           |   `string`    |   `#8D939D`              |   set this color to all MenuItem and SubMenu of sidebar         |
| `backgroundColor` |   `string`    |   `#fff`               |     set the background color of sidebar      |
| `logo`            |   `string`    |   `adminmart svg cdn`  |   pass the logo cdnn link        |



#### Menu Api Reference

```http
  <Menu></Menu>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `backgroundColor` |   `string`    |   `background.paper`   |   background color of menu          |
| `subHeading`      |   `string`    |   `menu`               |   menu heading title      |


#### Submenu Api Reference

```http
  <Submenu></Submenu>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `title`           |   `string`    |   `blank`              |   title of the submenu         |
| `icon`            |   `component` |   `mui icon - <FiberManualRecordIcon/>`  |     set icon of submenu      |
| `subTextColor`    |   `string` |   `#8D939D`  |     set text color of submenu text      |
| `subBackgroundColor`|   `string` |   `#eee`  |    set background color of the submenu      |


#### MenuItem Api Reference

```http
  <MenuItem></MenuItem>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `icon`            |   `component` |   `mui icon - <FiberManualRecordIcon/>`  |     set icon of menu item      |
| `link`      |   `string`    |   `#`               |     pass link for component to redirect      |
| `textcolor`      |   `string`    |   `#8D939D`               |     set the text color on menu item      |
| `badge`      |   `boolean`    |   `false`               |     set the badge on menu items      |
| `badgeColor`      |   `string`    |   `primary`               |     set badge color      |
| `badgeContent`      |   `string`    |   `new`               |     set content on badge      |
| `textFontSize`      |   `string`    |   `16px`               |     set font size of menu      |


## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

