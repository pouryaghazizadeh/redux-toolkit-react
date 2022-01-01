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
  const InfoUser = {
    type: "text",
    size: "small",
    label: "userName",
    sx: { margin: "15px 0px 0px 0px" },
    event:(e) => {setUserName(e.target.value)}
  };

  const InfoEmail = {
    type: "email",
    size: "small",
    label: "email",
    sx: { margin: "15px 0px 0px 0px" },
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
          height: { xs: "95vh", sm: "80vh", md: "75vh" },
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
          sx={{ fontSize: { xs: "1rem", sm: "1.7rem", md: "2rem" } }}
        >
          Welcome back!
        </Typography>
        <FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 10px 0px 10px",
              height: {
                xs: "80%",
                sm: "40vh",
              },
              // background: "green",
              justifyContent: "space-between",
            }}
          >
            <Input Info={InfoUser} />
            <Input Info={InfoEmail} />
            <Input Info={InfoPassword} />
            <Input Info={InfoPasswordCheck} />
          </Box>
          {/* <PrimaryButton /> */}
        </FormControl>
      </Box>
    </Container>
  );
}

export default Register;



//  <main>
//       <form>
//         <input
//           type="text"
//           placeholder="userName"
//           onChange={(e) => {
//             setUserName(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="passwordCheck"
//           onChange={(e) => {
//             setCheckPassword(e.target.value);
//           }}
//         />
//         <button>register</button>
//       </form>
//     </main>