// style
import { Box, Container, FormControl, Link, Typography } from "@mui/material";
// tools
import { useState } from "react";
// component
import PrimaryButton from "../../components/Button/PrimaryBtn";
import Input from "../../components/input/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // info group email
  const InfoEmail = {
    type: "email",
    size: "small",
    label: "Email",
    sx: { marginTop: "15px" },
    value: email,
    event: (e) => {
      setEmail(e.target.value);
    },
  };
  const InfoPassword = {
    type: "password",
    size: "small",
    label: "Password",
    sx: { margin: "15px 0px 15px 0px" },
    // value: { password },
    event: (e) => {
      setPassword(e.target.value);
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
        <FormControl
          fullWidth
          sx={{
            // background: "blue",
            height: { xs: "55%", sm: "70%",md:"65%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 10px 0px 10px",
              height: {
                xs: "80%",
                sm:"40vh",
              },
              // background: "green",
              justifyContent: "space-between",
            }}
          >
            <Input Info={InfoEmail} />
            <Input Info={InfoPassword} />
            <PrimaryButton value="Submit" to="/" type="submit" />
          </Box>
        </FormControl>
        <Typography align="center" sx={{ marginTop: "10px" }}>
          need an account?
          <Link href="#">sign up</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;

// <main>
//       <form>
//         <input
//           type="text"
//           placeholder="email"
//           id="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           id="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button>login</button>
//       </form>
//     </main>
