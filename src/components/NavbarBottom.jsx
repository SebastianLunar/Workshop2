import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CottageIcon from "@mui/icons-material/Cottage";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from "react-router-dom";

export const NavbarBottom = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box style={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={
            <NavLink to="/home" style={{ color: "var(--white)" }}>
              <CottageIcon />
            </NavLink>
          }
        />
        <BottomNavigationAction icon={<SearchIcon />} />
        <BottomNavigationAction icon={<AddIcon />} />
        <BottomNavigationAction icon={<NotificationsIcon />} />
      </BottomNavigation>
    </Box>
  );
};
