import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Card,
  Typography,
  CardMedia,
} from '@material-ui/core';

import ActivitieZData from '../components/Data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  categoryShow: {
    width: '100%',
    padding:"5rem 0",
    // height: '80vh',5re

    // backgroundColor: '#00bfa5',
    [theme.breakpoints.down('sm')]: {
      marginTop: '15rem',
      height: 'auto',
      // backgroundColor: 'red',
      overflow: 'hidden',
    },
  },
  innerWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 2rem',
    },
  },
  upper: {
    height: '8%',
    width: '100%',
    padding: '2rem 4rem  ',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    textAlign:"right",
    // backgroundColor:"pink",

    '& a': {
      color: '#000',
    },
  },
  showcase: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItem: 'center',
    justifyContent: 'center',
    padding: '0',
    // backgroundColor:"purple",
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',

      '& a': {
        maxWidth: '120px',
        marginRight: '1rem',
      },
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeght: '300',
    minWidth: '150px',
    maxHeight: '50px',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100px',
      flexDirection: 'column',
    },
    height: '75px',
    margin: '0.3rem',
    padding: '.3rem',
  },

  cardText: {
    fontSize: '.8rem',
    fontWeight: 300,
    width: '65%',
    textAlign: 'left',
  },
  cardIcon: {
    width: '30%',
    textAlign: 'center',
  },
}));

const { Data } = ActivitieZData();

const CategoryShow = () => {
  const classes = useStyles();
  return (
    <Box className={classes.categoryShow}>
      <Container maxWidth="md" className={classes.innerWrapper}>
        <Container className={classes.upper}>
          <Link to="/categories">
            <Typography variant="h5" component="div" style={{fontWeight:"300"}}>Explore all categories</Typography>
            <Typography variant="h5" component="div" style={{fontWeight:"700",color:"rgb(70,128,131)"}}>Find what they are saying </Typography>
          </Link>
        </Container>
        <Container className={classes.showcase}>
          {/* Mapping the card activities  */}
          {Data.map((card) =>
            card.subCat.map((sub) => (
              <Link to={`/categories/${sub.id}`}>
                <Card key={sub.id} component="div" className={classes.card}>
                  <CardMedia className={classes.cardIcon}>{sub.icon}</CardMedia>
                  <Typography
                    variant="subtitle2"
                    className={classes.cardText}
                    component="div"
                  >
                    {sub.subactivity}
                  </Typography>
                </Card>
              </Link>
            ))
          )}
        </Container>
      </Container>
    </Box>
  );
};

export default CategoryShow;
