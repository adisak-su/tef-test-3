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
  const handleField1 = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const type = event.currentTarget.type;

    let tmpData = [...fieldInputBlock];
    let elem = tmpData.find((item) => item.id === id);
    if (elem) {
      elem.value = value;
      // setDataBlock(tmpData);
    }
  };

  const handleTxt = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const type = event.currentTarget.type;

    let tmpData = [...fieldInputBlock];
    let elem = tmpData.find((item) => item.id === id);
    if (elem) {
      elem.value = value;
      // setDataBlock(tmpData);
    }
  };

  const [helperText0, setHelperText0] = useState("");
  const [helperText1, setHelperText1] = useState("");
  const [helperText2, setHelperText2] = useState("");
  const [helperText3, setHelperText3] = useState("");
  const [helperText4, setHelperText4] = useState("");
  const [helperText5, setHelperText5] = useState("");
  const [helperText6, setHelperText6] = useState("");
  const [helperText7, setHelperText7] = useState("");
  const [helperText8, setHelperText8] = useState("");
  const [helperText9, setHelperText9] = useState("");
  const [helperText10, setHelperText10] = useState("");
  const [helperText11, setHelperText11] = useState("");
  const [helperText12, setHelperText12] = useState("");
  const [helperText13, setHelperText13] = useState("");
  const [helperText14, setHelperText14] = useState("");
  const [helperText15, setHelperText15] = useState("");
  const [helperText16, setHelperText16] = useState("");
  const [helperText17, setHelperText17] = useState("");
  const [helperText18, setHelperText18] = useState("");

  const setHelpers = [
    setHelperText1,
    setHelperText2,
    setHelperText3,
    setHelperText4,
    setHelperText5,
    setHelperText6,
    setHelperText7,
    setHelperText8,
    setHelperText9,
    setHelperText10,
    setHelperText11,
    setHelperText12,
    setHelperText13,
    setHelperText14,
    setHelperText15,
    setHelperText16,
    setHelperText17,
    setHelperText18,
  ];

  let fieldInputBlock1 = [
    {
      id: "txt1",
      type: "text",
      value: "",
      label: "ชื่อสโมสร",
      placeholder: "ภาษาไทย",
      helperText: helperText1,
      onChange: handleTxt,
    },
    {
      id: "txt2",
      type: "text",
      value: "",
      label: "Club Name",
      placeholder: "ภาษาอังกฤษ",
      helperText: helperText2,
      onChange: handleTxt,
    },
    {
      id: "txt3",
      type: "text",
      value: "",
      label: "Abbreviation of Club",
      placeholder: "ชื่อย่อภาษาอังกฤษ",
      helperText: helperText3,
      onChange: handleTxt,
    },
    {
      id: "txt4",
      type: "text",
      value: "",
      label: "Address",
      placeholder: "ที่อยู่",
      helperText: helperText4,
      onChange: handleTxt,
    },
    {
      id: "txt5",
      type: "number",
      value: "",
      label: "Post Code",
      placeholder: "รหัสไปรษณีย์",
      helperText: helperText5,
      onChange: handleTxt,
    },
    {
      id: "txt6",
      type: "text",
      value: "",
      label: "Province",
      placeholder: "จังหวัด",
      helperText: helperText6,
      onChange: handleTxt,
    },
    {
      id: "txt7",
      type: "text",
      value: "",
      label: "Google Map",
      placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
      helperText: helperText7,
      onChange: handleTxt,
    },
    {
      id: "txt8",
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      helperText: helperText8,
      onChange: handleTxt,
    },
    {
      id: "txt9",
      type: "number",
      value: "",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      helperText: helperText9,
      onChange: handleTxt,
    },
  ];

  const fieldInputBlock2 = [
    {
      id: "txt10",
      type: "text",
      value: "",
      label: "Google Map",
      placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
      helperText: helperText10,
      onChange: handleTxt,
    },
    {
      id: "txt11",
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      helperText: helperText11,
      onChange: handleTxt,
    },
    {
      id: "txt12",
      type: "tel",
      value: "",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      helperText: helperText12,
      onChange: handleTxt,
    },
  ];

  const fieldInputBlock3 = [
    {
      id: "txt13",
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "ชื่อ",
      helperText: helperText13,
      onChange: handleTxt,
    },
    {
      id: "txt14",
      type: "text",
      value: "",
      label: "Last Name",
      placeholder: "นามสกุล",
      helperText: helperText14,
      onChange: handleTxt,
    },
    {
      id: "txt15",
      type: "email",
      value: "",
      label: "E-mail",
      placeholder: "อีเมล",
      helperText: helperText15,
      onChange: handleTxt,
    },
  ];

  const fieldInputBlock4 = [
    {
      id: "txt16",
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "ชื่อ",
      helperText: helperText16,
      onChange: handleTxt,
    },
    {
      id: "txt17",
      type: "text",
      value: "",
      label: "Last Name",
      placeholder: "นามสกุล",
      helperText: helperText17,
      onChange: handleTxt,
    },
    {
      id: "txt18",
      type: "email",
      value: "",
      label: "E-mail",
      placeholder: "อีเมล",
      helperText: helperText18,
      onChange: handleTxt,
    },
  ];

  let fieldInputBlock = []; // fieldInputBlock1.concat(fieldInputBlock2).concat(fieldInputBlock3).concat(fieldInputBlock4);
  fieldInputBlock1.forEach((element) => {
    fieldInputBlock.push(element);
  });
  fieldInputBlock2.forEach((element) => {
    fieldInputBlock.push(element);
  });
  fieldInputBlock3.forEach((element) => {
    fieldInputBlock.push(element);
  });
  fieldInputBlock4.forEach((element) => {
    fieldInputBlock.push(element);
  });

  const [dataBlock, setDataBlock] = useState(fieldInputBlock);

  const [dataBlock1, setDataBlock1] = useState(fieldInputBlock1);

  const validateData = (event) => {
    event.preventDefault();
    console.log("Data is ");
    console.table(dataBlock);
    console.log("fieldInputBlock is ");
    console.table(fieldInputBlock);
    console.log("fieldInputBlock1 is ");
    console.table(fieldInputBlock1);
    // setHelp1("Error")
    // dataBlock.forEach((element, index) => {
    //   if(element.value === "") {

    //     // arrHelper[index]("Error")
    //     // alert(index)
    //     setHelpers[index]("Error")
    //   }
    // })

    fieldInputBlock.forEach((element, index) => {
      if (element.value === "") {
        // arrHelper[index]("Error")
        // alert(index)
        setHelpers[index]("Error");
      } else setHelpers[index]("");
    });
  };

  // console.log(dataBlock1);
  const [helperTextTest, setHelp] = useState("");
  const onChangeTest = (event) => {
    setHelp(event.currentTarget.value);
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box>
        <Grid
          container
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
              {/* { <div style={{ margin: "20px"}} sx={{maxWidth: { xs: "70%", sm: "10%" , md: "10%" , lg: "30%" , xl: "30%" }}} > } */}
              <Box display="flex" alignItems="center" justifyContent="center">
                <div
                  style={{ margin: "20px", width: "400px", maxWidth: "70%" }}
                >
                  <img src={logo_TEF_Text} alt="logo_TEF_Text" width={"100%"} />
                </div>
              </Box>
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

                {/* {genGridItems(fieldInputBlock1)} */}
                <Grid
                  key={uuidv4()}
                  container
                  spacing={1}
                  sx={{ width: "100%", marginTop: "20px" }}
                >
                  <Grid key={uuidv4()} item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Typography fontWeight="700" variant="h7" pb={1}>
                        {labelField1}
                      </Typography>
                      <TextField
                        key={uuidv4()}
                        id={idField1}
                        type={typeField1}
                        variant="outlined"
                        // value={value}
                        error={helperText1 !== ""}
                        helperText={helperText1}
                        placeholder={placeholderField1}
                        onChange={onChange}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                {genGridItems(fieldInputBlock1)}
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
                    Send
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
