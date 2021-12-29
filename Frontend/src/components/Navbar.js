// tools
import { Link as RouterLink } from "react-router-dom";
// style
import AppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
// import IconButton from "@material-ui/core/IconButton";
import ButtonRed from "./ButtonRed";
function Navbar() {
  return (
    <AppBar sx={{ height: "80px" }} color="default">
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* this is menu icon */}
        <IconButton
          sx={{ display: { md: "none" }, fontSize: "50px" }}
          color="error"
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <Link
          component={RouterLink}
          to="/"
          sx={{
            fontSize: "2.5rem",
            textDecoration: "none",
            color: "red",
            display: "flex",
            justifyContent: { md: "center" },
          }}
        >
          APSignals
        </Link>
        <Box sx={{width:"40vw",display:"flex"}}>
          <ButtonRed value="About us" />
          <ButtonRed value="Service " />
          <ButtonRed value="register" />
        </Box>
        <Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </Box>
      </Toolbar>
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
