import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  Stack,
  Typography,
  FormControl,
  TextField,
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

const fieldInputBlock1 = [
  {
    id: "txt1",
    label: "ชื่อสโมสร",
    placeholder: "ภาษาไทย",
    onChange: "{handleTxt}",
  },
  {
    id: "txt2",
    label: "Club Name",
    placeholder: "ภาษาอังกฤษ",
    onChange: "{handleTxt}",
  },
  {
    id: "txt3",
    label: "Abbreviation of Club",
    placeholder: "ชื่อย่อภาษาอังกฤษ",
    onChange: "{handleTxt}",
  },
  {
    id: "txt4",
    label: "Address",
    placeholder: "ที่อยู่",
    onChange: "{handleTxt}",
  },
  {
    id: "txt5",
    label: "Post Code",
    placeholder: "รหัสไปรษณีย์",
    onChange: "{handleTxt}",
  },
  {
    id: "txt6",
    label: "Province",
    placeholder: "จังหวัด",
    onChange: "{handleTxt}",
  },
  {
    id: "txt7",
    label: "Google Map",
    placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
    onChange: "{handleTxt}",
  },
  {
    id: "txt8",
    label: "Contact E-mail",
    placeholder: "อีเมลเพื่อรับข่าวสาร",
    onChange: "{handleTxt}",
  },
  {
    id: "txt9",
    label: "Phone",
    placeholder: "เบอร์ติดต่อ",
    onChange: "{handleTxt}",
  },
];

const fieldInputBlock2 = [
  {
    id: "txt10",
    label: "Google Map",
    placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
    onChange: "{handleTxt}",
  },
  {
    id: "txt11",
    label: "Contact E-mail",
    placeholder: "อีเมลเพื่อรับข่าวสาร",
    onChange: "{handleTxt}",
  },
  {
    id: "txt12",
    label: "Phone",
    placeholder: "เบอร์ติดต่อ",
    onChange: "{handleTxt}",
  },
];

const fieldInputBlock3 = [
  {
    id: "txt13",
    label: "First Name",
    placeholder: "ชื่อ",
    onChange: "{handleTxt}",
  },
  {
    id: "txt14",
    label: "Last Name",
    placeholder: "นามสกุล",
    onChange: "{handleTxt}",
  },
  {
    id: "txt15",
    label: "E-mail",
    placeholder: "อีเมล",
    onChange: "{handleTxt}",
  },
];

const fieldInputBlock4 = [
  {
    id: "txt16",
    label: "First Name",
    placeholder: "ชื่อ",
    onChange: "{handleTxt}",
  },
  {
    id: "txt17",
    label: "Last Name",
    placeholder: "นามสกุล",
    onChange: "{handleTxt}",
  },
  {
    id: "txt18",
    label: "E-mail",
    placeholder: "อีเมล",
    onChange: "{handleTxt}",
  },
];

const RegisterCustomerTEF = () => {
  const [txt, setTxt] = useState("");
  const handleTxt = (event) => {
    setTxt(event.currentTarget.value);
  };

  return (
    <PageContainer
      title="Login"
      description="this is Login page"
      background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
    >
      <Box
        sx={{
          position: "relative",
          content: '""',
          background: "linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100vh",
          width: "100vw",
        }}
      >
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
              <Box display="flex" alignItems="center" justifyContent="center">
                <div style={{ margin: "20px" }}>
                  <img
                    src={logo_TEF_Text}
                    alt="logo_TEF_Text"
                    height={"100px"}
                  />
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
                <Typography width="100%">
                  TEF Club Membership Registration
                </Typography>
                <Typography width="100%">
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
                <Typography>TEF Club Membership Registration</Typography>
                <Typography>Club Information*</Typography>
                <Typography pb={2} sx={{ borderBottom: "1px solid #37689A" }}>
                  ข้อมูลสโมสร*
                </Typography>
                {/* <div sx={{borderBottom: "1px solid #37689A"}}><hr></hr></div> */}
                {genGridItems(fieldInputBlock1)}
                {genGridItems(fieldInputBlock2)}
                {genGridItems(fieldInputBlock3)}
                {genGridItems(fieldInputBlock4)}
                <Grid
                  container
                  spacing={1}
                  // justifyContent="center"
                  sx={{ width: "100%" }}
                >
                  {/* <Grid item xs={12} sm={4} lg={4} xl={4} p={1}> */}
                  {genGridItems(fieldInputBlock1)}

                  {/* {genGridItem({id:"txt",label:"ชื่อสโมสร",placeholder:"ภาษาไทย",onChange:{handleTxt}})} */}
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Typography>ชื่อสโมสร</Typography>
                      <TextField
                        id="txt"
                        variant="outlined"
                        value={txt}
                        placeholder="ภาษาไทย"
                        onChange={handleTxt}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Typography>Club Name</Typography>
                      <TextField
                        id="txt"
                        variant="outlined"
                        value={txt}
                        placeholder="ชื่อย่อภาษาอังกฤษ"
                        onChange={handleTxt}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <Typography>Abbreviation of Club</Typography>
                      <TextField
                        id="txt"
                        variant="outlined"
                        value={txt}
                        placeholder="ชื่อย่อภาษาอังกฤษ"
                        onChange={handleTxt}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography>
                  Business Details (including Number of Arena and Size, Number
                  of Stalls)
                </Typography>
                <Typography>
                  The main contact address is the same as the club information
                  ที่อยู่ติดต่อหลักรายละเอียดเช่นเดียวกับข้อมูลสโมสร
                </Typography>
                <Box pb={2} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography>
                    Club Information*
                  </Typography>
                  <Typography>ข้อมูลการติดต่อ*</Typography>
                </Box>
                <Typography>Google Map</Typography>
                <Typography>Contact E-mail</Typography>
                <Typography>Phone</Typography>

                <Typography>Club Owner Information*</Typography>
                <Typography pb={2} sx={{ borderBottom: "1px solid #37689A" }}>
                  ข้อมูลเจ้าของสโมสร*
                </Typography>
                <Typography>First Name</Typography>
                <Typography>Last Name</Typography>
                <Typography>E-mail</Typography>
                <Typography>Stable Manager Information*</Typography>
                <Typography pb={2} sx={{ borderBottom: "1px solid #37689A" }}>
                  ข้อมูลผู้จัดการสโมสร*
                </Typography>
                <Typography>First Name</Typography>
                <Typography>Last Name</Typography>
                <Typography>E-mail</Typography>

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
