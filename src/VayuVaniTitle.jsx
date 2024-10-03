import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import AirIcon from '@mui/icons-material/Air';

const waveAnimation = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-5deg); }
  75% { transform: translateY(5px) rotate(5deg); }
`;

const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
`;

const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '15px',
});

const AnimatedLoRaIcon = styled(WifiTetheringIcon)({
  fontSize: '2.5rem',
  color: '#4fc3f7',
  animation: `${waveAnimation} 3s infinite ease-in-out`,
});

const AnimatedWindIcon = styled(AirIcon)({
  fontSize: '1.5rem',
  color: '#81d4fa',
  marginTop: '-10px',
  animation: `${pulseAnimation} 2s infinite ease-in-out`,
});

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  color: 'white',
  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  letterSpacing: '0.02em',
  lineHeight: 1.2,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: '#bbd2f3',
  fontWeight: 400,
}));

function VayuVaniTitle() {
  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LogoContainer>
          <AnimatedLoRaIcon />
          <AnimatedWindIcon />
        </LogoContainer>
        <TextContainer>
          <StyledTypography variant="h5">
            VayuVani
          </StyledTypography>
        </TextContainer>
      </Box>
  );
}

export default VayuVaniTitle;
