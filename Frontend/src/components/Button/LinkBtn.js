import { Link as RouterLink } from "react-router-dom";
import {Link}from "@mui/material"
function LinkBtn({Info}) {
    const {to,name} = Info
  return <Link
  sx={{textDecoration:"none"}}
  
  component={RouterLink} to={to}>
      {name}
  </Link>;
}

export default LinkBtn;
