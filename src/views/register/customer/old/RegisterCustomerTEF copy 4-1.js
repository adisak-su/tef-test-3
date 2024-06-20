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
// import genGridItems from "./gridItems";
// import TEF_Logo from "src/assets/images/logos/TEF_Logo.png";
// import TEFLogo from "./logo";

import { validEmail, validPassword } from "../Regex.jsx";
import { v4 as uuidv4 } from "uuid";
const RegisterCustomerTEF = () => {
  // const genGridGroup = (props) => {
  //   console.log("props.data");
  //   console.log(props.data);
  //   return (
  //     <>
  //       {/* { props.data.forEach((item)=>{genText1(item)})} */}
  //       {props.map((item) => genGridItem(item))}
  //     </>
  //   );
  // };



  // const genGridItem = (props) => {
  //   // console.log(props);
  //   const { id, type, value, helperText, onChange } = props;
  //   return (
  //     <TextField
  //       key={id}
  //       id={id}
  //       type={type}
  //       // value={value}
  //       variant="outlined"
  //       error={helperText !== ""}
  //       helperText={helperText}
  //       onChange={onChange}
  //     />
  //   );
  // };
  const genGridGroup = (props) => {
    return (
      <Grid
        // key={uuidv4()}
        container
        spacing={1}
        sx={{ width: "100%", marginTop: "20px" }}
      >
        {props.map((item) => genGridItem(item))}
      </Grid>
    );
  };
  
  const genGridItem = (props) => {
    // console.log(props);
    // const { id, type, value, helperText, onChange } = props;
    const { id, type, value, label, placeholder, helperText, onChange } = props;
    return (
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <Typography fontWeight="700" variant="h7" pb={1}>
            {label}
          </Typography>
          <TextField
            // key={uuidv4()}
            id={id}
            type={type}
            variant="outlined"
            // value={value}
            error={helperText !== ""}
            helperText={helperText}
            placeholder={placeholder}
            onChange={onChange}
          />
        </FormControl>
      </Grid>
    );
  };

  const [HelperTextField1, setHelperTextField1] = useState("");
  const [HelperTextField2, setHelperTextField2] = useState("");
  const [HelperTextField3, setHelperTextField3] = useState("");
  const [HelperTextField4, setHelperTextField4] = useState("");
  const [HelperTextField5, setHelperTextField5] = useState("");

  const setHelpers = [
    setHelperTextField1,
    setHelperTextField2,
    setHelperTextField3,
    setHelperTextField4,
    setHelperTextField5,
  ];

  const onFieldChange = (event) => {
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
  };

  const initData = [
    {
      id: "txt1",
      type: "text",
      value: "",
      label: "ชื่อสโมสร",
      placeholder: "ภาษาไทย",
      helperText: HelperTextField1,
      onChange: onFieldChange,
    },
    {
      id: "txt2",
      type: "text",
      value: "",
      label: "Club Name",
      placeholder: "ภาษาอังกฤษ",
      helperText: HelperTextField2,
      onChange: onFieldChange,
    },
    {
      id: "txt3",
      type: "text",
      value: "",
      label: "Abbreviation of Club",
      placeholder: "ชื่อย่อภาษาอังกฤษ",
      helperText: HelperTextField3,
      onChange: onFieldChange,
    },
    {
      id: "txt4",
      type: "text",
      value: "",
      label: "Address",
      placeholder: "ที่อยู่",
      helperText: HelperTextField4,
      onChange: onFieldChange,
    },
    {
      id: "txt5",
      type: "number",
      value: "",
      label: "Post Code",
      placeholder: "รหัสไปรษณีย์",
      helperText: HelperTextField5,
      onChange: onFieldChange,
    },

    // {
    //   id: "1",
    //   type: "text",
    //   value: "",
    //   helperText: HelperTextField1,
    //   onChange: onFieldChange,
    // },
    // {
    //   id: "2",
    //   type: "text",
    //   value: "",
    //   helperText: HelperTextField2,
    //   onChange: onFieldChange,
    // },
    // {
    //   id: "3",
    //   type: "text",
    //   value: "",
    //   helperText: HelperTextField3,
    //   onChange: onFieldChange,
    // },
    // {
    //   id: "4",
    //   type: "text",
    //   value: "",
    //   helperText: HelperTextField4,
    //   onChange: onFieldChange,
    // },
    // {
    //   id: "5",
    //   type: "text",
    //   value: "",
    //   helperText: HelperTextField5,
    //   onChange: onFieldChange,
    // },
  ];

  const a = {
    id: "5",
    type: "text",
    value: "",
    helperText: HelperTextField5,
    onChange: onFieldChange,
  };

  const [data, setData] = useState(initData);

  const validateData = (event) => {
    event.preventDefault();
    console.log("Data is ");
    console.table(data);
    // setHelperTextField1("Error");

    data.forEach((element, index) => {
      if (element.value === "") {
        // setHelpers[index]("Error")
        // alert(index)
        setHelpers[index]("Error");
      } else setHelpers[index]("");
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
                  {genGridGroup(initData)}
                  {/* initData */}
                  {/* {data.map((item) => genText1(item))}
                  {genText1({
                    id: "3",
                    type: "text",
                    value: "abc",
                    helperText: HelperTextField3,
                    onChange: onFieldChange,
                  })}
                  {genText1({
                    id: "4",
                    type: "text",
                    value: "abc",
                    helperText: HelperTextField4,
                    onChange: onFieldChange,
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
