import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { MenuItem } from "./components/MenuItem";
import { Submenu } from "./components/Submenu";
import AccessAlarms from "@mui/icons-material/AccessAlarms";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import { Link, BrowserRouter } from "react-router-dom";

function App() {
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
}

export default App;
