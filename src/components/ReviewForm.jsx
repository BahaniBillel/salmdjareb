import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  TextField,
  CardMedia
} from "@material-ui/core";
import Rating from "@mui/material/Rating";


const useStyles = makeStyles({
  wrapper: {
    marginTop: "1rem",
    marginBottom:"3rem"
},
formWrapper: {
    width: "35vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "-1px 1px 2px #ccc",
    overflow:"hidden",
  },
  companyHeader: {
    height: "20%",
    backgroundColor: "#ccc",
    width: "95%",
    padding:"1rem"
  },
  detail: {
    padding: "1rem ",
    width: "93%",
  },
  rate: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // fontSize: ".5rem",
    // backgroundColor:"violet",
    marginBottom: "1.5rem",
  },
  tellUs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "1.5rem",
  },
});

const ReviewForm = ({logo}) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  return (
    <Container maxWidth="sm" className={classes.wrapper}>
      <Box className={classes.formWrapper}>
        <Box className={classes.companyHeader}>
        <CardMedia component="img" image={logo} alt="/" />
            <Typography variant="h4">
           Coca Cola
            </Typography>
        </Box>
        <Box className={classes.detail}>
          <Box className={classes.rate}>
            <Typography variant="h6" component="div">
              Rate Your Recent Experience here
            </Typography>
            <Rating
              name="no-value"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Box className={classes.tellUs}>
            <Typography
              variant="h6"
              component="div"
              style={{ marginBottom: "1rem" }}
            >
              Tell us about your Experience
            </Typography>

            <TextField
              id="outlined"
              label="Your experience here"
              multiline
              rows={4}
              defaultValue="Tell us about your recent expeience with {company name should be dynamically output}"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box className={classes.tellUs}>
            <Typography
              variant="h6"
              component="div"
              style={{ marginBottom: "1rem" }}
            >
              Give your review a title
            </Typography>

            <TextField
              id="outlined"
              label="Title"
              multiline
              rows={1}
              defaultValue="Write the title of your review here"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ReviewForm;
