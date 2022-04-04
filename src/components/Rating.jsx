import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { makeStyles, Typography } from '@material-ui/core';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles((theme) => ({
  ratingBox: {
    border: '1px #ccc solid',
    '& label': {
      '& span': {
        color: 'red',
      },
    },
  },
}));

export default function TextRating({}) {
  const [value, setValue] = useState(0);
  const HandleRating = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box
      sx={{
        width: 200,
        height: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        precision={0.5}
        onChange={HandleRating}
        icon={
          <StarIcon
            style={{
              color: '#f9564f',
              backgroundColor: 'rgb(70,128,131)',
              border: '1px solid #ccc',
              fontSize: '2rem',
            }}
          />
        }
        emptyIcon={
          <StarIcon
            style={{
              opacity: 0.55,
              border: '1px solid #ccc',
              fontSize: '2rem',
            }}
            fontSize="inherit"
          />
        }
      />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">{labels[value]}</Typography>
      </Box>
    </Box>
  );
}
