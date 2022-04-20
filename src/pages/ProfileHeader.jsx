import React, { useEffect, useState } from 'react';
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  ListItem,
  Button,
} from '@material-ui/core';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Rating from '@mui/material/Rating';
import TextRating from '../components/TextRating';
import ReadRating from '../components/ReadRating';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  profileHeader: {
    width: '100vw',
    height: '35vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '60px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile_header_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  imgBox: {
    // width: '20%',
  },
  companyIdentification: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    width: '90%',
    height: '100%',
  },
  companyScoreInfo: {
    marginTop: '2rem',
  },
  visitWebsite: {
    border: '1px solid #eee',
    height: '40px',
    padding: '1rem',
    fontSize: '.8rem',
  },
  logo_name_link_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const ProfileHeader = ({
  logo,
  rating,
  main,
  subactivity,
  businessname,
  reviewsCounts,
  appreciation,
  overalRating,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.profileHeader}>
      <Container maxWidth="md" className={classes.profile_header_wrapper}>
        {/* breadcrumbs */}
        <Typography component="div" variant="p1">
          {main} > {subactivity}>{businessname}
        </Typography>

        <Box className={classes.logo_name_link_box}>
          {/*  logo+name+ avrage score*/}
          <Box className={classes.companyIdentification}>
            <Box className={classes.imgBox}>
              <img
                src={logo}
                alt="/"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'scale-down',
                }}
              />
            </Box>
            <Box className={classes.companyScoreInfo}>
              <Typography
                variant="h4"
                component="h4"
                style={{ padding: '0rem 1rem' }}
              >
                {businessname}
              </Typography>
              <ListItem>
                <Typography>
                  Reviews {reviewsCounts} . {appreciation}
                </Typography>
              </ListItem>
              <ListItem>
                <ReadRating value={rating} />

                <Typography
                  varaint="caption"
                  component="div"
                  style={{ marginLeft: '1rem' }}
                >
                  {overalRating}
                </Typography>
                <Tooltip
                  title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorum, quae vitae omnis assumenda quam."
                  disableInteractive
                  style={{
                    fontSize: '1rem',
                    color: 'gray',
                    marginLeft: '.5rem',
                  }}
                >
                  <HelpOutlineOutlinedIcon />
                </Tooltip>
              </ListItem>
            </Box>
          </Box>
          {/* link to the website */}

          <Box className={classes.visitWebsite}>
            <Typography variant="p1" component="p">
              Visit this website
              <Button
                startIcon={<LanguageIcon />}
                endIcon={<ArrowForwardIosOutlinedIcon />}
              >
                {`wwww.${businessname}.com`}
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfileHeader;
