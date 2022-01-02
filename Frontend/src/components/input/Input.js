import { TextField } from "@mui/material";

function Input({ Info }) {
  const { type, size, label, value, sx, event, placeholder } = Info;

  return (
    <TextField
      type={type}
      size={size}
      label={label}
      value={value}
      sx={sx}
      onChange={event}
      placeholder={placeholder}
    />
  );
}

export default Input;
