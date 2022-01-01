import { Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
function PrimaryButton({value,to,type}) {
    return (
      <Button component={RouterLink} variant="contained" type={type} to={to}>
        {value}
      </Button>
    );
}

export default PrimaryButton
