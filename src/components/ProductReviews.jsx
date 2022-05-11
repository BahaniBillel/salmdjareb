import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SelectButtonBar from './SelectButtonBar';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentNeutralTwoToneIcon from '@mui/icons-material/SentimentNeutralTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
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
} from '@material-ui/core';

import ReadRating from './ReadRating';
import ReadTextRating from './ReadTextRating';
import Tooltip from '@mui/material/Tooltip';
import Product01 from '../images/product01.jpg';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  widget: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {},
  },
  displayarea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '2rem 0',
    [theme.breakpoints.down('sm')]: {},
  },
  embededproduct: {
    borderRadius: '4px',
    backgroundColor: '#fff',
    width: '80%',
    // height: "350px",
    // maxHeight: "350px",
    padding: '1rem',
    marginBottom: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {},
  },
  topsection: {
    borderBottom: '1px solid #ccc',
    width: '100%',
    paddingBottom: '.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {},
  },
  contentsection: {
    borderTop: '1px solid #ccc',
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  bottomsection: {
    borderTop: '1px solid #ccc',
    width: '100%',
    paddingTop: '.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {},
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
}));

const ProductReviews = () => {
  const classes = useStyles();

  return (
    <div className={classes.widget}>
      <SelectButtonBar />
      <Box className={classes.displayarea}>
        <EmbededProduct />
        <EmbededProduct />
        <EmbededProduct />
        <EmbededProduct />
        <EmbededProduct />
      </Box>
    </div>
  );
};

export default ProductReviews;

const EmbededProduct = () => {
  const classes = useStyles();
  return (
    <Box className={classes.embededproduct}>
      {/* Top section */}
      <Box classeName={classes.topsection}>
        <Typography variant="caption" component="div">
          Bahani Billel
        </Typography>
        <Typography variant="caption" component="div">
          3 days ago
        </Typography>
      </Box>
      {/* the content */}
      <Box className={classes.contentsection}>
        <Box className={classes.rating}>
          <ReadRating value={3.5} />
          <Typography
            variant="h6"
            component="div"
            style={{ fontSize: '.8rem' }}
          >
            PRODUCT SCORE: 3.5
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="div" color="gray" gutterBottom>
            NextDay: Innovative Product for Zgeneration.
          </Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          illum magnam dolorum harum .
          <Typography
            variant="body2"
            component="div"
            color="gray"
            gutterBottom
            style={{ margin: '1rem auto' }}
          >
            Sentiment Analysis:
          </Typography>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <SentimentSatisfiedTwoToneIcon
                style={{ color: 'rgb(70,128,131)' }}
              />
              <Box
                style={{
                  marginLeft: '.3rem',
                  height: '15px',
                  width: '100px',
                  borderRadius: '1px',
                  backgroundColor: 'rgb(70,128,131)',
                }}
              ></Box>
              25%
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <SentimentNeutralTwoToneIcon style={{ color: 'gold' }} />
              <Box
                style={{
                  marginLeft: '.3rem',
                  height: '15px',
                  width: '200px',
                  borderRadius: '1px',
                  backgroundColor: 'gold',
                }}
              ></Box>
              60%
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <SentimentDissatisfiedTwoToneIcon style={{ color: '#f9564f' }} />
              <Box
                style={{
                  marginLeft: '.3rem',
                  height: '15px',
                  width: '50px',
                  borderRadius: '1px',
                  backgroundColor: '#f9564f',
                }}
              ></Box>
              15%
            </Box>
          </Box>
          <Link to="/report">
            <Typography
              variant="caption"
              component="div"
              color="gray"
              style={{ margin: '1rem auto' }}
            >
              Read the full report
            </Typography>
          </Link>
        </Box>

        <Box>
          <Typography
            variant="caption"
            component="div"
            color="gray"
            gutterBottom
          >
            CODE:XER908
          </Typography>
          <Link to="/productreviews">
            <Typography
              variant="caption"
              component="div"
              color="gray"
              gutterBottom
            >
              View all reviews(3)
            </Typography>
          </Link>

          <CardMedia
            component="img"
            image={Product01}
            style={{
              width: '180px',
              padding: '.5rem',
              border: '#ccc solid 1px',
            }}
          />
        </Box>
      </Box>

      {/* Bottom */}
      <Box className={classes.bottomsection}>
        <ButtonGroup>
          <Button variant="outlined" startIcon={<ReplyAllOutlinedIcon />}>
            Reply
          </Button>
          <Button variant="outlined" startIcon={<ShareOutlinedIcon />}>
            Share
          </Button>
          <Button variant="outlined" startIcon={<FlagOutlinedIcon />}>
            Report
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
