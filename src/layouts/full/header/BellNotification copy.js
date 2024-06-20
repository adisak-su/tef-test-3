import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Badge, Button } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { saveLocalStorage, getLocalStorage } from "src/funAuth/localStorage";

const BellNotification = () => {
  const navigate = useNavigate();

  const clickNotification = () => {
    // saveLocalStorage("loginStatus", false);
    // navigate("/login");
    alert("clickNotification");
  };

  return (
    <>
      <Box
        sx={{
          padding: "0px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#E9E8E8",
          borderRadius: "8px"

        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color= "primary"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
      <Button
        sx={{ backgroundColor: "#E9E8E8", padding: "0px" }}
        onClick={clickNotification}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Button>
      {/* <Box sx={{backgroundColor:"#E9E8E8"}}
      onClick={clickNotification}
    >
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Box> */}
    </>
  );
};

export default BellNotification;
