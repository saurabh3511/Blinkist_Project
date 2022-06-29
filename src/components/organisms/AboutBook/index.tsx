import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles, styled } from "@mui/styles";
import { useState } from "react";
import { Constants } from "../../../data/Constants";
import theme from "../../themes/theme";

let useStyles = makeStyles({
  heading: {
    width: 200,
  },
  textStyling: {
    fontSize: 16,
    textTransform: "none",
    color: "#03314B",
  },
  synopsisTypography: {
    lineHeight: "20.11px !important",
    fontSize: "16px !important",
    color: '#03314B !important',
    position: 'relative',
    marginLeft: '-23px !important'
  },
  selectedTab: {
    color: "#03314B !important",
  },
  headingTypography: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20.11px !important",
    position: 'relative',
    marginLeft: '-15px !important',
    fontFamily: 'Cera Pro',
    textTransform: 'none'
  }
});

let SynopsisStyling = styled("div")({
  width: 600,
  height: 100,
});

export const AboutBook = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event)
    setValue(newValue);
  };

  let styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: 600 }}>
            <TabList
              aria-label="Tabs Example"
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#2CE080",
                },
              }}
            >
              <Tab
                classes={{ selected: styles.selectedTab }}
                label={
                  <span className={styles.headingTypography}>Synopsis</span>
                }
                value="1"
                sx={{
                  width: 200,
                  alignItems: "flex-start",
                }}
              />
              <Tab
                classes={{ selected: styles.selectedTab }}
                label={
                  <span className={styles.headingTypography}>
                    Who is it for?
                  </span>
                }
                value="2"
                sx={{
                  width: 200,
                  alignItems: "flex-start",
                }}
              />
              <Tab
                classes={{ selected: styles.selectedTab }}
                label={
                  <span className={styles.headingTypography}>
                    About the author
                  </span>
                }
                value="3"
                sx={{
                  width: 200,
                  alignItems: "flex-start"
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SynopsisStyling>
              <Typography variant="body2" className={styles.synopsisTypography}>
                {Constants.tabs.synopsis}
              </Typography>
            </SynopsisStyling>
          </TabPanel>
          <TabPanel value="2">
            <SynopsisStyling>
              <Typography variant="body2" className={styles.synopsisTypography}>
                {Constants.tabs.whoIsItFor}
              </Typography>
            </SynopsisStyling>
          </TabPanel>
          <TabPanel value="3">
            <SynopsisStyling>
              <Typography variant="body2" className={styles.synopsisTypography}>
                {Constants.tabs.authorInfo}
              </Typography>
            </SynopsisStyling>
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};