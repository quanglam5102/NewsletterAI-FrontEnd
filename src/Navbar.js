import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import AvatarImage from "./images/avatar.jpeg";
import { useAuth } from './AuthProvider';

function Navbar() {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = isAuthenticated
? [
    { label: "Home", path: "home" },
    { label: "Content", path: "content" },
    { label: "Discussion", path: "discussion" },
    { label: "Daily Goals", path: "goals" },
    { label: "Learning Path", path: "path" },
    { label: "About", path: "about" },
    { label: "Logout", path: "logout" }
  ]
: [
    { label: "Home", path: "home" },
    { label: "Newsletter", path: "newsletter" },
    { label: "About", path: "about" },
    // { label: "Register", path: "register" },
    // { label: "Login", path: "login" }
  ];

  const settings = [
    // { label: "Profile", path: "/profile" },
    // { label: "Logout", path: "/logout" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    if (e === "logout") {
      logout();
      navigate("/login");
    } else if (typeof e === "object") {
      return;
    } else {
      let path = e === "home" ? "/" : "/" + e;
      navigate(path);
    }
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    if (e === "/profile") {
      navigate(e);
    } else if (e === "/logout") {
      logout();
      navigate("/login");
    } else {
      return;
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1100, // Ensure it stays above other content
        padding: "0 25px", // Adjust the padding as needed
      }}
    >
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          AI NEWS
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.label}
                onClick={() => handleCloseNavMenu(page.path)}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.label}
              onClick={() => handleCloseNavMenu(page.path)}
              to={page.path}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
        {/* onClick={handleOpenUserMenu} for the below button */}
        <Box sx={{ flexGrow: 0 }}>
          {/* <Tooltip title="Open settings"> */}
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={AvatarImage} />
            </IconButton>
          {/* </Tooltip> */}
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.label}
                onClick={() => handleCloseUserMenu(setting.path)}
              >
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
