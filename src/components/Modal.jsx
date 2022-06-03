import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import siteConfiguration from "../siteConfiguration";
import { List, ListItemText } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 950,
  minHeight: 500,
  bgcolor: "background.paper",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)",
  p: 8,
};

export default function BasicModal({
  title,
  subTitle,
  text,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  featureText1,
  featureText2,
  featureText3,
  featureText4,
  featureText5,
  featureText6,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ color: siteConfiguration.primaryGreen }}
      >
        Learn more
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ zIndex: 10000000000000 }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="div"
            style={{ fontWeight: "600", color: siteConfiguration.primaryGreen }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              borderBottom: "solid 1px #ccc ",
              paddingBottom: "1rem",
              color: siteConfiguration.primaryGray,
              fontWeight: "300",
            }}
          >
            {subTitle}
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
              color: siteConfiguration.secondaryBlack,
              fontWeight: "400",
            }}
          >
            {text}
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
              color: siteConfiguration.secondaryBlack,
              fontWeight: "400",
            }}
          >
            {(feature1 || featureText1) && " Features include:"}
            <ul style={{ lineHeight: "3rem" }}>
              {(feature1 || featureText1) && (
                <li>
                  <strong>{feature1}</strong>
                  {featureText1.toLowerCase()}
                </li>
              )}
              {(feature2 || featureText2) && (
                <li>
                  <strong>{feature2}</strong>
                  {featureText2.toLowerCase()}
                </li>
              )}
              {(feature3 || featureText3) && (
                <li>
                  <strong>{feature3}</strong>
                  {featureText3.toLowerCase()}
                </li>
              )}
              {(feature4 || featureText4) && (
                <li>
                  <strong>{feature4}</strong>
                  {featureText4.toLowerCase()}
                </li>
              )}
              {(feature5 || featureText5) && (
                <li>
                  <strong>{feature5}</strong>
                  {featureText5.toLowerCase()}
                </li>
              )}
              {(feature6 || featureText6) && (
                <li>
                  <strong>{feature6}</strong>
                  {featureText6.toLowerCase()}
                </li>
              )}
            </ul>
          </Typography>

          <Box
            style={{
              width: "100%",
              marginTop: "2rem",
            }}
          >
            <Button
              style={{
                padding: "1.1rem 3.5rem",
                backgroundColor: siteConfiguration.primaryGreen,
                color: siteConfiguration.white,
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
