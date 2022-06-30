import React from "react";
import { Button } from "@mui/material";
import {  makeStyles } from "@mui/styles";
import { useAuth0 } from "@auth0/auth0-react";


let useStyles = makeStyles({
  logout:{
    
    position: "absolute",
    left:1318,
    top:-6,
    zIndex:9
    
  }
})
  

const LogoutButton = () => {
  const { logout,isAuthenticated} = useAuth0();
  const styles=useStyles()

  return (
    <React.Fragment>
    {isAuthenticated && 
    <Button onClick={() => logout()} variant="contained" color="warning" className={styles.logout}>
      Log Out
    </Button>
    }
    </React.Fragment>
  )
};

export default LogoutButton;