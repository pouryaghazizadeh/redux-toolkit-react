// style
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function NavButton({ to, value }) {
  return (
    <>
      <Button
        color="error"
        sx={{ textDecoration: "none", margin: "10px", fontSize: "1rem" }}
        component={RouterLink}
        to={to}
      >
        {value}
      </Button>
    </>
  );
}

export default NavButton;
