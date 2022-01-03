import { makeStyles } from "@mui/styles";

export const loginStyles = makeStyles((theme) => {
  return {
    //   style for main tag
    containerLogin: {
      display: "flex",
      justifyContent: "center",
      alignItems: { md: "center" },
      height: "100vh",
      fontSize: "16px",
    },
    // style for container form
    containerForm: {
      boxShadow: " 2px 2px 9px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      margin: "10px",

      [theme.breakpoints.up("xs")]: {
        width: "100vw",
        height: "500px",
      },
      [theme.breakpoints.up("sm")]: {
        width: "80vw",
        height: "550px",
      },
      [theme.breakpoints.up("md")]: {
        width: "50vw",
        height: "700px",
      },
    },
    // style for title form
    titleLogin: {
      fontSize: "2em",
      margin: "15px 0px 5px 0px",
    },
    // style for form tag
    form: {
      height: { xs: "70%", sm: "70%", md: "65%" },
      display: "flex",
      justifyContent: "space-evenly",
      padding: "0px 10px 0px 10px",
      [theme.breakpoints.up("xs")]: {
        height: "70%",
      },
      [theme.breakpoints.up("md")]: {
        height: "65%",
      },
    },
    // container input
    containerInput: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",

      [theme.breakpoints.up("xs")]: {
        height: "50%",
      },
      [theme.breakpoints.up("sm")]: {
        height: "35vh",
      },
      [theme.breakpoints.up("md")]: {
        height: "30vh",
      },
    },
  };
});
