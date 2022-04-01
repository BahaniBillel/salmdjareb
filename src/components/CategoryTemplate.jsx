import React from "react";
import {
  Container,
  makeStyles,
  List,
  ListItemText,
  Box,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import ActivitieZData from "../components/Data";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  listwrapper: {
    width: "100%",
    minHeight: "100vh",
    background: " rgb(235,235,235)",
    background:
      "linear-gradient(286deg, rgba(235,235,235,1) 0%, rgba(251,251,251,1) 70%, rgba(230,230,230,1) 100%)",
    padding: "2rem 7rem ",
  },
  listshow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItem: "center",
  },
  list: {
    width: "250px",
    height: "auto",
    backgroundColor: "white",
    padding: "0",
    marginBottom: "1.5rem",
    borderRadius: "10px",
    overflow: "hidden",
  },
}));

const { Data } = ActivitieZData();

const CategoryTemplate = ({ catIcon, catName, subCat, url }) => {
  const classes = useStyles();

  

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.listwrapper}>
        <Container className={classes.listshow}>
          {Data.map((activity) => (
            <List className={classes.list} key={activity.id}>
              <ListItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItem: "center",
                  width: "100%",
                  backgroundColor: "#F27649 ",
                }}
              >
                <ListItemIcon component="div">{activity.icon}</ListItemIcon>
                <ListItemText
                  primary={activity.activity}
                  className={classes.cardTitle}
                />
              </ListItem>
              {activity.subCat.map((sub) => (
                <ListItem key={sub.id} divider alignItems="start">
                  <Link to={`/categories/${sub.id}`}>
                    <ListItemText primary={sub.subactivity} />
                  </Link>
                </ListItem>
              ))}
            </List>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default CategoryTemplate;
