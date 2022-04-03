import React from 'react';
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
} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

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

const useStyles = makeStyles((theme) => ({
  figure: {
    Height: '100%',
    height: '100%',
  },
}));

const LineChart = () => {
  const classes = useStyles();
  return (
    <div className={classes.figure}>
      <Doughnut
        data={data}
        width={300}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default LineChart;
