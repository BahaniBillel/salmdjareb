import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
} from "@material-ui/core";
import LanguageIcon from "@mui/icons-material/Language";
import CssBaseline from "@mui/material/CssBaseline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Divider from "@mui/material/Divider";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { grey,teal } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
   
    upperheader:{
        display:"flex",
        flexDirection:"row",
        borderBottom:"1px solid #ccc"
    },
    icons:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        "& svg":{
            marginLeft:"1rem",
            color:"#616161"
        }
        
    

    }
}));


const DashBoardDetailHeader = ({title}) => {
  const classes = useStyles();

  return (
    <Box className={classes.dashDetailHeader}>
      <CssBaseline />
      <Container className={classes.upperheader}>
          <Typography variant="h6" component="div" style={{color:"#616161"}}>
              {title}
          </Typography>
          <div style={{flexGrow:1}}></div>
          <Box className={classes.icons}>
              <HelpOutlineOutlinedIcon/>
              <AccountCircleIcon/>
              <NotificationsActiveIcon/>
          </Box>
      </Container>
     
    </Box>
  );
};

export default DashBoardDetailHeader;
