// style
import { Box, FormControl, Typography } from "@mui/material";
// tools
import { useState } from "react";
import LinkBtn from "../../components/Button/LinkBtn";
// component
import PrimaryButton from "../../components/Button/PrimaryBtn";
import Input from "../../components/input/Input";
// style
import { registerStyles } from "./register.style";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  // call style
  const classes = registerStyles();

  // new user
  const newUser = {
    userName,
    email,
    password,
    checkPassword,
  };

  // style and info for props to components
  // user info
  const infoUser = {
    type: "text",
    size: "small",
    label: "User name",
    sx: { margin: "10px 0px 0px 0px" },
    event: (e) => {
      setUserName(e.target.value);
    },
  };
  // email info
  const infoEmail = {
    type: "email",
    size: "small",
    label: "Email",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setEmail(e.target.value);
    },
  };
  // password info
  const infoPassword = {
    type: "password",
    size: "small",
    label: "Password",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setPassword(e.target.value);
    },
  };
  // check password info
  const infoPasswordCheck = {
    type: "password",
    size: "small",
    label: "Password check",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setCheckPassword(e.target.value);
    },
  };
  // info button
  const infoBtn = {
    to: "/",
    name: "register",
    type: "submit",
    sx: { margin: "20px 0px 0px 0px" },
  };
  // info link
  const infoLink = {
    name: " login",
    to: "/login",
  };

  return (
    <Box component="main" className={classes.containerPage}>
      <Box component="section" className={classes.containerRegister}>
        <Typography variant="h5" align="center" className={classes.title}>
          register form
        </Typography>
        {/* form container */}
        <FormControl fullWidth className={classes.form}>
          {/* inputs container  */}
          <Box className={classes.containerInput}>
            <Input Info={infoUser} />
            <Input Info={infoEmail} />
            <Input Info={infoPassword} />
            <Input Info={infoPasswordCheck} />
          </Box>
          <PrimaryButton Info={infoBtn} />
        </FormControl>
        <Typography align="center" sx={{ marginTop: "10px" }}>
          have you an account?
          <LinkBtn Info={infoLink} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
