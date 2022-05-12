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
import MutualUnderstanding from '../images/mutualUnderstanding.png';
import MyPhoto from '../images/myphoto02.jpg';
import Quote from './QuoteIcon';

const useStyles = makeStyles((theme) => ({
  article: {
    height: 'auto',
    padding: '3rem',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    [theme.breakpoints.down('sm')]: {},
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: '5rem',
  },

  leftBox: {
    width: '50%',
  },
  mainheadline: {
    fontSize: '2rem',
    fontWeight: '500',
  },
  textBox: {
    marginTop: '2rem',
  },
  text: {
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    fontWeight: '300',
  },

  rightBox: {
    width: '50%',
    position: 'relative',
    background: `url(${MutualUnderstanding}) center/cover`,
    height: '300px',
  },

  ownerSaying: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '5rem',
    marginTop: '10rem',
    width: '100%',
    position: 'relative',
  },
  imageBox: {
    width: '100%',
    height: '550px',
    position: 'relative',
    background: `url(${MyPhoto}) center/80%`,
    backgroundRepeat: 'no-repeat',
  },
  content: {
    position: 'absolute',
    left: '55%',
    top: '10%',
    padding: '1.5rem',
    height: '400px',
    width: '380px',
    background: ' rgb(249,255,9)',
    background:
      'linear-gradient(286deg, rgba(249,255,9,1) 0%, rgba(249,230,79,1) 71%, rgba(251,239,46,1) 100%)',
  },
  contentText: {
    fontSize: '1rem',
    lineHeight: '2.3rem',
    fontWeight: '300',
  },
  innerContent: {
    width: '100%',
    height: 'auto',
    background: '#fff',
    padding: '2rem',
    borderRadius: '4px',
  },
  name: {
    fontWeight: '600',
    marginTop: '2rem',
  },
  jobtitle: {
    fontWeight: '300',
    fontSize: '.8rem',
  },
}));

const Article = () => {
  const classes = useStyles();
  return (
    <Container className={classes.article}>
      <Box className={classes.row}>
        <Box className={classes.leftBox}>
          <Typography variant="h5" className={classes.mainheadline}>
            What is SAL-MDJAREB?
          </Typography>
          <Box className={classes.textBox}>
            <Typography
              variant="body1"
              className={classes.text}
              component="div"
            >
              SAL MDJAREB is an Algerian social network platform based on a
              crowdsourcing system that enables users to share their experiences
              and exchange their opinions about any local business's product or
              service.
              <br />
              <br />
              This online platform is destined for both large public users and
              local businesses.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.rightBox}></Box>
      </Box>
      <Box className={classes.ownerSaying}>
        <Box className={classes.imageBox}></Box>
        <Box className={classes.content}>
          <Box className={classes.innerContent}>
            <Typography
              variant="body1"
              className={classes.contentText}
              component="div"
            >
              <Quote fontsize={'2'} rotate="180" color="#ccc" />
              The issue of low quality preoccupies a considerable portion of our
              daily life. As a quality manager, the idea of finding a solution
              to fix the situation on a greater scale stroke my mind
              everytime.It was one day when I thought to launch the SAL MDJAREB
              project as innovant idea that would give all consumers a powerful
              voice and enable businesses to improve by interacting with their
              consumers within an environment built with mutual trust and
              credibility and improve on a continual basis.
              <Quote fontsize={'2'} rotate="0" color="#ccc" />
            </Typography>
            <Typography variant="h6" className={classes.name} component="div">
              BAHANI Billel
            </Typography>
            <Typography
              variant="h6"
              className={classes.jobtitle}
              component="div"
            >
              founder of SAL-MDJAREB.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Article;
