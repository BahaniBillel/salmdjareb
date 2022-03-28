import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardWhy({ image, title }) {
  return (
    <Card sx={{ maxWidth: 300 }} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: 'rgb(70,188,131)' }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
            suscipit?
          </Typography>
          <Typography variant="body2" color="text.main">
            Lorem ipsum dolor sit amet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardWhy;
