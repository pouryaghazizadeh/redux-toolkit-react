import { Container, FormControl, TextField } from "@mui/material";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormControl size="100px" sx={{ border: "1px solid black",width:{xs:"100vw",md:"50vw"},height:{xs:"50vh"} }}>
        <TextField
          type="text"
          size="small"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField type="password" size="small" label="Password" />
      </FormControl>
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
