import React, { useState, useEffect } from 'react';
import { Typography, Box, Select, MenuItem, Button, Paper } from '@mui/material';

function Installer() {
  const [firmwareVersions, setFirmwareVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('');

  useEffect(() => {
    // Simulating loading firmware versions
    setTimeout(() => {
      setFirmwareVersions(['v1.0.0', 'v1.1.0', 'v1.2.0']);
    }, 1000);
  }, []);

  return (
      <Box sx={{ width: '100%', maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h4" gutterBottom>Under construction...</Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" gutterBottom></Typography>
        </Box>
      </Box>
  );
}

export default Installer;
