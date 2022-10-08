import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import WaterLogo from "./logo512.png"

const pages = ['orders'];
const settings = ['sign in', "sign up"];
const settings_link = {'sign in': "signin", "sign up": "signup"};

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signoutclick  = () => {
    console.log(props.props)
    // console.log(props.logout())
    props.props()
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#29465B",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <NavLink to = "/" style={{ textDecoration: 'none' }}>
            <span className='text-white my-2'>TestGO</span>
          </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <NavLink to = "/"> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
            LOGO
          </Typography>
          {/* </NavLink> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to = {`/${page}`} style={{ textDecoration: 'none' }}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , textDecoration: 'none'}}
              >
                {page}
              
              </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <img
                className="rounded-circle"
                width = "60"
                alt="hero"
                src= {WaterLogo}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              {/* {settings.map((setting) => (
              <MenuItem key={setting} onClick={props.props}>
              <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
              ))} */}
              {settings.map((setting) => (
                <NavLink to = {`/${settings_link[setting]}`} style={{ textDecoration: 'none' }}>
                <Button
                  key={setting}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block'}}
                >
                  {setting}
                
                </Button>
                </NavLink>
                ))}
                <NavLink to = {`/`} style={{ textDecoration: 'none' }}>
                <Button
                  key={"/"}
                  onClick={signoutclick}
                  sx={{ my: 2, color: 'white', display: 'block'}}
                >
                  {"sign out"}
                
                </Button>
                </NavLink>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;