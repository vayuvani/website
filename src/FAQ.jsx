import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DynamicStatusDisplay from './DynamicStatusDisplay';
const CircleAnnotation = ({ top, left, size, label }) => (
    <div style={{
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      border: '2px solid red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'red',
      fontWeight: 'bold',
      zIndex: 10,
    }}>
      {label}
    </div>
);

const FAQ = () => {
  return (
      <Box sx={{ maxWidth: 800, margin: 'auto', pt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">What does the VayuVani display show?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              The VayuVani display provides essential information about your ground station's status and operation. Here's a breakdown of each element:
            </Typography>
            <Box sx={{ position: 'relative', margin: 'auto' }}>
              <DynamicStatusDisplay
                  gsIp="192.168.0.108"
                  status="RECEIVING"
                  port="5088"
                  gssIp="192.168.0.190"
                  line1="Reconfigure success"
                  line2="Radio @ 436.28"
                  maxWidth="400px"
              />
              <CircleAnnotation top={8} left={43} size={20} label="1" />
              <CircleAnnotation top={20} left={0} size={20} label="2" />
              <CircleAnnotation top={20} left={43} size={20} label="3" />
              <CircleAnnotation top={34} left={43} size={20} label="4" />
              <CircleAnnotation top={55} left={43} size={20} label="5" />
              <CircleAnnotation top={70} left={43} size={20} label="6" />
            </Box>
            <List>
              <ListItem>

              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Ground Station IP (GS)"
                    secondary="This is the IP address of your VayuVani ground station on your local network. You'll use this to connect to and configure your station."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Status"
                    secondary="The current status of your ground station (e.g., IDLE, RECEIVING)."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Protocol Port"
                    secondary="The port your ground station is using for communication."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Ground Station Server IP (GSS)"
                    secondary="This is the IP address of the computer running the VayuVani app, which manages your ground station."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Status Line 1"
                    secondary="This line provides information about the most recent action or status change."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Status Line 2"
                    secondary="This line typically shows the current radio frequency or other operational details."
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">How do I update my VayuVani firmware?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>To update your VayuVani firmware, follow these steps:</Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Visit the VayuVani Installer website: https://installer.vayuvani.com" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Connect your ground station hardware to your computer" />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. Follow the on-screen instructions to download and flash the latest firmware" />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. After flashing, reconnect your ground station to your local network" />
              </ListItem>
              <ListItem>
                <ListItemText primary="5. Update your VayuVani app to the latest version for full compatibility" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">What should I do if I'm not receiving any packets?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>If you're not receiving packets, try the following troubleshooting steps:</Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Verify that your antenna is properly connected and oriented" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Check that you're tuned to the correct frequency for the satellite you're trying to receive" />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. Ensure there are no physical obstructions blocking your antenna's line of sight" />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. Confirm that the satellite you're tracking is actually passing overhead at the expected time" />
              </ListItem>
              <ListItem>
                <ListItemText primary="5. Try adjusting the gain settings in the VayuVani app" />
              </ListItem>
              <ListItem>
                <ListItemText primary="6. Restart both your ground station hardware and the VayuVani app" />
              </ListItem>
              <ListItem>
                <ListItemText primary="7. If problems persist, check the VayuVani community forums or Discord for additional support" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
  );
};

export default FAQ;
