import { Typography } from "@mui/material";
import { styled, makeStyles, ThemeProvider } from "@mui/styles";
import React, { useState } from "react";
import BlinkistLogo from "../../../images/blinkistlogo.svg";
import  Icons  from "../../atoms/Icon";
import SearchIcon from "../../../images/search.svg";
import { Dropdown } from "../../molecules/Dropdown";
import { ExtendedNav } from "../ExtendedNav";
import theme from '../../themes/theme'
import {useNavigate} from 'react-router-dom'



const MainContainer = styled("div")({
  width: "100%",
  height: 86,
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  gap: 40,
  position: 'relative',
  left: 250,
  fontFamily: 'Cera Pro !important'
});

const useStyles = makeStyles({
  blinkistLogo: {
    width: 124.09,
    height: 26,
    alignSelf: "center",
    position: "absolute",
    left: 250,
    top: 30,
  },
  container: {
    marginLeft: 0,
  },
  explore: {
    alignSelf: "center",
    position: "absolute",
    left: 479,
    top: 33,
  },
  myLibrary: {
    alignSelf: "center",
    color: "#03314B",
    left: 594,
    position: "absolute",
    top: 33,
    fontSize: 16,
    fontFamily: 'Cera Pro !important'
  },
  account: {
    marginLeft: "auto",
    width: 40,
    height: 40,
    position: "absolute",
    alignSelf: "center",
    left: 1128,
    top: 23,
  },
  search: {
    width: 20.31,
    height: 20.31,
    alignSelf: "center",
    position: "absolute",
    left: 417,
    top: 33,
  },
  logout1:{
    zIndex:10,
    position:"absolute",
  },
});

export const HeaderComponent = () => {
  let [explore, setExplore] = useState(false);
  let [account, setAccount] =useState(false);
  let [exploreStyle, setExploreStyle] = useState({
    transform: "rotate(0deg)",
  });

  const expandAccountDropdown = () => {
    account ? setAccount(false) : setAccount(true);
  };

  const expandExploreDropdown = () => {
    explore ? setExplore(false) : setExplore(true);
    if (explore) {
      setExploreStyle({ transform: "rotate(0deg)" });
    } else {
      setExploreStyle({ transform: "rotate(180deg)" });
    }
  };

  let styles = useStyles();

  let navigate = useNavigate()

  let homePage = () => {
    navigate("/")
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Icons source={BlinkistLogo} className={styles.blinkistLogo} />
          <Icons source={SearchIcon} className={styles.search} />
          <Dropdown
            title={"Explore"}
            className={styles.explore}
            onClick={expandExploreDropdown}
            style={{cursor:'pointer'}}
            
          />
          <Typography variant="body1" className={styles.myLibrary}  onClick={homePage} style={{cursor:'pointer'}}>
            My Library
          </Typography>
          <Dropdown title={"Account"} 
          className={styles.account}
          style={{cursor:'pointer'}}
          onClick={expandAccountDropdown}
          ></Dropdown>
        </MainContainer>
        {explore ? <ExtendedNav /> : null}
        {/* <div  className={styles.logout1} >{account ? <LogoutButton  /> : null} </div> */}
      </ThemeProvider>
    </>
  );
};