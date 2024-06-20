import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// import { IconListCheck, IconMail, IconUser } from '@tabler/icons';
import {
  ListCheck as IconListCheck,
  Mail as IconMail,
  User as IconUser,
} from "tabler-icons-react";

import ProfileImg from "src/assets/images/profile/user-1.jpg";
import { saveLocalStorage } from "src/funAuth/localStorage";
import { Label } from "@mui/icons-material";

const Profile = (props) => {
  let { icon, name } = props;
  name = "ABC";
  const navigate = useNavigate();

  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const clickLogout = () => {
    saveLocalStorage("loginStatus", false);
    navigate("/login");
  };

  return (
    <Box
      // width="200px"
      p={0}
      sx={{ width:"200px", border: "1px solid #B9B7B7", borderRadius: "10px", marginTop:"8px", backgroundColor:"white" }}
      // onClick={handleClick2}
    >
      <div>
        <Button onClick={handleClick2} sx={{width:"100%"}} style={{justifyContent: "flex-start", padding: "0px"}}>
        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          
          sx={{
            ...(typeof anchorEl2 === "object" && {
              color: "primary.main",
            }),padding:"8px"
          }}
          
          // onClick={handleClick2}
        >
          <Avatar
            src={ProfileImg}
            alt={ProfileImg}
            sx={{
              width: 35,
              height: 35,
            }}
          />
        </IconButton>
        <Typography fontWeight="500" variant="h5">
            {name}
          </Typography>
        </Button>
      </div>
      {/* <Label>{name}</Label>  */}
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem> */}
        <Box mt={1} py={1} px={2}>
          {/* <Button to="/auth/login" variant="outlined" color="primary" component={Link} fullWidth>
            Logout
          </Button> */}
          <Button
            variant="outlined"
            color="danger"
            fullWidth
            onClick={clickLogout}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
