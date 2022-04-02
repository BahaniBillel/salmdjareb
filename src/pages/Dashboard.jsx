import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  ListItem,
  Button,
} from "@material-ui/core";
import LanguageIcon from "@mui/icons-material/Language";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width:"100vw",
    
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },

  sidemenu: {
    width: "20%",
    padding: "1rem",
    backgroundColor: "#eee",
    background: "rgb(70,128,131)",
    background:
      "linear-gradient(206deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)",
  },

  InnerSideMenu: {
    // backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "1rem 0",
  },
  detail: {},
}));

const Dashboard = () => {
  const classes = useStyles();
  const params = useParams();
  const pageId = params.id;

 
  return (
    <Box className={classes.dashboard}>
      <Box className={classes.sidemenu}>
        <Container className={classes.InnerSideMenu}>
          <Button
            variant="outlined"
            startIcon={<HomeOutlinedIcon />}
            style={{ paddingRight: "5rem", border: "none", color: "#e05a00" }}
            gutterBottom
          >
            Home
          </Button>
          <Button
            variant="outlined"
            startIcon={<HomeOutlinedIcon />}
            style={{ paddingRight: "5rem", border: "none", color: "#e05a00"  }}
            gutterBottom
          >
            Home
          </Button>
          <Button
            variant="outlined"
            startIcon={<HomeOutlinedIcon />}
            style={{ paddingRight: "5rem", border: "none", color: "#e05a00"  }}
            gutterBottom
          >
            Home
          </Button>
        </Container>
      </Box>
      <Box className={classes.detail}>Content</Box>
    </Box>
  );
};

export default Dashboard;
