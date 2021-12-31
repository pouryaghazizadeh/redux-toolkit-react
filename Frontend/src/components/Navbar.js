// tools
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Menu, MenuItem, Typography } from "@mui/material";
// style
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
// import IconButton from "@material-ui/core/IconButton";
import ButtonRed from "./NavButton";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const links = [
    {
      title: "Service",
      to: "/service",
    },
    {
      title: "AboutUs",
      to: "/AboutUs",
    },
    {
      title: "login",
      to: "/login",
    },
  ];

  return (
    <AppBar color="default">
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
            noWrap
            sx={{
              mr: 2,

              fontSize: "2.2rem",
              flexGrow: { xs: 1 ,md:0},
            }}
          >
            APSignals
          </Typography>
          {/* menu for desktop screen */}
          <Box flexGrow={1} sx={{display:{xs:"none",md:"flex"}}}>
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

// <div>
//         <Link to="/" >
//           Home
//         </Link>
//         <Link to="/todo" >
//           Todo
//         </Link>
//         <Link to="/login">
//           Login
//         </Link>
//         <Link to="/register">Register</Link>
//       </div>
