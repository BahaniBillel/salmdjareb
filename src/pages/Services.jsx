import React from "react";
import { Box, makeStyles, Container, Typography } from "@material-ui/core";
import PricingPlan from "../components/PricingPlan";
import ServiceItem from "../components/ServiceItem";
import Modal from "../components/Modal";

const useStyles = makeStyles((theme) => ({
  services: {
    padding: "10rem 0",
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

const cardContent = [
  {
    id: 1,
    title: "Convert",
    subTitle:
      "Keep your review content fresh with unlimited automated review invitations",
    describe:
      "Make sure new prospects find fresh and trustworthy reviews about your business to support decision-making.",
    illustrate:
      "Increase onsite conversions throughout the customer journey with our extensive library of Service Review TrustBoxes.",
    feature: ["Targeted TrustBoxes:", "Tagging:"],
    featureText: [
      "Show customers the most relevant reviews with tagged content.",
      "Track KPIs that are important to your business by adding tags to your reviews.",
    ],
  },
  {
    id: 2,
    title: "Invite",
    subTitle:
      "Keep your review content fresh with unlimited automated review invitations",
    describe:
      "Make sure new prospects find fresh and trustworthy reviews about your business to support decision-making.",
    illustrate:
      "Make sure new consumers find fresh reviews. Automatically invite your customers to write reviews after every order to get verified Service, Location, and Product Reviews. Only verified reviews count for Google Seller Ratings.",
    feature: [],
    featureText: [],
  },

  {
    id: 3,
    title: "Enhance",
    subTitle: "Strengthen your online presence",
    describe:
      "Curate your Trustpilot Company Profile Page through adding your brand logo and adding authentic content that will enhance your online reputation.",
    illustrate:
      "Trustpilot Company Profile Pages typically rank in top search results for brands. A well-curated page packed with authentic content will enhance your online reputation.",
    feature: [
      "Customized Review Invitations:",
      "Promotion Box:",
      "Guarantee Section:",
      "Facebook Like Box:",
      "Advanced Analytics:",
      "Export Review Data: "
    ],
    featureText: [
      "Get verified reviews with branded email invites.",
      "Add unique promotions to your Company Profile Page.",
      "Highlight your unique story on your Company Profile Page.",
      "Collect “Likes” with a box on your Company Profile Page.",
      "Gain additional insight on organic reach, invitation conversions and tags.",
      "Download a .csv file for off platform analysis."
    ],
  },
  {
    id: 4,
    title: "Connect",
    subTitle: "APIs help you shine in your own way",
    describe:
      "Offer your customers a more branded and seamless review experience, building review collection into the checkout flow of your website.",
    illustrate:
      "Want to create something unique that makes your review stars and content shine even more? Through our APIs, you can customise how your Trustpilot reviews look on your site.",
    feature: ["API:"],
    featureText: [
      "Send invitations, get invitation links, and easily integrate with many of the tools in your tech stack.",
    ],
  },
  {
    id: 5,
    title: "Report",
    subTitle: "Strengthen your online presence",
    describe:
      "Curate your Trustpilot Company Profile Page through adding your brand logo and adding authentic content that will enhance your online reputation.",
    illustrate:"",
      feature: ["Targeted TrustBoxes:", "Tagging:"],
    featureText: [
      "Show customers the most relevant reviews with tagged content.",
      "Track KPIs that are important to your business by adding tags to your reviews.",
    ],
  },
  {
    id: 6,
    title: "Ecommerce Setup",
    subTitle: "Take advantage of abilities",
    describe:
      "Curate your Trustpilot Company Profile Page through adding your brand logo and adding authentic content that will enhance your online reputation.",
   illustrate:"",
      feature: ["Targeted TrustBoxes:", "Tagging:"],
    featureText: [
      "Show customers the most relevant reviews with tagged content.",
      "Track KPIs that are important to your business by adding tags to your reviews.",
    ],
  },
  ,
  {
    id: 7,
    title: "Product Reviews",
    subTitle: "Display feedback on individual product lines",
    describe:
      "Showcase Product Reviews in ads and on your website to make buying decisions easier for prospects considering your products.",
   illustrate:"Add Product Reviews to your website and ads to make buying decisions easier for your consumers. Improve SEO — more unique content, more keywords — and help people shop with confidence.",
      feature: ["Product TrustBoxes:", "Rich Snippets & Content:","Import 3rd party product reviews:"],
    featureText: [
      "Easily add product reviews on your website.",
      "Add stars and content to appear in product search results.",
      "No need to start from zero -- import your existing reviews."
    ],
  },
  ,
  {
    id: 8,
    title: "Location Reviews",
    subTitle: "Manage reviews for stores and branches",
    describe:
      "Gain greater understanding of customer satisfaction at a branch level and stand out in local search as you display relevant reviews.",
   illustrate:"Stand out in local search as you manage and display content on each of your sites, plus understand customer satisfaction at a local level.",
      feature: ["User Management:", "Location Review TrustBoxes:","Compare store performance: "],
    featureText: [
      "Control which features store or branch managers can access in the platform.",
      " Manage reviews for all your locations to improve trust and conversions.",
      "See how each location performs with data and insights displayed in a single dashboard"
    ],
  },
  ,
  {
    id: 9,
    title: "Insights",
    subTitle: "Create better experiences with data",
    describe:
      "With our artificial intelligence doing the heavy lifting, dive deep into your customer feedback to see trends and insights within your reviews.",
   illustrate:"With our artificial intelligence doing the heavy lifting, dive deep into your customer feedback to see trends and insights within your reviews.",
      feature: ["Topics:", "Sentiment Analysis: ","Emerging Trends ","Heatmap: "],
    featureText: [
      "Review content is automatically sorted into pre-defined or custom topics.",
      " Highlights and identifies review content as positive, negative, or neutral sentiment.",
      "Monitor changes in sentiment over time to proactively spot trends as they arise.",
      "A birds-eye view of performance for a clear directive on the most impactful areas for your business."
    ],
  },
  ,
  {
    id: 10,
    title: "Support",
    subTitle: "Master our platform with the help from experts",
    describe:
      "Work directly with our success managers, implementation experts and support engineers to grow your brand trust quicker.",
   illustrate:"Work directly with our success managers, implementation experts and support engineers to grow your brand trust quicker. Also access:",
      feature: [],
    featureText: [
      "Dedicated Customer Success Manager.",
      " Best practice consultation.",
      "Reputation management advice.",
  
    ],
  },
];
const Services = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container className={classes.services}>
        <PricingPlan />
        <Box className={classes.itemzWrapper}>
          <Typography
            variant="h1"
            component={"div"}
            style={{
              width: "70%",
              fontWeight: "600",
              textAlign: "center",
              fontSize: "5rem",
              padding: "6rem 0",
              borderTop: "1px solid #ccc",
            }}
          >
            Find more about our services
          </Typography>

          <Box className={classes.itemzdetail}>
            {cardContent.map((item) => {
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
