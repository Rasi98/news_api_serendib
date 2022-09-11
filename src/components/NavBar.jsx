import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function NavBar() {
  return (
    <AppBar
      position="relative"
      sx={{ borderRadius: "7px", backgroundColor: "#CB4335" }}
    >
      <Toolbar>
        <Avatar
          alt="USA flag"
          sx={{ mr: 2 }}
          src="https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg?w=2000"
        />
        <Typography
          className="page-title"
          variant="h4"
          color="inherit"
          noWrap
          fontWeight="bold"
        >
          US News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
