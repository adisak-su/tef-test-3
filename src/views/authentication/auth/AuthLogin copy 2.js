import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

import CustomTextField from "../../../components/forms/theme-elements/CustomTextField";
import { saveLocalStorage } from "src/funAuth/localStorage";

import SweetAlert2 from "react-sweetalert2";
import swal from "sweetalert";

const AuthLogin = ({ title, subtitle, subtext }) => {
  // SweetAlert2("Good job!", "You clicked the button!", "success");
  // swal({
  //   title: "Deleted!",
  //   text: "Your row has been deleted.",
  //   type: "success",
  //   timer: 3000
  //   });
  //   function () {
  //      location.reload(true);
  //      tr.hide();
  //   };
  const [username, setUsername] = useState("John");
  const [password, setPassword] = useState("123");

  const onChangeUsername = (event) => {
    console.log(event.tar);
  };
  const handleUsername = (event) => {
    const value = event.currentTarget.value;
    setUsername(value);
  };

  const handlePassword = (event) => {
    const value = event.currentTarget.value;
    setPassword(value);
  };
  const navigate = useNavigate();

  const checkLogin = (event) => {
    event.preventDefault();
    saveLocalStorage("loginStatus", true);
    navigate("/");
    // fetch("http://localhost:3333/users/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },

    //   //make sure to serialize your JSON body
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(JSON.stringify(result));
    //     if (result.message === "SUCCESS") {
    //       saveLocalStorage("loginStatus", true);
    //       saveLocalStorage("loginData", result);
    //       saveLocalStorage("access_token", result.access_token);
    //       saveLocalStorage("refresh_token", result.refresh_token);
    //       saveLocalStorage("user", result.user);
    //       swal(
    //         {
    //           title: "Good job!!",
    //           text: "Login success.",
    //           icon: "success",
    //           timer: 1000,
    //           closeOnClickOutside: false,
    //         }
    //       );
    //       navigate("/");
    //     } else {
    //       swal({
    //         title: "Bad job!",
    //         text: "Please check your login information.",
    //         icon: "error",
    //         timer: 2000,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //   swal("Bad job!", "Please check your login information.", "error",{timer:2000});
    //   });
  };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <form onSubmit={checkLogin}>
        <Stack>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="username"
              mb="5px"
            >
              Username
            </Typography>
            <CustomTextField
              id="username"
              variant="outlined"
              value={username}
              onChange={handleUsername}
              fullWidth
            />
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <CustomTextField
              id="password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePassword}
              fullWidth
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          ></Stack>
        </Stack>
        <Box>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            // component={Link}
            // to="/"
            type="submit"
            // onClick={checkLogin}
          >
            Sign In
          </Button>
        </Box>
        {subtitle}
      </form>
    </>
  );
};

export default AuthLogin;
