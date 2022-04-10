import * as React from 'react';
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
  TextField,
  Grid,
} from '@material-ui/core';

import { styled } from '@mui/material/styles';
import Picture from '../images/join02.jpg';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';
import SplitButton from './SplitButton';
import { boxShadow } from '../siteConfiguration';
import PieChart from './PieChart';
import { LineChart } from './LineChart';
import { VerticalBarChart } from './VerticalBarChart';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Tooltip from '@mui/material/Tooltip';

const useStyles = makeStyles((theme) => ({}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const classes = useStyles();
  return (
    <Box className={classes.reviewInsights}>
      {/* SELECT BUTTONS */}
      <SelectButtons />
      {/* CONTENT  */}
      <Grid
        container
        spacing={2}
        style={{ padding: '2rem' }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={3}
      >
        <Grid item xs={3}>
          <Item>
            <IndicatorCard
              title="NPS"
              quarterYear="Q1 2019"
              indicator="156"
              scoreTitle="  NPS SCORE"
              fontColor="#000"
              toolip="Net Promoter Score (NPS) is a customer 
              loyalty and satisfaction measurement taken 
              from asking customers how likely they are to
               recommend your product or service to others on a scale of 0-10"
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <IndicatorCard
              title="AVERAGE FEEDBACK"
              quarterYear="Q1 2019"
              indicator="4.6"
              scoreTitle="487+ RATED VISITS"
              fontColor="mediumblue"
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <IndicatorCard
              title="HAPPY VISITS"
              quarterYear="Q1 2019"
              indicator="58%"
              scoreTitle="397+ HAPPY VISITS"
              fontColor="lightgreen"
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <IndicatorCard
              title="COMPLAINTS"
              quarterYear="Q1 2019"
              indicator="5%"
              scoreTitle="90+ COMPLAINTS"
              fontColor="red"
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <IndicatorCard
            title="OPEN ISSUES"
            quarterYear="Q1 2019"
            indicator="12"
            scoreTitle=" 12+ OPEN ISSUES"
            fontColor="#fff"
            color="#f9564f"
            borderRadius="4px"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />

          <IndicatorCard
            title="PENDING ISSUES "
            quarterYear="Q1 2019"
            indicator="3"
            scoreTitle=" 3+ PENDING ISSUES"
            fontColor="#fff"
            color="gold"
            marginTop="1rem"
            borderRadius="4px"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />
        </Grid>
        <Grid item sm={6}>
          <Item>
            <PieChart />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <IndicatorCard
            title="TOTAL VISITED RATED"
            quarterYear="Q1 2019"
            indicator="56%"
            scoreTitle=" 225+ VISITED RATED"
            fontColor="mediumblue"
            borderRadius="4px"
            color="#fff"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />

          <IndicatorCard
            title="TOTAL CUSTOMER RATED"
            quarterYear="Q1 2019"
            indicator="78%"
            scoreTitle=" 140+ CUSTOMER RATED"
            fontColor="mediumblue"
            color="#fff"
            marginTop="1rem"
            borderRadius="4px"
            boxShadow="0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)"
          />
        </Grid>
        <Grid item xs={6}>
          <Item>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <VerticalBarChart />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
export { IndicatorCard };

const SelectButtons = () => {
  const [currency, setCurrency] = React.useState('EUR');
  const years = [2019, 2020, 2021, 2022];
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '.5rem 3rem',
        width: '100%',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h6" color="gray" style={{ marginRight: '1rem' }}>
        Period:
      </Typography>
      <ButtonGroup>
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select the year"
          variant="outlined"
        >
          {quarters.map((option) => (
            <option key={option.value} value={option.value}>
              {option}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select the year"
          variant="outlined"
        >
          {years.map((option) => (
            <option key={option.value} value={option.value}>
              {option}
            </option>
          ))}
        </TextField>
      </ButtonGroup>
    </Box>
  );
};

const IndicatorCard = ({
  title,
  quarterYear,
  indicator,
  scoreTitle,
  color,
  fontColor,
  marginTop,
  borderRadius,
  boxShadow,
  toolip,
}) => {
  return (
    <Box
      style={{
        padding: '1.5rem ',
        width: '100%',
        height: '160px',
        backgroundColor: `${color}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: `${marginTop}`,
        borderRadius: `${borderRadius}`,
        boxShadow: `${boxShadow}`,
      }}
    >
      <Typography
        variant="h6"
        compnent="div"
        style={{ fontSize: '1rem', display: 'flex', flexDirection: 'row' }}
      >
        {title}
        <Tooltip title={toolip}>
          <HelpOutlineOutlinedIcon style={{ fontSize: '.8rem' }} />
        </Tooltip>
      </Typography>
      <Typography variant="caption" compnent="div" color="gray">
        {quarterYear}
      </Typography>
      <Typography
        variant="h2"
        compnent="div"
        style={{ fontWeight: '500', color: `${fontColor}` }}
      >
        {indicator}
      </Typography>
      <Typography variant="caption" compnent="div" color="gray">
        {scoreTitle}
      </Typography>
    </Box>
  );
};
