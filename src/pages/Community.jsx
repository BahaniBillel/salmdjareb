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
import TeamWork from "../images/teamwork.jpg";
import Paper from '@mui/material/Paper';
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
        category="PHOTOGRAPHY"
        headline="Some of Rule for Beginer to improve Shooting "
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
        headline="Find out the teamwork behind this. "
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={CommunityPhoto}
        category="PHOTOGRAPHY"
        headline="Some of Rule for Beginer to improve Shooting "
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={CommunityPhoto}
        category="PHOTOGRAPHY"
        headline="Some of Rule for Beginer to improve Shooting "
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={4}>
  <CommunityComp01
        photo={CommunityPhoto}
        category="PHOTOGRAPHY"
        headline="Some of Rule for Beginer to improve Shooting "
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={6}>
  <CommunityComp01
        photo={CommunityPhoto}
        category="PHOTOGRAPHY"
        headline="Some of Rule for Beginer to improve Shooting "
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
  <Grid item xs={6}>
  <CommunityComp01
        photo={CommunityPhoto}
        category="PHOTOGRAPHY"
        headline="Some of Rule for Beginer to improve Shooting "
        link="/"
        writer="Bahani Billel"
        date=" May 15th, 2022."
        width="auto"
      />
  </Grid>
</Grid>
     
    </Box>
  );
};

export default Community;
