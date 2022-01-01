import { Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
function PrimaryButton({Info}) {
  const { name, to, type, sx } = Info;
    return (
      <Button
        sx={sx}
        component={RouterLink}
        variant="contained"
        type={type}
        to={to}
      >
        {name}
      </Button>
    );
}

export default PrimaryButton
