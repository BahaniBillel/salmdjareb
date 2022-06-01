import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import siteConfiguration from '../siteConfiguration';
import { List, ListItemText } from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  minHeight: 500,
  bgcolor: 'background.paper',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,.2) ,0px 1px 1px 0px rgba(0,0,0,.14),0px 1px 3px 0px rgba(0,0,0,.12)',
  p: 8,
};

export default function BasicModal({ title, subTitle, text, feature }) {
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
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="div"
            style={{ fontWeight: '600', color: siteConfiguration.primaryGreen }}
          >
            Connect {title}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            style={{
              borderBottom: 'solid 1px #ccc ',
              paddingBottom: '1rem',
              color: siteConfiguration.primaryGray,
              fontWeight: '300',
            }}
          >
            APIs help you shine in your own way {subTitle}
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              marginTop: '1.5rem',
              fontSize: '1.3rem',
              color: siteConfiguration.secondaryBlack,
              fontWeight: '400',
            }}
          >
            {text}
            Want to create something unique that makes your review stars and
            content shine even more? Through our APIs, you can customise how
            your Trustpilot reviews look on your site.
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              marginTop: '1.5rem',
              fontSize: '1.3rem',
              color: siteConfiguration.secondaryBlack,
              fontWeight: '400',
            }}
          >
            Features include:
            {feature}
            <ul>
              <li>
                <strong>API: </strong>
                Send invitations, get invitation links, and easily integrate
                with many of the tools in your tech stack.
              </li>
            </ul>
          </Typography>

          <Box
            style={{
              width: '100%',
              marginTop: '4rem',
            }}
          >
            <Button
              style={{
                padding: '1.1rem 3.5rem',
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
