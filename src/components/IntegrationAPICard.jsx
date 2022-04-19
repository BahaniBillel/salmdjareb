import * as React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
  ButtonGroup,
  Box,
  TextField,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded';

const useStyles = makeStyles((theme) => ({
  apiCard: {
    padding: '1rem',
    width: '270px',
    height: '389px',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',
    marginBottom: '2rem',
    
  },
  imgBox: {
    height: '45%',
    width: '100%',

    '& img ': {
      width: '100%',
    },
  },
}));

const IntegrationAPICard = ({ logo, name, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.apiCard}>
      <Link to='/api' style={{color:"#000"}}>
      
      <Box className={classes.imgBox}>
        <img src={logo} alt="/" />
      </Box>

      <Box className={classes.detail}>
        <Typography
          variant="h6"
          component="div"
          style={{ fontWeight: '500', fontWeight: '.8rem' }}
          gutterBottom
        >
          {name}
        </Typography>

        <Typography
          variant="h6"
          component="div"
          gutterBottom
          style={{
            fontWeight: '300',

            color: '#6c7380',
            fontSize: '.875rem',
          }}
        >
          {description}
        </Typography>
      </Box>
      </Link>
    </Box>
  );
};

export default IntegrationAPICard;
