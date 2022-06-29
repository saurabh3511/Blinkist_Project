import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Cera Pro",
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
    h3: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#03314B",
    },
    body1: {
      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20.11px",
      color: "#6D787E",
    },
    body2: {
      fontFamily: "Cera Pro",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#6D787E",
    },

    subtitle2: {
      fontFamily: "Cera Pro",
      fontWeight: "400px",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: "#6D787E",
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontWeight: "medium",
      fontSize: "24px",
      lineHeight: "32px",
      color: "#0365F2",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontWeight: "regular",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#6D787E",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          placeItems: "flex-start",

          fontSize: "18px",
          lineHeight: "23px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#2CE080",
    },
  },
});

export default theme;