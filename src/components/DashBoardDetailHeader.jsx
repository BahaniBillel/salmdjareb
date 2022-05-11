import React from 'react';
import {
  Container,
  makeStyles,
  Box,
  Typography,
  Button,
} from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { grey, teal } from '@material-ui/core/colors';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  upperheader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid #cecece',
    padding: '1rem 2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
      flexDirection: 'column',
      width: '100vw',
      // padding: '1rem ',
    },
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& svg': {
      marginLeft: '1rem',
      color: '#616161',
    },
  },

  upgradeInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
  },
  upgradeText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',

    [theme.breakpoints.down('sm')]: {
      // display: 'none',
      flexDirection: 'row',
      width: '100%',
    },
  },
  upgradeButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));

const DashBoardDetailHeader = ({ title, upgrade, Logo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.dashDetailHeader}>
      <CssBaseline />
      <div className={classes.upperheader}>
        <Button
          variant="outlined"
          startIcon={<ApartmentOutlinedIcon style={{ fontSize: '1.3rem' }} />}
          style={{
            border: 'none',
            color: 'gray',
            padding: '.5rem 1rem',
            fontSize: '1.3rem',
            fontWeight: '400',
          }}
          gutterBottom
        >
          {title}
        </Button>
        <Box className={classes.upgradeInfo}>
          <Box className={classes.upgradeText}>
            <Typography
              variant="body1"
              component="div"
              style={{ color: '#ccc', fontSize: '.9rem' }}
              gutterBottom
            >
              Your plan is : Basic
            </Typography>

            <Typography
              variant="body1"
              component="div"
              style={{ color: '#ccc', fontSize: '.9rem' }}
              gutterBottom
            >
              Expiry date: 31/12/2024
            </Typography>
          </Box>

          <Box className={classes.upgradeButton}>
            <Button
              style={{
                padding: '.3rem 2rem ',
                borderRadius: '4px',
                backgroundColor: '#f9564f',
                color: '#ccc',
                margin: '.5rem auto',
              }}
              onClick={upgrade}
            >
              Upgrade now
            </Button>
          </Box>
        </Box>

        {/* <div style={{ flexGrow: 1 }}></div> */}
        <Box className={classes.icons}>
          <HelpOutlineOutlinedIcon />
          <AccountCircleIcon />
          <NotificationsActiveIcon />
        </Box>
      </div>
    </Box>
  );
};

export default DashBoardDetailHeader;
