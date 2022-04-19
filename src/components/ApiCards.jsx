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
import IntegrationAPICard from './IntegrationAPICard';
import YoutubeLogo from '../images/youtube.jpg';
import InstagramLogo from '../images/instagram.png';
import FacebookLogo from '../images/facebook.png';
import OuedKnissLogo from '../images/ouedkniss.png';
import EnnaharLogo from '../images/ennahar.jpg';
import SamiraTVLogo from '../images/samira.png';
import GoogleLogo from '../images/google.jpg';
import ShopifyLogo from '../images/shopify.jpg';

const useStyles = makeStyles((theme) => ({
  apiWrapper: {
    padding: '2.5rem',
  },
  innerWrapper: {
    // padding:"3rem",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // height: "80vh",
  },
  detail: {
    width: '65%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',
    padding: '3rem',
  },
  apiShowcase: {},
  apis: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
}));

const Integrations = () => {
  const classes = useStyles();
  return (
    <Box className={classes.apiWrapper}>
      <Container className={classes.apiShowcase}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{ fontWeight: '300' }}
        >
          Connect with you preferred API
        </Typography>
        <Box className={classes.apis}>
          <IntegrationAPICard
            logo={YoutubeLogo}
            name="Youtube"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={InstagramLogo}
            name="Instagram"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={FacebookLogo}
            name="Facebook"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={OuedKnissLogo}
            name="Ouedkniss"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={EnnaharLogo}
            name="Ennahar Tv"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={SamiraTVLogo}
            name="SamiraTV"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={GoogleLogo}
            name="Google"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
          <IntegrationAPICard
            logo={ShopifyLogo}
            name="Shopify"
            description="  Gorgias helps independent ecommerce brands turn their support center
          into a profit center. By centralising customer interactions and
          automating responses to repetitive questions..."
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Integrations;
