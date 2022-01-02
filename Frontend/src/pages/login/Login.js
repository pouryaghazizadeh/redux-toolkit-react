// style
import { Box, Container, FormControl, Typography } from "@mui/material";
// tools
import { useState } from "react";
import LinkBtn from "../../components/Button/LinkBtn";
// component
import PrimaryButton from "../../components/Button/PrimaryBtn";
import Input from "../../components/input/Input";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dataUser = {
    email,
    password,
  };

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
          height: { xs: "85vh", sm: "80vh", md: "75vh" },
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
            fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
            margin: "15px 0px 5px 0px",
          }}
        >
          Welcome back!
        </Typography>
        {/* form container */}
        <FormControl
          fullWidth
          sx={{
            height: { xs: "70%", sm: "70%", md: "65%" },
            display: "flex",
            justifyContent: "space-evenly",
            padding: "0px 10px 0px 10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: {
                xs: "50%",
                sm: "35vh",
                md: "30vh",
              },
              justifyContent: "space-evenly",
            }}
          >
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
    </Container>
  );
}

export default Login;