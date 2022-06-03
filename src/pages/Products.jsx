import React from "react";
import { Box, makeStyles, Container, Typography } from "@material-ui/core";
import PricingPlan from "../components/PricingPlan";
import ServiceItem from "../components/ServiceItem";
import Modal from "../components/Modal";
import ServicesCardContent from "../components/ServicesCardContent";
import siteConfiguration from "../siteConfiguration";


const useStyles = makeStyles((theme) => ({
  services: {
    padding: "0rem 0",
    marginBottom:"5rem",
    [theme.breakpoints.down("sm")]: {},
  },
  itemzWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10rem",
  },
  itemzdetail: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.services}>
       
        <Box className={classes.itemzWrapper}>
          <Typography
            variant="h1"
            component={"div"}
            style={{
              width: "90%",
              fontWeight: "600",
              textAlign: "center",
              fontSize: "5rem",
              
              
            }}
          >
          Main Products
          </Typography>
          <Typography
            variant="body1"
            component={"div"}
            style={{
              width: "90%",
              fontWeight: "300",
              textAlign: "center",
              fontSize: "1.5rem",
              paddingBottom:"2rem",
              borderBottom: "1px solid #ccc",
              color:siteConfiguration.primaryGray,
            }}
          >
          That can be generated when   SAL-MDJAREB platform reaches a stage of maturity(i.e trusted by consumers).
          </Typography>

          <Box className={classes.itemzdetail}>
            {ServicesCardContent.map((item) => {
              return (
                <ServiceItem
                  key={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  text={item.describe}
                  modal={
                    <Modal
                      title={item.title}
                      subTitle={item.subTitle}
                      text={item.illustrate}
                      feature1={item.feature[0]}
                      featureText1={item.featureText[0]}
                      feature2={item.feature[1]}
                      featureText2={item.featureText[1]}
                      feature3={item.feature[2]}
                      featureText3={item.featureText[2]}
                      feature4={item.feature[3]}
                      featureText4={item.featureText[3]}
                      feature5={item.feature[4]}
                      featureText5={item.featureText[4]}
                      feature6={item.feature[5]}
                      featureText6={item.featureText[5]}
                    />
                  }
                />
              );
            })}
          </Box>
        </Box>
  
      </Container>
    </Box>
  );
};

export default Services;
