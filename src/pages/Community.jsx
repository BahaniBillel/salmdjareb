import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import CommunityComp01 from "../components/CommunityComp01";
import CommunityPhoto from "../images/community.jpg";
import CaseStudies from "../images/caseStudies.jpg";
import TeamWork from "../images/teamwork.jpg";
import Marketing01 from "../images/marketing01.jpg";
import Ecommerce from "../images/ecommerce.jpg";
import DataCollect from "../images/dataCollect.jpg";
import ConsumerBehaviour from "../images/consumerBehaviour.jpg";

import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  community: {
    // height:"100vh",
    marginTop: "6rem",
    marginBottom: "10rem",
    padding: "1rem",
  },
}));

const Community = () => {
  const classes = useStyles();

  return (
    <Box className={classes.community}>
      <Grid container spacing={2}>
  <Grid item xs={8}>
  <CommunityComp01
        photo={CommunityPhoto}
        category="OPINION"
        headline="When the Community Empowers the Consumers and Businesses"
        paragraph={
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliasperspiciatis ullam aperiam rem? Iusto ullam nam, odit consequatur adipisci, repellat illum numquam sequi ab corrupti magni dolore delectus dignissimos impedit....  "
        }
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={TeamWork}
        category="MANAGEMENT"
        headline="Find out about our teamwork. "
        link="/"
        writer="Omar Belaili"
        date=" June 1th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={CaseStudies}
        category="CASE STUDIES"
        headline="How NextDay uses Online Reviews to Help Grow its Business"
        link="/"
        writer="Rima Hasnabey"
        date=" January 25th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={Marketing01}
        category="MARKETING"
        headline="7 Brands Making Better Use of Their Consumers Feedback"
        link="/"
        writer="Farid Fayez"
        date=" December 14th, 2021."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={Ecommerce}
        category="Marketing"
        headline="5 Benefits Ecommerce Managers Didn’t Know They Could Get From Reviews"
        link="/"
        writer="Noor Allam"
        date=" Mars 1th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={6}>
  <CommunityComp01
        photo={DataCollect}
        category="MANAGE $ COLLECT"
        headline="The Best Performing Review Invitations Over Email "
        link="/"
        writer="Bahani Billel"
        date=" May 07th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={6}>
  <CommunityComp01
        photo={ConsumerBehaviour}
        category="CONSUMER BEHAVIOUR"
        headline="Changes in Consumer Buying Behaviour "
        link="/"
        writer="Kamal Drid"
        date=" April 19th, 2021."
        width="auto"
      />
  </Grid>
</Grid>
     
    </Box>
  );
};

export default Community;
