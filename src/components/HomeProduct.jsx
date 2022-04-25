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
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  homeProduct: {
    width: '100%',
    height: '120vh',
    margin: '10rem 0',
  },

  innerWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
}));

const HomeProduct = ({
  title,
  text1,
  text2,
  text3,
  SMtitle1,
  SMtitle2,
  SMtitle3,
  box1,
  box2,
  box3,
  bkg1,
  bkg2,
  bigImg,
  SMimg,
  backColor,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.homeProduct}>
      <Container
        className={classes.innerWrapper}
        style={{ background: `${backColor}` }}
      >
        <Box style={{ width: '35%' }}>
          <Typography variant="h2" style={{ fontWeight: '600' }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.75rem',
              fontWeight: '300',
              padding: '0 3rem 0 0',
            }}
          >
            {text1}
            <br />
            <br />
            <br />

            {text2}
          </Typography>
          <FormatQuoteIcon
            style={{ transform: 'rotate(180deg)', fontSize: '3.5rem' }}
          />
          <Typography
            variant="h5"
            style={{ padding: '0 2rem 0 0' }}
            component="div"
          >
            {text3}
          </Typography>
        </Box>

        {/* Right side */}
        <Box
          style={{
            width: '65%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              height: '60%',
              width: '100%',
              background: `${bkg1}`,
              background: `${bkg2}`,
              padding: '1rem',
            }}
          >
            <Box
              style={{
                width: '60%',
                transform: 'translateY(-28%)',
                background: '#fff',
                padding: '1rem',
              }}
            >
              <img
                src={bigImg}
                alt=""
                style={{ objectFit: 'scale-down', width: '100%' }}
              />
            </Box>
            <Box style={{ width: '60%', transform: 'translate(30%,-100%)' }}>
              <img
                src={SMimg}
                alt=""
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Box>
          </Box>
          <Box
            style={{
              height: '40%',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyConent: 'space-between',
              padding: '2rem 0',
            }}
          >
            <Box style={{ width: '32%', padding: '1rem' }}>
              <Typography variant="h6" component="div">
                {SMtitle1}
              </Typography>
              <Typography variant="body1" component="div">
                {box1}
              </Typography>
            </Box>
            <Box style={{ width: '32%', padding: '1rem' }}>
              <Typography variant="h6" component="div">
                {SMtitle2}
              </Typography>
              <Typography variant="body1" component="div">
                {box2}
              </Typography>
            </Box>
            <Box style={{ width: '32%', padding: '1rem' }}>
              <Typography variant="h6" component="div">
                {SMtitle3}
              </Typography>
              <Typography variant="body1" component="div">
                {box3}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeProduct;
