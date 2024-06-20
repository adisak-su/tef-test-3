import React, { useState } from "react";
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
  const [txt, setTxt] = useState("");

  // const validate = (value) => {

  //   if (!validEmail.test(value)) {
  //     alert("setEmailErr");
  //     //  setEmailErr(true);
  //   }
  //   if (!validPassword.test(value)) {
  //     alert("setPwdError");
  //     //  setPwdError(true);
  //   }
  // };

  const handleTxt = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const type = event.currentTarget.type;

    // alert("ID : " + id + " <=> value : " + value)
    // dataBlock1.map((item) =>
    //       item.id === id ? { ...item, value: value } : { ...item }
    // )
    fieldInputBlock1[0].value = value;
    if (value === "") fieldInputBlock1[0].helperText = "aaa";
    else fieldInputBlock1[0].helperText = "";

    setDataBlock1(fieldInputBlock1);
    // dataBlock1[0].value = value;

    // setDataBlock1(
    //   dataBlock1.map((item) =>
    //     item.id === id ? { ...item, value: value } : { ...item }
    //   )
    // );
    console.log("fieldInputBlock1 : ");
    console.log(fieldInputBlock1);
    console.log("dataBlock1 : ");
    console.log(dataBlock1);

    // switch (type) {
    //   case "email":
    //     if (!validEmail.test(value)) {
    //       alert("setEmailErr");
    //       //  setEmailErr(true);
    //     }
    //     break;
    //   case "password":
    //     if (!validPassword.test(value)) {
    //       alert("setPwdError");
    //       //  setEmailErr(true);
    //     }
    //     break;
    // }

    // alert(event.currentTarget.value)
    // setTxt(event.currentTarget.value);
  };

  let fieldInputBlock1 = [
    {
      id: "txt1",
      type: "text",
      value: "",
      label: "ชื่อสโมสร",
      placeholder: "ภาษาไทย",
      helperText: "",
      onChange: handleTxt,
    },
    {
      id: "txt2",
      type: "text",
      value: "",
      label: "Club Name",
      placeholder: "ภาษาอังกฤษ",
      helperText: "",
      onChange: handleTxt,
    },
    {
      id: "txt3",
      type: "text",
      value: "",
      label: "Abbreviation of Club",
      placeholder: "ชื่อย่อภาษาอังกฤษ",
      onChange: handleTxt,
    },
    {
      id: "txt4",
      type: "text",
      value: "",
      label: "Address",
      placeholder: "ที่อยู่",
      onChange: handleTxt,
    },
    {
      id: "txt5",
      type: "number",
      value: "",
      label: "Post Code",
      placeholder: "รหัสไปรษณีย์",
      onChange: handleTxt,
    },
    {
      id: "txt6",
      type: "text",
      value: "",
      label: "Province",
      placeholder: "จังหวัด",
      onChange: handleTxt,
    },
    {
      id: "txt7",
      value: "",
      label: "Google Map",
      placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
      onChange: handleTxt,
    },
    {
      id: "txt8",
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      onChange: handleTxt,
    },
    {
      id: "txt9",
      label: "Phone",
      type: "tel",
      placeholder: "เบอร์ติดต่อ",
      onChange: handleTxt,
    },
  ];

  const fieldInputBlock2 = [
    {
      id: "txt10",
      label: "Google Map",
      placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
      onChange: handleTxt,
    },
    {
      id: "txt11",
      type: "email",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      onChange: handleTxt,
    },
    {
      id: "txt12",
      type: "tel",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      onChange: handleTxt,
    },
  ];

  const fieldInputBlock3 = [
    {
      id: "txt13",
      type: "text",
      label: "First Name",
      placeholder: "ชื่อ",
      onChange: handleTxt,
    },
    {
      id: "txt14",
      type: "text",
      label: "Last Name",
      placeholder: "นามสกุล",
      onChange: handleTxt,
    },
    {
      id: "txt15",
      type: "email",
      label: "E-mail",
      placeholder: "อีเมล",
      onChange: handleTxt,
    },
  ];

  const fieldInputBlock4 = [
    {
      id: "txt16",
      type: "text",
      label: "First Name",
      placeholder: "ชื่อ",
      onChange: handleTxt,
    },
    {
      id: "txt17",
      type: "text",
      label: "Last Name",
      placeholder: "นามสกุล",
      onChange: handleTxt,
    },
    {
      id: "txt18",
      type: "email",
      label: "E-mail",
      placeholder: "อีเมล",
      onChange: handleTxt,
    },
  ];

  const [dataBlock1, setDataBlock1] = useState(fieldInputBlock1);

  const validateData = () => {
    alert(1);
    console.log(dataBlock1);

    // if (!validEmail.test(value)) {
    //   alert("setEmailErr");
    //   //  setEmailErr(true);
    // }
    // if (!validPassword.test(value)) {
    //   alert("setPwdError");
    //   //  setPwdError(true);
    // }
  };

  // console.log(dataBlock1);
  const [helperTextTest,setHelp] = useState("");
  const onChangeTest = (event) =>  {
    setHelp(event.currentTarget.value);
  }
  


  return (
    <PageContainer
      title="Login"
      description="this is Login page"
      // background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
    >
      <Box
      // sx={{
      //   position: "relative",
      //   content: '""',
      //   background: "linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)",
      //   animation: "gradient 15s ease infinite",
      //   position: "absolute",
      //   height: "100vh",
      //   width: "100vw",
      // }}
      >
        <FormControl fullWidth>
          <Typography fontWeight="700" variant="h7" pb={1}>
            {"AAAA"}
          </Typography>
          <TextField
            id={"1"}
            type={"text"}
            variant="outlined"
            // error={{ borderColor: "red" }}
            // value={value}
            error={helperTextTest !== ""}
            helperText={helperTextTest}
            onChange={onChangeTest}
          />
        </FormControl>

        <Grid
          container
          // spacing={0}
          justifyContent="center"
          sx={{ height: "100vh", width: "100vw" }}
        >
          {/* <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            xl={6}
            display={{ xs: "none", lg: "block" }}
          >
            <Box mt={2} ml={2}><Logo /></Box>
          </Grid> */}
          <Grid
            item
            xs={12}
            // sm={12}
            // lg={12}
            // xl={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "1400px" }}
            >
              {/* { <div style={{ margin: "20px"}} sx={{maxWidth: { xs: "70%", sm: "10%" , md: "10%" , lg: "30%" , xl: "30%" }}} > } */}
              <Box display="flex" alignItems="center" justifyContent="center">
                <div
                  style={{ margin: "20px", width: "400px", maxWidth: "70%" }}
                >
                  <img src={logo_TEF_Text} alt="logo_TEF_Text" width={"100%"} />
                </div>
              </Box>

              {/* <Box display="flex" alignItems="center" justifyContent="center">
                <div style={{ margin: "20px" }}>
                  <img
                    src={logo_TEF_Text}
                    alt="logo_TEF_Text"
                    width={"400px"}
                    maxwidth={"50%"}
                    // maxWidth={"20vw"}
                  />
                </div>
              </Box> */}
              <Box
                sx={{
                  p: 2,
                  background: "linear-gradient(#37689A 0%, #0F4174 100%)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography width="100%" fontWeight="700" variant="h3">
                  TEF Club Membership Registration
                </Typography>
                <Typography width="100%" fontWeight="700" variant="h3">
                  แบบฟอร์มลงทะเบียนสโมสร ภายใต้สมาคมกีฬาขี่ม้าแห่งประเทศไทย
                </Typography>
              </Box>
              <Stack
                sx={{
                  p: 2,
                  backgroundColor: "white",
                  // textAlign: "center",
                  border: "2px solid grey",
                }}
              >
                <Box pt={2} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography fontWeight="700" variant="h5">
                    Club Information*
                  </Typography>
                  <Typography fontWeight="700" variant="h6">
                    ข้อมูลสโมสร*
                  </Typography>
                </Box>

                {/* <Typography>Club Information*</Typography>
                <Typography pb={2} sx={{ borderBottom: "1px solid #37689A" }}>
                  ข้อมูลสโมสร*
                </Typography> */}
                {/* {genGridItems(fieldInputBlock1)} */}
                {genGridItems(dataBlock1)}
                <Typography>
                  Business Details (including Number of Arena and Size, Number
                  of Stalls)
                </Typography>
                <Typography>
                  The main contact address is the same as the club information
                  ที่อยู่ติดต่อหลักรายละเอียดเช่นเดียวกับข้อมูลสโมสร
                </Typography>
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Club Information*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ข้อมูลการติดต่อ*
                  </Typography>
                </Box>
                {genGridItems(fieldInputBlock2)}

                {/* <Typography>Google Map</Typography>
                <Typography>Contact E-mail</Typography>
                <Typography>Phone</Typography> */}

                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Club Owner Information*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ข้อมูลเจ้าของสโมสร*
                  </Typography>
                </Box>
                {/* <Typography>Club Owner Information*</Typography>
                <Typography pb={2} sx={{ borderBottom: "1px solid #37689A" }}>
                  ข้อมูลเจ้าของสโมสร*
                </Typography> */}
                {genGridItems(fieldInputBlock3)}

                {/* <Typography>First Name</Typography>
                <Typography>Last Name</Typography>
                <Typography>E-mail</Typography> */}
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Stable Manager Information*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ข้อมูลผู้จัดการสโมสร*
                  </Typography>
                </Box>
                {genGridItems(fieldInputBlock4)}
                {/* <Typography>First Name</Typography>
                <Typography>Last Name</Typography>
                <Typography>E-mail</Typography> */}

                <Box m={2}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here."
                  />
                  {/* label="I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here.
TEF will do spot checks to verify the details declared are correct.
ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติมคลิกที่นี่
ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ"
                  /> */}
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  m={2}
                >
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

                <Typography></Typography>
                <Typography></Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default RegisterCustomerTEF;
