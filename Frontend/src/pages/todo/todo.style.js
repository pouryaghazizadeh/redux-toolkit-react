import { makeStyles } from "@mui/styles";

export const todoStyles = makeStyles((theme) => {
  return {
    containerPage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // container input todo
    containerInput: {
      //   width: "500px",
      height: "150px",
      marginTop: "10px",

      //   background: "blue",

      [theme.breakpoints.up("xs")]: {
        width: "370px",

        // paddingLeft:"4px"
      },
      [theme.breakpoints.up("sm")]: {
        width: "500px",
      },
      [theme.breakpoints.up("md")]: {
        width: "550px",
      },
    },
    // container todo card
    containerCard: {
      width: "80%",
      height: "auto",
      background: "khaki",
      display: "flex",
      justifyContent: "space-evenly",
  
      gap:"10",
      flexWrap: "wrap",
    },
    
  };
});

//   [theme.breakpoints.up("xs")]: {

//   },
//   [theme.breakpoints.up("sm")]: {

//   },
//   [theme.breakpoints.up("md")]: {

//   },
