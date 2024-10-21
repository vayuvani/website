import React, {useState} from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DynamicStatusDisplay from './DynamicStatusDisplay';
import {styled} from '@mui/system';

const ResponsiveBox = styled(Box)(({theme}) => ({
  position: 'relative',
  margin: 'auto',
  maxWidth: '400px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const CircleAnnotation = styled('div')(({theme, top, left, size}) => ({
  position: 'absolute',
  top: `${top}%`,
  left: `${left}%`,
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: '50%',
  border: '2px solid rgba(255, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'rgba(255, 0, 0, 0.8)',
  fontWeight: 'bold',
  zIndex: 10,
  [theme.breakpoints.down('sm')]: {
    top: `${top * 0.8}%`,
    left: `${left * 0.8}%`,
    width: `${size * 0.8}px`,
    height: `${size * 0.8}px`,
    fontSize: '0.8rem',
  },
}));

const FAQ = () => {
  const [showAnnotations, setShowAnnotations] = useState(true);

  return (
      <Box sx={{maxWidth: 800, margin: 'auto', pt: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h6">What does the VayuVani display
              show?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              The VayuVani display provides essential information about your
              ground station's status and operation. Here's a breakdown of each
              element:
            </Typography>
            <ResponsiveBox>
              <FormControlLabel
                  control={
                    <Switch
                        checked={showAnnotations}
                        onChange={(e) => setShowAnnotations(e.target.checked)}
                    />
                  }
                  label="Show Annotations"
              />
              <DynamicStatusDisplay
                  gsIp="192.168.0.108"
                  status="RECEIVING"
                  port="5688"
                  gssIp="192.168.0.190"
                  line1="Reconfigure success"
                  line2="Radio @ 436.28"
                  maxWidth="100%"
                  showAnnotations={showAnnotations}
              />
            </ResponsiveBox>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Groundstation IP (GS)"
                    secondary="This is the IP address of your VayuVani groundstation on your local network. You'll use this to connect to and configure your station."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="2. Status (S)"
                    secondary={
                      <>
                        Internally, your VayuVani groundstation maintains a
                        state machine. The status S is the
                        the current status of your groundstation. It can be in any one of the state:
                        <br/>
                        <br/>
                        <b>IDLE</b>: Idle state, waiting for instructions to be sent by
                        Groundstation Server (GSS)
                        <br/>
                        <b>RECEIVING</b>: The GS is now turned on in receiving mode and ready to receive packets.
                        <br/>
                        <b>TRANSMITTING</b>: The GS is in transmit mode. It can transmit packets at the tuned configuration.
                        <br/>
                          <b>COOLDOWN</b>: It is the intermediate phase where the GS is cooling down before it would restart transmitting.

                      </>
                    }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="3. Protocol Port (C)"
                    secondary="The internal protocol port used for communication between Groundstation GS and Groundstation Server (GSS)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="4. Ground Station Server IP (GSS)"
                    secondary="This is the IP address of the computer running the VayuVani app, which manages your Groundstation. Follow the instructions on getting-started to find out your GSS IP"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="5,6 Status Lines"
                    secondary="The status lines provide the contextual status. 5. is the primary, with 6. being the secondary status line."
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h6">How do I update my VayuVani
              firmware?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>To update your VayuVani firmware, follow these
              steps:</Typography>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Visit the VayuVani Installer website: https://installer.vayuvani.com"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="2. Connect your ground station hardware to your computer"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="3. Follow the on-screen instructions to download and flash the latest firmware"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="4. After flashing, reconnect your ground station to your local network"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="5. Update your VayuVani app to the latest version for full compatibility"/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h6">What should I do if I'm not receiving any
              packets?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>If you're not receiving packets, try the following
              troubleshooting steps:</Typography>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Verify that your antenna is properly connected and oriented"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="2. Check that you're tuned to the correct frequency for the satellite you're trying to receive"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="3. Ensure there are no physical obstructions blocking your antenna's line of sight"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="4. Confirm that the satellite you're tracking is actually passing overhead at the expected time"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="5. Try adjusting the gain settings in the VayuVani app"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="6. Restart both your ground station hardware and the VayuVani app"/>
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="7. If problems persist, check the VayuVani community forums or Discord for additional support"/>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
  );
};

export default FAQ;
