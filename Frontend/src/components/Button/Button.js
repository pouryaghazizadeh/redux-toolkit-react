import { Button } from "@mui/material";
function SimpleButton({ Info }) {
  const { name, sx, size, event } = Info;

  return (
    <Button sx={sx} variant="contained" size={size} onClick={event}>
      {name}
    </Button>
  );
}

export default SimpleButton;
