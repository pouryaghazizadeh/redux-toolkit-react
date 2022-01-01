import { TextField } from "@mui/material";

function Input({ Info }) {
  const { type, size, label, value, sx, event } = Info;

  return (
    <TextField
      type={type}
      size={size}
      label={label}
      value={value}
      sx={sx}
      onChange={event}
    />
  );
}

export default Input;
