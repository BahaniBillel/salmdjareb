import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

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
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  widget: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 6rem',
  },
  top: {
    width: '100%',
  },
  selectButtons: {
    float: 'right',
  },
  bottom: {
    width: '100%',
    height: '90%',
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  rectangle: {
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',

    // width: '380px',
    // height: '650px',
    borderradius: '4px',
    backgroundColor: '#fff',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  performance: {
    display: 'flex',
    '& svg': {
      color: 'gray',
      fontSize: '1rem',
    },
  },
}));

const ServicesReviews = () => {
  const classes = useStyles();

  return (
    <div className={classes.widget}>
      <Box className={classes.top}>
        <ButtonGroup className={classes.selectButtons}>
          <Button variant="contained">Weekly</Button>
          <Button variant="contained">Monthly</Button>
          <Button variant="contained">Annually</Button>
        </ButtonGroup>
      </Box>

      <Box className={classes.bottom}>
        {/* first box */}
        <Box className={classes.rectangle}>
          <Box className={classes.performance} gutterBottom>
            <Typography variant="h6" component="div" color="gray">
              Overall performance
            </Typography>
            <Tooltip
              title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorum, quae vitae omnis assumenda quam."
              disableInteractive
            >
              <HelpOutlineOutlinedIcon />
            </Tooltip>
          </Box>

          <Box>
            <ReadTextRating value="4.5" />
          </Box>
          <Typography variant="caption" component="div">
            Based on 5260 reviews
          </Typography>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '2rem 2rem',
              marginTop: '4rem',
            }}
          >
            <Typography
              variant="body1"
              component="div"
              color="gray"
              gutterBottom
            >
              AVERAGE SCORE
            </Typography>
            <Typography variant="h5" component="div" color="gray">
              4.5 out 5
            </Typography>
          </Box>
        </Box>

        {/* Second box */}
        <Box
          className={classes.rectangle}
          style={{
            display: 'flex',
            flexDirection: 'column',
            
          }}
        >
          <Box className={classes.performance} gutterBottom>
            <Typography variant="h6" component="div" color="gray">
              Engage
            </Typography>
            <Tooltip
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              disableInteractive
            >
              <HelpOutlineOutlinedIcon />
            </Tooltip>
          </Box>
          <Typography
            variant="caption"
            component="div"
            color="gray"
            gutterBottom
          >
            Service reviews
          </Typography>
          <Typography variant="h6" component="div" color="gray" gutterBottom>
            Your 3 latest reviews
          </Typography>
          <Divider/>
          <EmbedReview
            comment="It was awsome experience.Thank you for the service."
            value={4.5}
            reviewer="By Bahani Billel.5 days ago."
          />
          <Divider/>
          <EmbedReview
            comment="It was ok, but not super, i hope they get more serious next time"
            value={3}
            reviewer="By Salwa B.10 days ago."
          />
          <EmbedReview
            comment="my freind told me about this product ,and i think they try their best to improve the quality of their product."
            value={4}
            reviewer="By Salwa B.10 days ago."
          />
        </Box>

        {/* third box */}
        <Box className={classes.rectangle}>
          <Box className={classes.performance} gutterBottom>
            <Typography variant="h6" component="div" color="gray" gutterBottom>
              Invitation Status
            </Typography>
            <Tooltip
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ratione ea perspiciatis in adipisci animi praesentium
              aperiam numquam, molestias autem vero molestiae ipsum, at
              inventore quas perferendis facere corporis ducimus."
              disableInteractive
            >
              <HelpOutlineOutlinedIcon />
            </Tooltip>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <IndicatorBoxDown
                title="DILIVERED"
                indicator="4563"
                percentage="-78%"
              />
              <IndicatorBoxUp title="REPLIED" indicator="3" percentage="27%" />
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <IndicatorBoxUp title="IN QUEUE" indicator="0" percentage="0%" />
              <IndicatorBoxDown
                title="REJECTED"
                indicator="12"
                percentage="5%"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ServicesReviews;

const EmbedReview = ({ comment, value, reviewer }) => {
  return (
    <Box gutterBottom  marginBottom={1.4}>
      <Box
        style={{
          maxWidth: '200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
        gutterBottom
      >
        <FormatQuoteIcon
          style={{ transform: 'rotate(180deg) translateY(20%)' }}
        />
        <Typography
          variant="h6"
          component="div"
          color="gray"
          gutterBottom
          style={{ fontSize: '.7rem', fontWeight: '400' }}
        >
          {comment}
        </Typography>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <ReadRating value={value} size="3rem" />
        <Typography
          variant="caption"
          component="div"
          color="lght gray"
          
        >
          {reviewer}
        </Typography>
      </Box>
    </Box>
  );
};

const IndicatorBoxDown = ({ title, indicator, percentage }) => {
  return (
    <Box
      style={{
        padding: '.5rem',
        border: '#616161 solid 1px',
        borderRadius: '4px',
        margin: '0 1rem ',
        width: '120px',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="gray"
        style={{
          fontSize: '1rem',
          color: 'grey',
        }}
      >
        {title}
      </Typography>
      <Typography variant="h4" component="div" color="gray" style={{}}>
        {indicator}
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ArrowDropDownTwoToneIcon style={{ color: 'red' }} />
        <Typography
          variant="h4"
          component="div"
          style={{ color: 'red', fontSize: '1rem' }}
        >
          {percentage}
        </Typography>
      </Box>
    </Box>
  );
};

const IndicatorBoxUp = ({ title, indicator, percentage }) => {
  return (
    <Box
      style={{
        padding: '.5rem',
        border: '#616161 solid 1px',
        borderRadius: '4px',
        margin: '0 1rem ',
        width: '120px',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="gray"
        style={{
          fontSize: '1rem',
          color: 'grey',
        }}
      >
        {title}
      </Typography>
      <Typography variant="h4" component="div" color="gray" style={{}}>
        {indicator}
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ArrowDropUpTwoToneIcon style={{ color: 'green' }} />
        <Typography
          variant="h4"
          component="div"
          style={{ color: 'green', fontSize: '1rem' }}
        >
          {percentage}
        </Typography>
      </Box>
    </Box>
  );
};
