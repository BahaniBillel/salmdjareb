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
} from '@material-ui/core';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  article: {
    height: '100vh',
    padding: '3rem',
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {},
  },
  mainheadline: {
    fontSize: '2rem',
    fontWeight: '500',
  },
  textBox: {
    width: '50%',
    marginTop: '2rem',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    fontWeight: '300',
  },
}));

const Article = () => {
  const classes = useStyles();
  return (
    <Container className={classes.article}>
      <Typography variant="h5" className={classes.mainheadline}>
        What is SAL-MDJAREB?
      </Typography>
      <Box className={classes.textBox}>
        <Typography variant="body1" className={classes.text} component="div">
          SAL MDJAREB is an Algerian social network platform based on a
          crowdsourcing system that enables users to share their experiences and
          exchange their opinions about any local business's product or service.
          <br />
          <br />
          This online platform is destined for both large public users and local
          businesses.
        </Typography>
      </Box>
    </Container>
  );
};

export default Article;
