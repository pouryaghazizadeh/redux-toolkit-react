import { makeStyles } from "@mui/styles";

export const registerStyles = makeStyles((theme) => {
  return {
    //   style for main tag
    containerPage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    // style for container register
    containerRegister: {
      boxShadow: " 2px 2px 9px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      fontSize: "16px",
      [theme.breakpoints.up("xs")]: {
        width: "100vw",
        height: "450px",
      },
      [theme.breakpoints.up("sm")]: {
        width: "80vw",
        height: "550px",
      },
      [theme.breakpoints.up("md")]: {
        width: "50vw",
        height: "670px",
      },
    },
    // title register form
    title: {
      fontSize: "2em",
      margin: "5px 0px 0px 0px",
    },
    // form style
    form: {
      padding: "0px 10px 0px 10px",
      display: "flex",
      justifyContent: "space-evenly",
      [theme.breakpoints.up("xs")]: {
        height: "300px",
      },
      [theme.breakpoints.up("sm")]: {
        height: "350px",
      },
      [theme.breakpoints.up("md")]: {
        height: "400px",
      },
    },
    // container input
    containerInput: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "space-between",

      [theme.breakpoints.up("xs")]: {
        height: "80%",
      },
      [theme.breakpoints.up("sm")]: {
        height: "50vh",
      },
      [theme.breakpoints.up("md")]: {
        height: "40vh",
      },
    },
  };
});
