import * as React from 'react';
import { makeStyles, ThemeProvider } from "@mui/styles";
import { Box } from "@mui/material";
import theme from '../../themes/theme';
import  Search  from "./../../../images/search.svg";


const useStyles = makeStyles({
  inputBar:{
      fontSize: "24px",
  border: "none",
  width: 260,
  height: 24,
  fontFamily: 'Cera Pro',
  fontStyle : 'Bold',
  // color: #6D787E,
  marginLeft: "32px",
  "&:focus": {
    outline: "none",
  },
},
boxElement: {
  width: 598,
  height: 40,
  backgroundColor: "",
  borderBottom: "1.5px solid #BAC9CF",
  display: "flex",
  
  flexDirection: "row",
},
imageDiv: {
  marginLeft: "2.96px",
  marginTop: "2.96px",
},
imageProps: {
  width: "23.7px",
  height: "23.7px",
},

});
export default function Sizes({setTitle}:{setTitle:any}) {
  const classes = useStyles();
  const searchText = (event:any)=>{
    setTitle(event)
  }

  return (
    <ThemeProvider theme={theme}>
        <Box className={classes.boxElement}>
          <div className={classes.imageDiv}>
            <img src={Search} alt="img" className={classes.imageProps} />
          </div>
      <input
      type="text"
      placeholder="Search by title or author"
      className={classes.inputBar}
      onChange={(e:any)=>searchText(e.target.value)}
      />
    </Box>
   </ThemeProvider>
  );
}