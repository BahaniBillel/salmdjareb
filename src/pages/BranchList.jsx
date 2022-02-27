import React from "react";
import { Container, makeStyles, Box, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import SingleCardCategory from "../components/SingleCardCategory";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ActivitieZData from "../components/Data";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

// componennt styles
const useStyles = makeStyles({
  upperWrapper: {
    overflow: "hidden",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    padding: "2rem 0rem",
  },
  sidebar: {
    width: "40%",
    height: "400px",
    backgroundColor: "#fff",
  },
  categoryHeaderTitle: {
    width: "100vw",
    height: "30vh",
    backgroundColor: "#fff",
    padding: "3rem",
  },
  categoryHeaderContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  titleMargin: {
    margin: "1.5rem 0",
  },
});

const BranchList = () => {
  const classes = useStyles();
  const { id } = useParams();
  const matches = useMediaQuery("(min-width:600px)");

  const {
    Data: [...rest],
  } = ActivitieZData();

  // console.log(rest);

  // the question: how to import data based on a local file

  return (
    <Box className={classes.upperWrapper}>
      <Box className={classes.categoryHeaderTitle}>
        <Container className={classes.categoryHeaderContent}>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="/"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Catalog" />
            <StyledBreadcrumb
              label="Accessories"
              deleteIcon={<ExpandMoreIcon />}
              onDelete={handleClick}
            />
          </Breadcrumbs>
          <Typography
            component="h4"
            variant="h4"
            className={classes.titleMargin}
          >
            {rest.map(main=>(
              main.subCat.map(sub=>{
                if (id === sub.id) {
                  return `Best in ${sub.subactivity}`
                }
              }
              )
            ))}
          </Typography>

          <Typography component="p" variant="body2">
            Compare companies in building materials
          </Typography>
        </Container>
      </Box>
      <Container className={classes.wrapper} maxWidth="md">
        <Container className={classes.sidebar}>
          {/* Side bar */}
          <h3>side bar</h3>
        </Container>
        <Container>
          {/* this is where card business  will be mapped */}

          {rest.map((item) => {
            return item.subCat.map((sub) => {
              return sub.businesses.map((business) => {
                if (sub.id === id) {
                  return (
                    <div>
                      <Link to={`/profile/${business.id}`}>
                        <SingleCardCategory
                          key={business.id}
                          companyName={business.businessname}
                        />
                      </Link>
                    </div>
                  );
                }
              });
            });
          })}
        </Container>
      </Container>
    </Box>
  );
};

export default BranchList;
