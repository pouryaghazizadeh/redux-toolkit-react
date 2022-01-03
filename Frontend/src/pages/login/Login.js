// style
import { Box, FormControl, Typography } from "@mui/material";
// tools
import { useState } from "react";
import LinkBtn from "../../components/Button/LinkBtn";
// component
import PrimaryButton from "../../components/Button/PrimaryBtn";
import Input from "../../components/input/Input";
import { loginStyles } from "./login.style";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// call style
  const classes = loginStyles();

  const dataUser = {
    email,
    password,
  };

  // this props to input
  // info group email
  const infoEmail = {
    type: "email",
    size: "small",
    label: "Email",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setEmail(e.target.value);
    },
  };
  // info group password
  const infoPassword = {
    type: "password",
    size: "small",
    label: "Password",
    sx: { margin: "20px 0px 0px 0px" },

    event: (e) => {
      setPassword(e.target.value);
    },
  };
  // info button
  const infoBtn = {
    to: "/",
    name: "submit",
    type: "submit",
    sx: { margin: "10px 0px 0px 0px" },
  };
  // info link
  const infoLink = {
    name: "sign up",
    to: "/register",
  };
  return (
    <Box component="main" className={classes.containerLogin}>
      <Box component="section" className={classes.containerForm}>
        <Typography variant="h5" align="center" className={classes.titleLogin}>
          Welcome back!
        </Typography>
        {/* form container */}
        <FormControl fullWidth className={classes.form}>
          <Box className={classes.containerInput}>
            {/* inputs */}
            <Input Info={infoEmail} />
            <Input Info={infoPassword} />
          </Box>
          <PrimaryButton Info={infoBtn} />
        </FormControl>

        <Typography align="center" sx={{ marginTop: "10px" }}>
          need an account?
          <LinkBtn Info={infoLink} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
