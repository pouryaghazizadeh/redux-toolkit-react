// style
import { Button } from "@mui/material"
function ButtonRed({ value }) {
  return (
    <div>
      <Button variant="text" disabled>
        {value}
      </Button>
    </div>
  );
}

export default ButtonRed
