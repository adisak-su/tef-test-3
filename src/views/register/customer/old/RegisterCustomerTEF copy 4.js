import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

// components
import PageContainer from "src/components/container/PageContainer";
import Logo from "src/layouts/full/shared/logo/Logo";
// import TEF_Logo from "src/layouts/full/shared/logo/LogoTEF";
import logo_TEF from "src/assets/images/logos/TEF_Logo.png";
import logo_TEF_Text from "src/assets/images/logos/TEF_Logo_text.png";
import genGridItems from "../gridItems";
// import TEF_Logo from "src/assets/images/logos/TEF_Logo.png";
// import TEFLogo from "./logo";

import { validEmail, validPassword } from "../Regex.jsx";

const RegisterCustomerTEF = () => {
  const genText = (props) => {
    console.log("props.data");
    console.log(props.data);
    return (
      <>
        {/* { props.data.forEach((item)=>{genText1(item)})} */}
        {props.map((item) => genText1(item))}
      </>
    );
  };

  const genText1 = (props) => {
    console.log(props);
    const { id, type, value, helperText, onChange } = props;
    console.log(type);
    return (
      <TextField
        key={id}
        id={id}
        type={type}
        // value={value}
        variant="outlined"
        error={helperText !== ""}
        helperText={helperText}
        onChange={onChange}
      />
    );
  };

  const [txt, setTxt] = useState("");
  const [helperTextTest1, setHelp1] = useState("");
  const [helperTextTest2, setHelp2] = useState("");
  const [helperTextTest3, setHelp3] = useState("");
  const [helperTextTest4, setHelp4] = useState("");
  const [helperTextTest5, setHelp5] = useState("");

  const arrHelper = [setHelp1, setHelp2, setHelp3, setHelp4, setHelp5];

  const onChangeTest = (event) => {
    // alert(1)
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const type = event.currentTarget.type;

    const tmpData = [...data];
    const elem = tmpData.find((item) => item.id === id);
    if (elem) {
      elem.value = value;
      setData(tmpData);
    }

    // setHelp1("Error");
    // setHelp3("Error");
    // setHelp4("Error");
    // setHelp5("Error");
    // setHelp1("Error");
  };

  const initData = [
    {
      id: "1",
      type: "text",
      value: "",
      helperText: helperTextTest1,
      onChange: onChangeTest,
    },
    {
      id: "2",
      type: "text",
      value: "",
      helperText: helperTextTest2,
      onChange: onChangeTest,
    },
    {
      id: "3",
      type: "text",
      value: "",
      helperText: helperTextTest3,
      onChange: onChangeTest,
    },
    {
      id: "4",
      type: "text",
      value: "",
      helperText: helperTextTest4,
      onChange: onChangeTest,
    },
    {
      id: "5",
      type: "text",
      value: "",
      helperText: helperTextTest5,
      onChange: onChangeTest,
    },
  ];

  const a = {
    id: "5",
    type: "text",
    value: "",
    helperText: helperTextTest5,
    onChange: onChangeTest,
  };

  const [data, setData] = useState(initData);

  const validateData = (event) => {
    event.preventDefault();
    console.log("Data is ");
    console.table(data);
    // setHelp1("Error");

    data.forEach((element, index) => {
      if (element.value === "") {
        // arrHelper[index]("Error")
        // alert(index)
        arrHelper[index]("Error");
      }
      else
        arrHelper[index]("");

    });

    console.log("Data is ");
    console.table(data);
  };
  useEffect(() => {
    console.table(data);
  }, [data]);

  return (
    <PageContainer
      title="Login"
      description="this is Login page"
      // background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
    >
      <Box>
        <Grid
          container
          // spacing={0}
          justifyContent="center"
          sx={{ height: "100vh", width: "100vw" }}
        >
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "1400px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <FormControl fullWidth>
                  <Typography fontWeight="700" variant="h7" pb={1}>
                    {"AAAA"}
                  </Typography>
                  {/* {genText({data})} */}
                  {genText( initData )}
                  {/* initData */}
                  {/* {data.map((item) => genText1(item))}
                  {genText1({
                    id: "3",
                    type: "text",
                    value: "abc",
                    helperText: helperTextTest3,
                    onChange: onChangeTest,
                  })}
                  {genText1({
                    id: "4",
                    type: "text",
                    value: "abc",
                    helperText: helperTextTest4,
                    onChange: onChangeTest,
                  })}
                  {genText1(a)} */}
                </FormControl>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  // type="submit"
                  onClick={validateData}
                >
                  Submit
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default RegisterCustomerTEF;
