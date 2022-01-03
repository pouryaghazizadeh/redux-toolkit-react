import { TextField } from "@mui/material";

const Input = ({ Info }) => {
  const { type, size, label, value, sx, event, placeholder } = Info;

  return (
    <TextField
      defaultValue={value ? value : ""}
      type={type}
      size={size}
      label={label}
      sx={sx}
      onChange={event}
      placeholder={placeholder}
    />
  );
};

export default Input;
