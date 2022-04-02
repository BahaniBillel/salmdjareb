import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Typography,
  CardMedia,
  List,
  ListItemText,
  ListItem,
  Button,
} from "@material-ui/core";

import CssBaseline from "@mui/material/CssBaseline";

import Chart from '../images/chart_bar.PNG';
import { useParams } from "react-router-dom";
import { grey,teal } from "@material-ui/core/colors";
import {Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';




const useStyles = makeStyles((theme) => ({
   
    servicesReviews:{
        width:"100%",
        height:"100%",
        backgroundColor:"#fff",
        
    },
    
    figure:{
        Height:"70%"
    }    
    

    
}));


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const ServicesReviews = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: 1 }} className={classes.servicesReviews}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6"  className={classes.figure}>
        <Doughnut data={data} style={{ objectFit:"scale-down"}} />
        </Box>
        <Box gridColumn="span 6" style={{border:"1px solid #616161"}} >
        <Doughnut data={data} style={{ objectFit:"scale-down"}} />
        </Box>
        <Box gridColumn="span 6" style={{border:"1px solid #616161"}}>
        <Doughnut data={data} style={{ objectFit:"scale-down"}} />
        </Box>
        <Box gridColumn="span 6" style={{border:"1px solid #616161"}}>
        <Doughnut data={data} style={{ objectFit:"scale-down"}} />
        </Box>
        
      </Box>
    </Box>
  );
};

export default ServicesReviews;





