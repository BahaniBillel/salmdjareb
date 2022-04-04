import React from 'react';
import { Container, makeStyles, Box, Typography } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { grey, teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  upperheader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottom: '1px solid #cecece',
    padding: '1rem 2rem',
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
}));

const DashBoardDetailHeader = ({ title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.dashDetailHeader}>
      <CssBaseline />
      <div className={classes.upperheader}>
        <Typography variant="h6" component="div" style={{ color: '#616161' }}>
          {title}
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
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
