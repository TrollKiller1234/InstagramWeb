import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Navbar: React.FC = () => {
  return (
    <AppBar 
      position="fixed" 
      color="#FFFFFF" 
      sx={{ top: 'auto', bottom: 0 }} // Position it at the bottom
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Home Icon */}
        <Link href="/" passHref>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>

        {/* SignUp Icon */}
        <Link href="/auth/registracia" passHref>
          <IconButton color="inherit">
            <AppRegistrationIcon />
          </IconButton>
        </Link>

        {/* Add Post Icon */}
        <Link href="/pridat" passHref>
          <IconButton color="inherit">
            <AddCircleOutlineIcon />
          </IconButton>
        </Link>

        {/* SignIn Icon */}
        <Link href="/auth/prihlasenie" passHref>
          <IconButton color="inherit">
            <LoginIcon />
          </IconButton>
        </Link>

        {/* Profile Icon */}
        <Link href="/profil" passHref>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
