## React MUI Sidebar

React MUI Sidebar helps to create side Navigation.

# Live Demo

[Demo](https://react-mui-sidebar.vercel.app)

## Authors

- [@adminmart](https://adminmart.com)

## Screenshots

![App Screenshot](https://adminmart.com/wp-content/uploads/2024/03/mui-sidebar-demo-image.jpg)

#

## Installation

To install react mui sidebar npm package

```bash
  npm i react-mui-sidebar
```

## Issues

For any Issues, create new issue on https://github.com/adminmart/react-mui-sidebar/issues

## Usage/Examples

```javascript
import React from "react";

import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar width={"270px"}>
        <Logo
          component={Link}
          href="/"
          img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
        >
          AdminMart
        </Logo>
        <Menu subHeading="HOME">
          <MenuItem
            icon={<CottageOutlinedIcon />}
            component={Link}
            link="/tes"
            badge={true}
            isSelected={true}
          >
            {" "}
            {/* Set badge to boolean true */}
            Modern
          </MenuItem>
          <MenuItem icon={<AccessAlarms />} component={Link} link="/test">
            eCommerce
          </MenuItem>
          <MenuItem component={Link} link="/ana">
            Analytical
          </MenuItem>
        </Menu>
        <Menu subHeading="APPS">
          <MenuItem>Chat</MenuItem>
          <MenuItem>Calendar</MenuItem>
        </Menu>
        <Menu subHeading="OTHERS">
          <Submenu title="Menu Level">
            <MenuItem>Post</MenuItem>
            <MenuItem>Details</MenuItem>
            <Submenu title="Level 2">
              <MenuItem>new</MenuItem>
              <MenuItem>Hello</MenuItem>
            </Submenu>
          </Submenu>

          <MenuItem>Chip</MenuItem>
          <MenuItem target="_blank" component={Link} link="https://google.com">
            External Link
          </MenuItem>
        </Menu>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
```

## API Reference

#### Sidebar Api Reference

```http
  <Sidebar></Sidebar>
```

| Props                 | Type       | Default          | Description                                           |
| :-------------------- | :--------- | :--------------- | ----------------------------------------------------- |
| `width`               | `string`   | `260px`          | set the width of sidebar                              |
| `textColor`           | `string`   | `#2b2b2b`        | set this color to all MenuItem and SubMenu of sidebar |
| `isCollapse`          | `boolean`  | `false`          | set the Sidebar to mini sidebar                       |
| `themeColor`          | `string`   | `#5d87ff`        | set the theme primary color                           |
| `themeSecondaryColor` | `string`   | `#49beff`        | set the theme secondary color                         |
| `mode`                | `string`   | `light`          | set the mode of the Sidebar light or Dark             |
| `direction`           | `string`   | `ltr`            | set the direction of Sidebar ltr or rtl               |
| `userName`            | `string`   | `Mathew`         | set the user name of User Profile                     |
| `designation`         | `string`   | `Designer`       | set the user designation of User Profile              |
| `showProfile`         | `boolean`  | `true`           | show the user profile true or false                   |
| `userimg`             | `string`   | `user image url` | set the image of user in User Profile                 |
| `onLogout`            | `function` | `handleLogout`   | set the logout function for user logout               |

#### Menu Api Reference

```http
  <Menu></Menu>
```

| Props        | Type     | Default | Description        |
| :----------- | :------- | :------ | ------------------ |
| `subHeading` | `string` | `menu`  | menu heading title |

#### Submenu Api Reference

```http
  <Submenu></Submenu>
```

| Props          | Type        | Default                               | Description                       |
| :------------- | :---------- | :------------------------------------ | --------------------------------- |
| `title`        | `string`    | `blank`                               | title of the submenu              |
| `icon`         | `component` | `mui icon - <FiberManualRecordIcon/>` | set icon of submenu               |
| `borderRadius` | `string`    | `8px`                                 | set border radius of Submenu      |
| `textFontSize` | `string`    | `14px`                                | set text Font Size of the submenu |
| `disabled`     | `boolean`   | `false`                               | enable/disable the Submenu        |

#### MenuItem Api Reference

```http
  <MenuItem></MenuItem>
```

| Props          | Type        | Default                               | Description                                         |
| :------------- | :---------- | :------------------------------------ | --------------------------------------------------- |
| `icon`         | `component` | `mui icon - <FiberManualRecordIcon/>` | set icon of menu item                               |
| `link`         | `string`    | `#`                                   | pass link for component to redirect                 |
| `component `   | `component` | `Link `                               | set react router link or nextjs Link to apply route |
| `badge`        | `boolean`   | `false`                               | set the badge on menu items                         |
| `badgeColor`   | `string`    | `primary`                             | set badge color                                     |
| `badgeContent` | `string`    | `6`                                   | set content on badge                                |
| `textFontSize` | `string`    | `14px`                                | set font size of menu item                          |
| `borderRadius` | `string`    | `8px`                                 | set border radius of menu item                      |
| `disabled`     | `boolean`   | `false`                               | enable/disable the menu item                        |
| `badgeType`    | `string`    | `filled`                              | set badgeType of menu item filled or outlined       |
| `target`       | `string`    | ``                                    | set target of menu item \_blank                     |
| `isSelected`   | `boolean`   | `false`                               | set selected menu item                              |

#### Logo Api Reference

```http
  <Logo></Logo>
```

| Props        | Type        | Default    | Description                                         |
| :----------- | :---------- | :--------- | --------------------------------------------------- |
| `img`        | `string`    | `Logo url` | set the logo of the sidebar                         |
| `href`       | `string`    | `set url`  | set any url you wanted to redirect                  |
| `component ` | `component` | `Link `    | set react router link or nextjs Link to apply route |

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.
