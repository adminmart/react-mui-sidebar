
## React MUI Sidebar

React MUI Sidebar helps to create side Navigation.


## Authors

- [@adminmart](https://github.com/adminmart)


## Screenshots

![App Screenshot](https://adminmart.com/wp-content/uploads/2024/03/mui-sidebar-demo-image.jpg)

## Installation

To install react mui sidebar npm package

```bash
  npm i react-mui-sidebar
```


## Issues

For any Issues, create new issue on https://github.com/adminmart/react-mui-sidebar/issues


## Usage/Examples

```javascript
import React from 'react'

import {Sidebar,Menu,MenuItem,Submenu,Logo} from 'react-mui-sidebar'


const App = () => {
  return (
        <Sidebar width={'270px'}>
           <Logo>Wrappixels</Logo>
          <Menu subHeading="NEEDS">
               <MenuItem link="/sdsa">Modern</MenuItem>
               <MenuItem>eCommerce</MenuItem>
           </Menu>
           <Menu subHeading="HOME">
               <MenuItem  link="/sdsa" badge="true">Modern</MenuItem>
               <MenuItem >eCommerce</MenuItem>
           </Menu>
           <Menu subHeading="APPS">
           <MenuItem >Contact</MenuItem>
             <Submenu subBackgroundColor="#434E5F" sub title="Blog">
                 <MenuItem >Post</MenuItem>
                 <MenuItem >Details</MenuItem>
                    <Submenu subBackgroundColor="#434E5F" sub title="Blog Inner">
                       <MenuItem >new</MenuItem>
                       <MenuItem >Hello</MenuItem>
                    </Submenu>
             </Submenu>
             <MenuItem >Chats</MenuItem>
           </Menu>
        </Sidebar>
  )
}

export default App
  
```


## API Reference

#### Sidebar Api Reference

```http
  <Sidebar></Sidebar>
```


| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `width`    |   `string`    |   `260px` |   set the width of sidebar         |
| `textColor` |   `string`   |   `#2b2b2b`  |   set this color to all MenuItem and SubMenu of sidebar         |
| `isCollapse`    |   `boolean`  |   `false`  |   set the Sidebar to mini sidebar      |
| `themeColor`   |   `string`    |   `#5d87ff`  |   set the theme primary color      |
| `themeSecondaryColor`  |   `string`    |   `#49beff` |   set the theme secondary color     |
| `mode`   |   `string`    |   `light`  |   set the mode of the Sidebar light or Dark    |
| `direction`     |   `string`    |   `ltr`  |   set the direction of Sidebar ltr or rtl    |
| `userName`   |   `string`    |   `Mathew`  |   set the user name of User Profile       |
| `designation`   |   `string`    |   `Designer`  |   set the user designation of User Profile       |
| `showProfile`   |   `boolean`    |   `true`  |   show the user profile true or false      |
| `userimg` |   `string`    |   `user image url` |   set the image of user in User Profile      |




#### Menu Api Reference

```http
  <Menu></Menu>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `subHeading`      |   `string`    |   `menu`               |   menu heading title      |


#### Submenu Api Reference

```http
  <Submenu></Submenu>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `title`           |   `string`    |   `blank`              |   title of the submenu         |
| `icon`            |   `component` |   `mui icon - <FiberManualRecordIcon/>`  |     set icon of submenu      |
| `borderRadius`    |   `string` |   `8px`  |     set border radius of Submenu      |
| `textFontSize`|   `string` |   `14px`  |    set text Font Size of the submenu      |
| `disabled`|   `boolean` |   `false`  |    enable/disable the Submenu      |


#### MenuItem Api Reference

```http
  <MenuItem></MenuItem>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `icon`            |   `component` |   `mui icon - <FiberManualRecordIcon/>`  |     set icon of menu item      |
| `link`      |   `string`    |   `#`               |     pass link for component to redirect      |
| `badge`      |   `boolean`    |   `false`               |     set the badge on menu items      |
| `badgeColor`      |   `string`    |   `primary`               |     set badge color      |
| `badgeContent`      |   `string`    |   `6`               |     set content on badge      |
| `textFontSize`      |   `string`    |   `14px`               |     set font size of menu item      |
| `borderRadius`      |   `string`    |   `8px`               |     set border radius of menu item    |
| `disabled`      |   `boolean`    |   `false`               |     enable/disable the menu item   |
| `badgeType`      |   `string`    |   `filled`               |     set badgeType of menu item filled or outlined   |
| `target`      |   `string`    |   ``               |     set target of menu item _blank   |


#### Logo Api Reference

```http
  <Logo></Logo>
```

| Props             | Type          | Default                | Description  |
| :--------         | :--------     | :------------------    |  -           |
| `img`      |   `string`    |   `Logo url`               |    set the logo of the sidebar    |


## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

