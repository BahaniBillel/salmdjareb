import * as React from "react";
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
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        width: '100%',
        height: '100vh',
        background: 'rgb(70,128,131)',
        background:
          'linear-gradient(206deg, rgba(70,128,131,1) 0%, rgba(60,110,113,1) 70%, rgba(42,78,80,1) 100%)',
        position: 'absolute',
        left: '0px',
        top: '0',
        zIndex: 200,
        transition: ' all 500ms ease-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingLeft: '3rem',
        paddingTop:"2rem",
        [theme.breakpoints.up('sm')]: {
           display:"none",
       
          
        },
        
        '& a': {
          // border: '1px #ccc solid',
          // background: '#ccc',
          padding: '1rem 10rem 1rem 1rem',
          width: '30%',
          color: '#fafafa',
          [theme.breakpoints.up('sm')]: {
            background: 'red',
            border: 'none',
            padding: '1rem 1rem',
            width: 'auto',
            
          },
          
        }
      },
}));




const Mobilemenu = ({ CloseMobileMenu ,slideX,link1,link2,link3,link4,link5,link6,link7}) => {
  const classes = useStyles();
  return ( 
<Box className={classes.navlinks} style={{
    transform:`${slideX} translateY(0%)`,
    }}>
      <Link to="/" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        {link1}
      </Link>
      <Link
        to="/writeReview"
        sx={{ minWidth: 100 }}
        className={classes.navItem}
        onClick={CloseMobileMenu}
      >
        {link2}
      </Link>
      <Link to="/categories" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        {link3}
      </Link>
      <Link to="/community" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        {link4}
      </Link>
      <Link to="/businesses" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        {link5}
      </Link>
      <Link to="/login" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        {link6}
      </Link>
      <Link to="/dashboard/1" sx={{ minWidth: 100 }} onClick={CloseMobileMenu}>
        {link7}
      </Link>
    </Box>
  
  )
}

export default Mobilemenu