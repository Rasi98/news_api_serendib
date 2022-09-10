import React from "react";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function NavBar() {
    return(
        <AppBar position="relative">
        <Toolbar>
          <Avatar alt="USA flag" sx={{ mr: 2 }} src="https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg?w=2000" />
          <Typography variant="h6" color="inherit" noWrap>
            US News
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
export default NavBar;