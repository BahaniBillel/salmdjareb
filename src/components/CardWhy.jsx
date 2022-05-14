import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Divider,Box } from "@material-ui/core";
import {Link} from 'react-router-dom';

function CardWhy({ image, title }) {
  return (
    <Card sx={{ maxWidth: 320, height: "auto",marginTop:"1rem" }} elevation={1}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontWeight: "700", color: "rgb(70,128,131)" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "gray", lineHeight: "1.6rem", fontSize: ".9rem" }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laudantium deleniti repellendus iste, numquam illum at atque maxime
            consectetur. Sint laudantium, ea dicta nostrum hic nobis libero
            impedit vero odio?[...]
          </Typography>
        </CardContent>
     
       
      </CardActionArea>
    </Card>
  );
}

export default CardWhy;
