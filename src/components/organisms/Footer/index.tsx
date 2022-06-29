import React from 'react'
import { makeStyles, styled } from "@mui/styles";
import Icons from '../../atoms/Icon';
import BlinkistLogo from "../../..//images/blinkistlogo.svg";
import { Typography } from "@mui/material";
import { FooterNav } from "../../molecules/FooterNav";
import { FooterNavData as desc } from "../../../data/FooterNavData";
import { Constants } from "../../../data/Constants";

let MainContainer = styled("div")({
  width: "100%",
  height: 360,
  backgroundColor: "#F1F6F4",
  position:'relative',
   bottom:'0px'

});

let WrapContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  position: 'relative',
  left: 220
});
let LeftContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 244,
  width: 378,
  height: "128px !important",
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

let RightContainer = styled("div")({
  position: "relative",
  top: 38,
  left: 310,
  display: 'flex'

});

let useStyle = makeStyles({
  blinkistLogo: {
    width: 99.1,
    height: 24
  },
  subtitle1: {
    fontFamily: "Cera Pro",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 32,
  }
})
let BottomContainer = styled("div")({
  position: "relative",
  left: -780,
  top: 310,
  fontSize: 14,
  fontWeight: 400,
  fontFamily: "Cera Pro",
  color: "#6D787E",
});

const Footer = () => {   
  let styles = useStyle();
  return (
    <MainContainer>
      <WrapContainer>
        <LeftContainer>
          <Icons source={BlinkistLogo} className={styles.blinkistLogo} />
          <Typography
          variant='subtitle2'
          sx={{
            color: "#0365F2",
            fontFamily: "Cera Pro",
            fontWeight: 500,
            fontSize: 24,
          }}
          >
              {Constants.footer.description1}<br></br>
           {Constants.footer.description2}
          </Typography>
        </LeftContainer>
        <RightContainer>
         <FooterNav title={desc.Editorial.title} data={desc.Editorial.data} />
         <FooterNav title={desc.Company.title} data={desc.Company.data}/>
         <FooterNav title={desc.UsefulLinks.title} data={desc.UsefulLinks.data}/>
        </RightContainer>
        <BottomContainer>{Constants.footer.footerCopyright}</BottomContainer>
      </WrapContainer>
    </MainContainer>

  )
}

export default Footer
