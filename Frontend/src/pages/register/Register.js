// style
import { Box, Container, FormControl, Typography } from "@mui/material";
// tools
import { useState } from "react";
import LinkBtn from "../../components/Button/LinkBtn";
// component
import PrimaryButton from "../../components/Button/PrimaryBtn";
import Input from "../../components/input/Input";
function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
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
  const infoLink={
    name:" login", to:"/login"
  }

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { md: "center" },
        height: "100vh",
      }}
    >
      <Box
        component="section"
        sx={{
          width: { xs: "100vw", sm: "80vw", md: "50vw" },
          height: { xs: "95vh", sm: "95vh", md: "80vh" },
          boxShadow: " 2px 2px 9px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
            margin: "5px 0px 0px 0px",
          }}
        >
          register form
        </Typography>
        {/* form container */}
        <FormControl
          fullWidth
          sx={{
            padding: "0px 10px 0px 10px",
            height: { xs: "60vh", sm: "75vh", md: "60vh" },
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {/* inputs container  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: {
                xs: "80%",
                sm: "50vh",
                md: "40vh",
              },
              width: "100%",
              justifyContent: "space-between",
            }}
          >

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
    </Container>
  );
}

export default Register;
