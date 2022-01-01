// style
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
// tools
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
// components
import ButtonRed from "../Button/NavBtn";



function Navbar() {
  // state for handel menu
  const [anchorElNav, setAnchorElNav] = useState(null);
  // function for open menu in mobile screen
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // function for close menu in mobile screen
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
//define name and routes for item menu
  const links = [
    {
      title: "Todo",
      to: "/todo",
    },
    {
      title: "AboutUs",
      to: "/About",
    },
    {
      title: "login",
      to: "/login",
    },
  ];

  return (
    <AppBar color="default"  position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* box menu  for screen mobile */}
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
              {links.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <ButtonRed to={page.to} value={page.title} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* title website */}

          <Typography
            variant="h1"
            component={RouterLink}
            to="/"
            noWrap
            sx={{
              mr: 2,
              textDecoration: "none",
              color: "black",
              fontSize: "2.2rem",
              fontWeight: "large",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            APSignals
          </Typography>
          {/* menu for desktop screen */}
          <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {links.map((page, i) => (
              <ButtonRed key={i} to={page.to} value={page.title} />
            ))}
          </Box>
          {/* avatar */}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
