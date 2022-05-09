import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ServicesReviews from "./ServicesReviews";
import ProductReviews from "./ProductReviews";
import ReviewInsights from "./ReviewInsights";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Weekly" {...a11yProps(0)} />
          <Tab label="Monthly" {...a11yProps(1)} />
          <Tab label="Annualy" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ServicesReviews
          avgScore={"4.7"}
          reviewsNumber={"340"}
          // visibilitySecondBox="hidden"
          diliveredIndicator='186'
          diliveredRate='72%'
          repliedIndicator='34'
          repliedRate='85%'
          queuedIndicator='10'
          queuedRate='7%'
          rejectIndicator='33'
          rejectRate='17%'
          arrow1='up'
          arrow2='up'
          arrow3='down'
          arrow4='up'
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ServicesReviews
          avgScore={"4.3"}
          reviewsNumber={"977"}
          visibilitySecondBox="hidden"
          diliveredIndicator='222'
          diliveredRate='32%'
          repliedIndicator='64'
          repliedRate='35%'
          queuedIndicator='10'
          queuedRate='2%'
          rejectIndicator='23'
          rejectRate='1%'
          arrow1='down'
          arrow2='up'
          arrow3='up'
          arrow4='up'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ServicesReviews
          avgScore={"3.9"}
          reviewsNumber={"3340"}
          visibilitySecondBox="hidden"
          diliveredIndicator='486'
          diliveredRate='52%'
          repliedIndicator='102'
          repliedRate='49%'
          queuedIndicator='99'
          queuedRate='18%'
          rejectIndicator='37'
          rejectRate='27%'
          arrow1='up'
          arrow2='up'
          arrow3='down'
          arrow4='down'
        />
      </TabPanel>
    </Box>
  );
}
