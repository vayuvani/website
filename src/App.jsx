import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  SvgIcon,
  Menu,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import VayuVaniTitle from './VayuVaniTitle';
import About from './About';
import Overview from "./Overview.jsx";
import GettingStarted from "./GettingStarted.jsx";
import FAQ from "./FAQ.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3c72',
    },
    secondary: {
      main: '#2a5298',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    button: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
    // other typography adjustments as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          fontSize: '1rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          padding: '12px 24px',
        },
      },
    },
  },
});

const DiscordIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
    </SvgIcon>
);

function App() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const openInstaller = () => {
    const url = 'https://installer.vayuvani.com';
    const width = 800;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const popup = window.open(
        url,
        'VayuVani Installer',
        `width=${width},height=${height},left=${left},top=${top}`
    );

    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.open(url, '_blank');
    }
    handleMobileMenuClose();
  };

  const navigationItems = [
    { text: 'About', path: '/' },
    { text: 'Getting Started', path: '/getting-started' },
    { text: 'Installer', action: openInstaller },
    { text: 'Groundstation Mesh', path: '/groundstation-map' },
    { text: 'Live Packets', path: '/live-packets' },
    { text: 'Register Station', path: '/register-station' },
    { text: 'FAQ', path: '/faq' },
  ];
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
            <AppBar position="static" color="primary" elevation={0}>
              <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                      justifyContent: 'space-between',
                      minHeight: { xs: '72px', sm: '80px' },
                    }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: -2 }}>
                    <VayuVaniTitle />
                  </Box>

                  {/* Desktop Navigation with updated styles */}
                  {!isMobile && (
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexGrow: 1,
                        gap: 2, // Add spacing between buttons
                      }}>
                        {navigationItems.map((item) => (
                            item.action ? (
                                <Button
                                    key={item.text}
                                    color="inherit"
                                    onClick={item.action}
                                    data-umami-event={`navigation-${item.text.toLowerCase()}`}
                                    sx={{
                                      fontSize: '1rem',
                                      fontWeight: 500,
                                      textTransform: 'none',
                                    }}
                                >
                                  {item.text}
                                </Button>
                            ) : (
                                <Button
                                    key={item.text}
                                    color="inherit"
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                      fontSize: '1rem',
                                      fontWeight: 500,
                                      textTransform: 'none',
                                    }}
                                >
                                  {item.text}
                                </Button>
                            )
                        ))}
                      </Box>
                  )}

                  {/* Mobile Menu Icon with increased size */}
                  {isMobile && (
                      <IconButton
                          color="inherit"
                          aria-label="menu"
                          onClick={handleMobileMenuOpen}
                          sx={{
                            ml: 'auto',
                            mr: 1,
                            '& .MuiSvgIcon-root': {
                              fontSize: '2rem',
                            }
                          }}
                      >
                        <MenuIcon />
                      </IconButton>
                  )}

                  {/* Social Icons with increased size */}
                  <Box sx={{ '& .MuiSvgIcon-root': { fontSize: '1.75rem' } }}>
                    <IconButton
                        data-umami-event="navigation-discord"
                        color="inherit"
                        href="https://discord.gg/Gr87RuqsEX"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: '12px' }}
                    >
                      <DiscordIcon />
                    </IconButton>
                    <IconButton
                        data-umami-event="navigation-social-media-x"
                        color="inherit"
                        href="https://x.com/this_is_tckb"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: '12px' }}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>

            {/* Mobile Menu with larger text and padding */}
            <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleMobileMenuClose}
                sx={{
                  mt: '45px',
                  '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: '300px',
                  },
                  '& .MuiMenuItem-root': {
                    fontSize: '1.1rem',
                    padding: '16px 24px',
                    minHeight: '48px',
                  }
                }}
            >
              {navigationItems.map((item) => (
                  <MenuItem
                      key={item.text}
                      onClick={() => {
                        handleMobileMenuClose();
                        if (item.action) item.action();
                      }}
                      component={item.path ? Link : 'li'}
                      to={item.path}
                  >
                    {item.text}
                  </MenuItem>
              ))}
            </Menu>

            {/* Main content area */}
            <Box component="main" sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'flex-start',
              overflow: 'auto',
              py: 3,
              px: { xs: 2, sm: 3, md: 4 },
            }}>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/overview" element={<Overview/>} />
                <Route path="/getting-started" element={<GettingStarted/>} />
                <Route path="/groundstation-map" element={<div>Under construction..</div>} />
                <Route path="/live-packets" element={<div>Under construction..</div>} />
                <Route path="/register-station" element={<div>Under construction..</div>} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </Box>

            {/* Footer with increased font size */}
            <Box component="footer" sx={{
              bgcolor: 'primary.main',
              color: 'white',
              py: 2,
              px: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center',
              mt: 'auto',
              fontSize: '1rem',
            }}>
              <Container maxWidth="xl">
                <p>
                  VayuVani is created and maintained by <a href="https://x.com/this_is_tckb" style={{color: '#bbd2f3'}}>Chandra Tungathurthi</a>,
                  part of <a href="https://moonandbeyond.blog/?utm_source=vayuvani-installer&utm_medium=website&utm_campaign=apps" style={{color: '#bbd2f3'}}>moonandbeyond.blog</a>
                </p>
              </Container>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
  );
}

export default App;
