import React from "react";

import {

  makeStyles,
  Box,
  Typography,

  ListItem,
  ListItemText,
} from "@material-ui/core";


const useStyles = makeStyles({
  about: {
    padding: "1rem",
    backgroundColor:"#fff"
  },
});

const BusinessSideBarActivity = ({businssname: businessname}) => {
  const classes = useStyles();
  return (
    <Box>
      <ListItem className={classes.about} style={{borderBottom:"1px solid #eee"}}>
        <ListItemText >
          <Typography variant="h6">About {businessname}</Typography>
          <Typography variant="subtitle2" component="p" style={{letterSpacing:".1rem",margin:".5rem 0"}}>
            Written by Djamel Allaoui
          </Typography>
          <Typography variant="body2" component="p" style={{textAlign:"justify",margin:".5rem 0",color:"	#708090"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur natus, quisquam aliquid quo voluptatem quibusdam! Dolorem
            odit saepe sunt ullam nobis earum inventore, ipsum nisi officiis
            quod fugit impedit.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem className={classes.about} style={{borderBottom:"1px solid #eee"}}>
        <ListItemText >
          <Typography variant="h6">{businessname} contacts</Typography>
       
        </ListItemText>
      </ListItem>
      <ListItem className={classes.about} style={{borderBottom:"1px solid #eee"}}>
        <ListItemText >
          <Typography variant="h6">Contacts</Typography>
          <Typography variant="body2" component="p" style={{textAlign:"justify",margin:".5rem 0",color:"	#708090"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            tenetur natus, quisquam aliquid quo voluptatem quibusdam! Dolorem
            odit saepe sunt ullam nobis earum inventore, ipsum nisi officiis
            quod fugit impedit.
          </Typography>
        </ListItemText>
      </ListItem>
    </Box>
  );
};

export default BusinessSideBarActivity;
