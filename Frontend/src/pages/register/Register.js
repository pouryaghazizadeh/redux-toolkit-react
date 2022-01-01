// style
import { Box, Container, FormControl, Link, Typography } from "@mui/material";
// tools
import { useState } from "react";
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
  const InfoUser ={
    type: "text",
    size: "small",
    label: "userName",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setUserName(e.target.value);
    },
  };

  const InfoEmail = {
    type: "email" ,
    size: "small" ,
    label: "email",
    sx: { margin:"15px 0px 0px 0px"},
    event: (e) => {
      setEmail(e.target.value);
    },
  };

  const InfoPassword = {
    type: "password",
    size: "small",
    label: "Password",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setPassword(e.target.value);
    },
  };
  const InfoPasswordCheck = {
    type: "password",
    size: "small",
    label: "passwordCheck",
    sx: { margin: "15px 0px 0px 0px" },
    event: (e) => {
      setCheckPassword(e.target.value);
    },
  };
  // info button
  const InfoBtn = {
    to: "/",
    name: "register",
    type: "submit",
    sx:{margin:"25px 0px 0px 0px"}
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { md: "center" },
        height: "100vh",
        // marginTop: "80px ",
      }}
    >
      <Box
        component="section"
        sx={{
          width: { xs: "100vw", sm: "80vw", md: "50vw" },
          height: { xs: "95vh", sm: "85vh", md: "80vh" },
          boxShadow: " 2px 2px 9px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          // background: "green",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
        margin:"10px 0px 0px 0px"
        }}
        >
          register form
        </Typography>
        <FormControl fullWidth sx={{ padding: "0px 10px 0px 10px" ,
        height: "60vh",
      
      }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: {
                xs: "80%",
                sm: "50vh",
                md:"40vh"
              },
              width: "100%",
              // background: "green",
              justifyContent: "space-between",
            }}
          >
            <Input Info={InfoUser} />
            <Input Info={InfoEmail} />
            <Input Info={InfoPassword} />
            <Input Info={InfoPasswordCheck} />
          </Box>
          <PrimaryButton Info={InfoBtn} />
        </FormControl>
        <Typography align="center" sx={{ marginTop: "10px" }}>
          have you an account?
          <Link href="#">  log in</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Register;

