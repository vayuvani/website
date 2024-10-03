import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, AppBar, Toolbar, Button, Container, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '@mui/icons-material/Chat'; // Using Chat icon as a stand-in for Discord
import VayuVaniTitle from './VayuVaniTitle';
import Installer from './Installer';
import About from './About';

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
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
          }}>
            <AppBar position="static" color="primary" elevation={0}>
              <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: -2 }}>
                    <VayuVaniTitle />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">About</Button>
                    <Button color="inherit" component={Link} to="/getting-started">Getting Started</Button>
                    <Button color="inherit" component={Link} to="/groundstation-map">Groundstation Mesh</Button>
                    <Button color="inherit" component={Link} to="/live-packets">Live Packets</Button>
                  </Box>
                  <Box>
                    <IconButton color="inherit" href="https://discord.gg/Gr87RuqsEX" target="_blank" rel="noopener noreferrer">
                      <DiscordIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://x.com/this_is_tckb" target="_blank" rel="noopener noreferrer">
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>

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
                <Route path="/overview" element={<div>Under construction..</div>} />
                <Route path="/getting-started" element={<div>Under construction..</div>} />
                <Route path="/groundstation-map" element={<div>Under construction..</div>} />
                <Route path="/live-packets" element={<div>Under construction..</div>} />
              </Routes>
            </Box>

            <Box component="footer" sx={{
              bgcolor: 'primary.main',
              color: 'white',
              py: 2,
              px: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center',
              mt: 'auto',
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
