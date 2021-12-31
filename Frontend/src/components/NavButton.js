// style
import { Button} from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
function NavButton({ to,value}) {
  return (
    <>
      <Button
       
        sx={{ textDecoration: "none", margin: "10px", fontSize: "1.2rem", color:"#f44336" }}
        component={RouterLink}
        to={to}
      >
        {value}
      </Button>
    </>
  );
}

export default NavButton;
