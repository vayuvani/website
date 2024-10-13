import React, { useState, useEffect } from 'react';
import {
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  TextField,
  Autocomplete,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import ComputerIcon from '@mui/icons-material/Computer';

const boardTypes = [
  { name: "TTGO LoRa32 V2 (433MHz)", id: "TTGO_V2_LF" },
  { name: "Heltec WiFi LoRa 32 V1 (433MHz)", id: "HELTEC_V1_LF" },
  { name: "Heltec WiFi LoRa 32 V1 (863-928MHz)", id: "HELTEC_V1_HF" },
  { name: "Heltec WiFi LoRa 32 V2 (433MHz)", id: "HELTEC_V2_LF" },
  { name: "Heltec WiFi LoRa 32 V2 (863-928MHz)", id: "HELTEC_V2_HF" },
  { name: "TTGO LoRa32 V1 (433MHz)", id: "TTGO_V1_LF" },
  { name: "TTGO LoRa32 V1 (868-915MHz)", id: "TTGO_V1_HF" },
  { name: "TTGO LoRa32 V2 (868-915MHz)", id: "TTGO_V2_HF" },
  { name: "TTGO LoRa32 V2 (Manually swapped SX1267 to SX1278)", id: "TTGO_V2_LF" },
  { name: "T-BEAM + OLED (433MHz)", id: "TBEAM_OLED_LF" },
  { name: "T-BEAM + OLED (868-915MHz)", id: "TBEAM_OLED_HF" },
  { name: "T-BEAM V1.0 + OLED", id: "TBEAM_OLED_v1_0" },
  { name: "FOSSA 1W Ground Station (433MHz)", id: "ESP32_SX126X_TXC0_1W_LF" },
  { name: "FOSSA 1W Ground Station (868-915MHz)", id: "ESP32_SX126X_TXC0_1W_HF" },
  { name: "ESP32 dev board + SX126X with crystal (Custom build, OLED optional)", id: "ESP32_SX126X_XTAL" },
  { name: "ESP32 dev board + SX126X with TCXO (Custom build, OLED optional)", id: "ESP32_SX126X_TXC0_1" },
  { name: "ESP32 dev board + SX127X (Custom build, OLED optional)", id: "ESP32_SX1278_LF" },
  { name: "Custom Board", id: "CUSTOM" },
];

const radioModules = [
  { value: 0, label: "SX1262" },
  { value: 1, label: "SX1278" },
  { value: 2, label: "SX1268" },
  { value: 3, label: "SX1276" },
  { value: 4, label: "SX1280" },
];

const GettingStarted = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedBoard, setSelectedBoard] = useState(boardTypes[0]);
  const [gsIp, setGsIp] = useState('');
  const [gssIp, setGssIp] = useState('');
  const [boardConfig, setBoardConfig] = useState({
    name: "Custom Board",
    aADDR: 60,
    oSDA: 0,
    oSCL: 0,
    oRST: 0,
    pBut: 0,
    led: 0,
    radio: 1,
    lNSS: 0,
    lDIO0: 0,
    lDIO1: 0,
    lBUSSY: 0,
    lRST: 0,
    lMISO: 0,
    lMOSI: 0,
    lSCK: 0,
    lTCXOV: 0.0
  });

  useEffect(() => {
    if (selectedBoard && selectedBoard.id !== "CUSTOM") {
      setBoardConfig(prevConfig => ({ ...prevConfig, name: selectedBoard.name }));
    }
  }, [selectedBoard]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleBoardChange = (event, newValue) => {
    setSelectedBoard(newValue);
  };

  const handleConfigChange = (event) => {
    const { name, value } = event.target;
    setBoardConfig(prevConfig => ({
      ...prevConfig,
      [name]: name === 'name' ? value : name === 'lTCXOV' ? parseFloat(value) : parseInt(value, 10)
    }));
  };

  const generateBoardTemplate = () => {
    return JSON.stringify(boardConfig);
  };

  const getBoardInfo = () => {
    if (selectedBoard.id === "CUSTOM") {
      return {
        name: "Custom",
        id: "CUSTOM",
        template: generateBoardTemplate()
      };
    }
    return {
      name: selectedBoard.name,
      id: selectedBoard.id,
      template: null
    };
  };

  const ConfigField = ({ name, label, type = "number", tooltip }) => (
      <Grid item xs={6}>
        <Tooltip title={tooltip}>
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={boardConfig[name]}
                onChange={handleConfigChange}
                label={label}
            >
              {[...Array(36)].map((_, i) => (
                  <MenuItem key={i} value={i}>{i}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Tooltip>
      </Grid>
  );

  const steps = [
    {
      label: 'Understanding VayuVani',
      description: (
          <>
            <Typography paragraph>
              VayuVani is an open-source project for creating self-sufficient LoRa ground stations for satellite communication. It prioritizes:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="User autonomy and privacy" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Decentralized communication" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Offline functionality" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Community-driven support" />
              </ListItem>
            </List>
          </>
      ),
    },
    {
      label: 'Gathering your components',
      description: (
          <>
            <Typography paragraph>
              Before you begin setting up your VayuVani ground station, make sure you have the following components:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DeveloperBoardIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                    primary="Board"
                    secondary="A development board such as an ESP32 with integrated LoRa support. You can use pre-loaded boards like Heltec v2, Heltec v3, or LilyGO, which come with the necessary components for quick setup."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SettingsInputAntennaIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                    primary="LoRa Antenna"
                    secondary="Choose an antenna that matches the frequency of your LoRa module (e.g., 868MHz or 915MHz). A well-matched antenna is crucial for optimal performance and communication range."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ComputerIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                    primary="Computer (for App)"
                    secondary="A computer is required for the initial setup and ongoing management of your station. The management application is supported on Linux, macOS, and Windows operating systems."
                />
              </ListItem>
            </List>
            <Typography paragraph>
              Once you have gathered these components, you can proceed with setting up your VayuVani ground station:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Flash the Firmware"
                    secondary={
                      <>
                        Click the "Installer" button or visit <Link href="https://installer.vayuvani.com/" target="_blank" rel="noopener noreferrer">VayuVani Installer</Link> to flash the firmware.
                      </>
                    }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="2. Follow Installer Instructions"
                    secondary="Complete the steps on the installer page, including setting up WiFi."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="3. Groundstation IP"
                    secondary={
                      <>
                        Once the setup is completed and it is connected to the Wifi, you will see the IP of the groundstation.
                        Please enter the IP of the Groundstation (GS) here:
                        <TextField
                            fullWidth
                            label="Groundstation IP"
                            value={gsIp}
                            onChange={(e) => setGsIp(e.target.value)}
                            margin="normal"
                        />
                      </>
                    }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="4. Head on to  Groundstation Config Page"
                    secondary={
                      <>
                        Goto <Link href="http://192.168.4.1./config" target="_blank" rel="noopener noreferrer">Groundstation Config</Link> .
                      </>
                    }
                />
              </ListItem>
            </List>
          </>
      ),
    },
    {
      label: 'Setting up your Groundstation',
      description: (
          <>
            <Typography paragraph>
              Now that you have finally flashed VayuVani and hopefully connected (refer to previous steps if you have issues connecting), your Groundstation is already connected and available on the network.
              Next step, we need to start setting up the Groundstation and then in the next step we will configure the App.
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Identify Board for setup"
                    secondary="Select your board type or configure a custom board for your VayuVani ground station."
                />
              </ListItem>
            </List>

            <Autocomplete
                options={boardTypes}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Select your board" />}
                onChange={handleBoardChange}
                sx={{ mb: 2 }}
                value={selectedBoard}
            />

            {selectedBoard && (
                selectedBoard.id === "CUSTOM" ? (
                    <Accordion defaultExpanded>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Custom Board Configuration</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Board Name"
                                name="name"
                                value={boardConfig.name}
                                onChange={handleConfigChange}
                                type="text"
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <FormControl fullWidth>
                              <InputLabel>Radio Module</InputLabel>
                              <Select
                                  name="radio"
                                  value={boardConfig.radio}
                                  onChange={handleConfigChange}
                              >
                                {radioModules.map((module) => (
                                    <MenuItem key={module.value} value={module.value}>{module.label}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <ConfigField name="aADDR" label="OLED I2C Address" tooltip="I2C address of the OLED display (in decimal format)" />
                          <ConfigField name="oSDA" label="OLED SDA Pin" tooltip="OLED SDA pin" />
                          <ConfigField name="oSCL" label="OLED SCL Pin" tooltip="OLED SCL pin" />
                          <ConfigField name="oRST" label="OLED RST Pin" tooltip="OLED RST pin" />
                          <ConfigField name="pBut" label="User Button Pin" tooltip="GPIO used for the board user button" />
                          <ConfigField name="led" label="LED Pin" tooltip="GPIO used for the main board indicator led" />
                          <ConfigField name="lNSS" label="LoRa NSS Pin" tooltip="LoRa NSS pin" />
                          <ConfigField name="lDIO0" label="LoRa DIO0 Pin" tooltip="LoRa DIO0 pin" />
                          <ConfigField name="lDIO1" label="LoRa DIO1 Pin" tooltip="LoRa DIO1 pin" />
                          <ConfigField name="lBUSSY" label="LoRa BUSY Pin" tooltip="LoRa BUSY pin" />
                          <ConfigField name="lRST" label="LoRa RST Pin" tooltip="LoRa RST pin" />
                          <ConfigField name="lMISO" label="LoRa MISO Pin" tooltip="LoRa MISO pin" />
                          <ConfigField name="lMOSI" label="LoRa MOSI Pin" tooltip="LoRa MOSI pin" />
                          <ConfigField name="lSCK" label="LoRa SCK Pin" tooltip="LoRa SCK pin" />
                          <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="LoRa TCXO Voltage"
                                name="lTCXOV"
                                value={boardConfig.lTCXOV}
                                onChange={handleConfigChange}
                                type="number"
                                InputProps={{
                                  endAdornment: (
                                      <Tooltip title="LoRa TXCO voltage (float value, only used for sx126x modules)">
                                        <IconButton size="small">
                                          <HelpOutlineIcon />
                                        </IconButton>
                                      </Tooltip>
                                  ),
                                }}
                            />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                ) : (
                    <Box sx={{ mt: 2, mb: 2 }}>
                    </Box>
                )
            )}
            <ListItem>
              <ListItemText
                  primary="2. Identify your App IP address (internal)"
                  secondary={
                    <>
                      To find your App IP address:
                      <ol>
                        <li>On Windows: Open Command Prompt and type 'ipconfig'</li>
                        <li>On macOS or Linux: Open Terminal and type 'ifconfig' or 'ip addr'</li>
                      </ol>
                      Look for the IPv4 address under your active network connection.
                      Enter the IP address of the computer where the App will run:
                      <TextField
                          fullWidth
                          label="App IP Address (GSS IP)"
                          value={gssIp}
                          onChange={(e) => setGssIp(e.target.value)}
                          margin="normal"
                      />
                    </>
                  }
              />
            </ListItem>

            <ListItem>
              <ListItemText
                  primary="3. Configure Groundstation"
                  secondary={
                    <>
                      Go to <Link href={`http://${gsIp}/config`} target="_blank" rel="noopener noreferrer">Groundstation Config</Link> and enter the missing info below .
                      Save and restart and you're ready for the App.
                    </>
                  }
              />
            </ListItem>

            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Your Info
              </Typography>
              {
                getBoardInfo().name === "Custom" ? (
                    <>
                      <Typography>
                        Board: <b>Custom</b>
                      </Typography>
                      <Typography>
                        Board type: <b>CUSTOM</b>
                      </Typography>
                      <Typography>
                        Board template: <b>{getBoardInfo().template}</b>
                      </Typography>
                    </>
                ) : (
                    <>
                      <Typography>
                        Board: <b>{getBoardInfo().name}</b>
                      </Typography>
                      <Typography>
                        Board type: <b>{getBoardInfo().id}</b>
                      </Typography>
                    </>
                )
              }
              <Typography>
                Groundstation IP: <b>{gsIp}</b>
              </Typography>
              <Typography>
                Groundstation Server IP: <b>{gssIp}</b>
              </Typography>
            </Box>
          </>
      ),
    },
    {
      label: 'Configure the App',
      description: (
          <>
            <Typography paragraph>
              Configure your VayuVani station:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Connect to WiFi"
                    secondary="Ensure your Groundstation (board) is connected to WiFi as instructed on the installer page."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="2. Download the VayuVani App"
                    secondary={
                      <>
                        Visit the <Link href="https://github.com/vayuvani" target="_blank" rel="noopener noreferrer">VayuVani GitHub page</Link> and download the app for your operating system.
                      </>
                    }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="3. Open the VayuVani App"
                    secondary="Launch the app you've just downloaded."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="4. Register Your Station"
                    secondary="Follow the in-app instructions to register your ground station."
                />
              </ListItem>
              {/* Add more steps as needed, up to around 6 steps */}
            </List>
            {/* Add relevant images for each step */}
          </>
      ),
    },
    {
      label: 'Using VayuVani: Receive Your First Satellite Packet!',
      description: (
          <>
            <Typography paragraph>
              Now that your VayuVani station is set up, let's receive your first satellite packet:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                    primary="1. Set Up Satellite Tracking"
                    secondary="Configure automatic tracking or manually select satellites in the app."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="2. Enable Auto-tuning"
                    secondary="Allow VayuVani to automatically adjust for optimal reception."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="3. Monitor the Packet Dashboard"
                    secondary="Watch for incoming packets on the app's dashboard."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="4. Manual Tuning (Optional)"
                    secondary="Fine-tune your settings for specific satellites if needed."
                />
              </ListItem>
            </List>
            {/* Add images of the app interface, packet dashboard, etc. */}
          </>
      ),
    },
  ];

  return (
      <Box sx={{ maxWidth: 800, margin: 'auto', pt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Getting Started with VayuVani
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography variant="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    {step.description}
                    <Box sx={{ mt: 2 }}>
                      <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </Box>
                  </Box>
                </StepContent>
              </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you're ready to start using VayuVani!</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Restart Guide
              </Button>
            </Paper>
        )}

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>Additional Resources</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Troubleshooting</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText
                      primary="Connection Issues"
                      secondary="Verify power supply and LoRa module connection"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                      primary="Firmware Updates"
                      secondary={
                        <>
                          Check the <Link href="https://github.com/vayuvani" target="_blank" rel="noopener noreferrer">VayuVani GitHub</Link> for updates
                        </>
                      }
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Community & Support</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText
                      primary="Website"
                      secondary={
                        <Link href="https://vayuvani.com" target="_blank" rel="noopener noreferrer">
                          VayuVani Website
                        </Link>
                      }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                      primary="Discord Community"
                      secondary="Join for questions, experiences, and assistance"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                      primary="Blog Post"
                      secondary={
                        <Link href="https://moonandbeyond.blog/join-vayuvani-lora-groundstation/" target="_blank" rel="noopener noreferrer">
                          Comprehensive overview of VayuVani
                        </Link>
                      }
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
  );
};

export default GettingStarted;
