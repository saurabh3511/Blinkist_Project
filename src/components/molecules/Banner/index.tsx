import React from "react";
import { Container, styled, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import banner from "../../../images/banner.svg";
import theme from "../../themes/theme";
import BannerData from "./../../../data/BannerData";

export interface BannerProps {

  className?: string;
  style?: React.CSSProperties;
  children?:React.ReactNode;
}
const MainBannerContainer = styled("div")({
  width: "890px",
  height: "264",
  backgroundColor: "#F1F6F4",
  display:'flex',
    gap: "112px",
    margin: "0 auto",
});

const LeftBannerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "15px",
  top: "8px",
  left: "45px",
  bottom: "45px",

});
const LeftTopContainer = styled("div")({
  width: "319px",
  height: "90px",
  Top:"45px",
  left:"45px"
  
});
const LeftBottomContainer = styled("div")({
  width: "461px",
  height: "69px",   
  Top:"150px",
  left:"45px"
});

const RightConatiner = styled('div')({});

export const Banner = (props:BannerProps) => {
  return (
    <ThemeProvider theme={theme}>
            <Container className={props.className}>
                <MainBannerContainer>
                    <LeftBannerContainer>
                        <LeftTopContainer>
                            <Typography variant="h1">{BannerData.heading}</Typography>
                        </LeftTopContainer>
                      <br />
                        <LeftBottomContainer>
                            <Typography variant="subtitle2">{BannerData.description}</Typography>
                        </LeftBottomContainer>
                    </LeftBannerContainer>
                    <RightConatiner>
                            <img src={banner} alt="readingLady"/>
                        </RightConatiner>
                </MainBannerContainer>
            </Container>
        </ThemeProvider>
  );
};