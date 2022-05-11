import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Container, makeStyles, Typography } from '@material-ui/core';

function createData(topic, sentimentScore, reviews, lastExample, empty) {
  return { topic, sentimentScore, reviews, lastExample, empty };
}

const rows = [
  createData('Good', '100+', 45, 'Good work Great support', '>'),
  createData('Great', '100+', 45, 'Good work Great support', '>'),
  createData('Reviews', '100+', 45, 'Good work Great support', '>'),
  createData('Support', '100+', 45, 'Good work Great support', '>'),
];

const useStyles = makeStyles((theme) => ({}));

export default function InsightsTable() {
  const classes = useStyles();
  const [sentiment, setSentiment] = useState('');
  const [reviews, setReviews] = useState('');
  const [lastexemple, setLastexsmple] = useState('');

  const HandleClick = (e) => {
    alert(e.target.value);
  };
  return (
    <TableContainer component={Paper} style={{ padding: '2rem' }}>
      <Typography variant="h6" component="div">
        Topics
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Topic</TableCell>
            <TableCell align="right">Sentiment Score</TableCell>
            <TableCell align="right">Reviews</TableCell>
            <TableCell align="right">Latest example</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.topic}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{ cursor: 'pointer' }}
              onClick={HandleClick}
            >
              <TableCell component="th" scope="row">
                {row.topic}
              </TableCell>
              <TableCell align="right" value={sentiment}>
                {row.sentimentScore}
              </TableCell>
              <TableCell align="right" value={reviews}>
                {row.reviews}
              </TableCell>
              <TableCell align="right" value={lastexemple}>
                {row.lastExample}
              </TableCell>
              <TableCell align="right">{row.empty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
