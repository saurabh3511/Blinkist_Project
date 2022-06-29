import { styled } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../themes/theme";
import { Constants } from "../../../data/Constants";
import { Typography } from "@mui/material";
import { IconAndText } from "../../molecules/IconAndText";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ButtonComponent } from "../../atoms/Button";
import { ReactComponent as Side } from "../../../images/side.svg";
import { AboutBook } from "../AboutBook";
import BeyondEntrepreneur from '../../../images/beyondEntrepreneurship.svg'
import { BookInfo } from "../Card";
import { useEffect, useState } from "react";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";

let MainContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  borderBottom: '1px solid #E1ECFC',
  width: 912,
  height: 720
});

let LeftContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

let KeyIdeasContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

let BookDetailsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  position: "relative",
  marginTop: 40,
});

let IconTextContainer = styled("div")({
  position: "relative",
  left: -8,
  marginTop: 19,
});

let ButtonsContainer = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: 25,
  top: 90,
});

let TabsContainer = styled("div")({
  position: "relative",
  top: 160,
});

let RightContainer = styled("div") ({
  width: 304,
  height: 304,
  position: 'relative',
  top: 75
})

export const BookDescription = () => {
  const [bookInfo, setBookInfo] = useState<BookInfo>({
    id: 1,
    title: "",
    author: "",
    image: "",
    timeToRead: "",
    numberOfReads: "",
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: false
    }
  });

  let getBookInfo = async () => {
    const response = await api.get(`/library/${10}`)
    const data = response.data
    console.log(JSON.stringify(data))
    setBookInfo(data)
  }

  useEffect(() => {
    getBookInfo()
  }, [bookInfo.status.isFinished])

  let navigate = useNavigate()

  let updateFinish = async (num: number) => {
    bookInfo.status.isFinished = true
    console.log(JSON.stringify(bookInfo))

    await api.put(`/library/${num}`, bookInfo)

    navigate('/')
  }

  let handleRead = async () => {
    navigate('/')
  }

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <LeftContainer>
          <KeyIdeasContainer>
            <Typography variant="body2" sx={{ color: "#03314B" }}>
              {Constants.bookDescription.keyIdeas}
            </Typography>
          </KeyIdeasContainer>
          <BookDetailsContainer>
            <Typography variant="h1">
              {Constants.bookDescription.title}
            </Typography>
            <Typography sx={{ color: "#03314B", fontSize: 20 }}>
              {Constants.bookDescription.description}
            </Typography>
            <Typography variant="body1">
              {Constants.bookDescription.author}
            </Typography>
          </BookDetailsContainer>
          <IconTextContainer>
            <IconAndText
              variant="caption"
              iconSource={<Time />}
              title={Constants.bookDescription.timeToRead}
            />
          </IconTextContainer>
          <ButtonsContainer>
            <ButtonComponent
              variant="outlined"
              style={{
                width: 122,
                height: 44,
                borderRadius: 4,
                textTransform: "none",
                border: "1px solid #042330",
              }}
              onClick={() => handleRead()}
            >
              Read now
            </ButtonComponent>
            <ButtonComponent
              variant="contained"
              style={{
                width: 170,
                fontSize: 16,
                height: 44,
                textTransform: "none",
                borderRadius: 4,
              }}
              onClick={() => updateFinish(10)}
            >
              Finished reading
            </ButtonComponent>
            <ButtonComponent
              variant="text"
              style={{
                color: "#6D787E",
                fontSize: 16,
                textTransform: "none",
                width: 151,
                height: 44,
              }}
              endIcon={<Side />}
            >
              Send to Kindle
            </ButtonComponent>
          </ButtonsContainer>
          <TabsContainer>
            <AboutBook />
          </TabsContainer>
        </LeftContainer>
        <RightContainer>
          <img src={BeyondEntrepreneur} alt="img" />
        </RightContainer>
      </MainContainer>
    </ThemeProvider>
  );
};