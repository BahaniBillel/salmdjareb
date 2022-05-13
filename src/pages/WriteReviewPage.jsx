import React from "react";
import ReviewForm from "../components/ReviewForm";
import CocaCola from "../images/cocaLogo.png";
import { Box, makeStyles, Container,Typography,TextField ,Button} from "@material-ui/core";
import PageviewIcon from '@mui/icons-material/Pageview';
const useStyles = makeStyles((theme) => ({
  writereview: {
    height: "100vh",
    marginTop:"20rem",
    [theme.breakpoints.down("sm")]: {
    
    },
  },
}));

const WriteReviewPage = ({ name, review, pageId }) => {
  const classes = useStyles();
  return (
    <Box className={classes.writereview}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Find a business to review
        </Typography>
        <Typography gutterBottom>
          Review anything from your favorite patio spot to your local flwershop.
        </Typography>
        <Box>
          <TextField 
          variant="outlined"
           label="Find business"
           placeholder="restaurant,plumber,Hotel..."
           style={{width:"40%"}}
          />
          <TextField 
          variant="filled"
           label="Location"
           placeholder="Blida,Galma,Alger...."
           style={{width:"20%"}}
          />
          <Button endIcon={<PageviewIcon/>} />
          
          
        </Box>
      </Container>
    </Box>
  );
};

export default WriteReviewPage;
