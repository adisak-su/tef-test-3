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
import genGridGroup from "./gridItems";
// import TEF_Logo from "src/assets/images/logos/TEF_Logo.png";
// import TEFLogo from "./logo";

import { isValidate, validEmail, validPassword } from "./Regex.jsx";
import { v4 as uuidv4 } from "uuid";

// import swal from "sweetalert";
import Swal from "sweetalert2";

const RegisterCustomerTEF = () => {
  const onFieldChange = (event) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    const type = event.currentTarget.type;

    const tmpData = [...dataBlock];
    const elem = tmpData.find((item) => item.id === id);
    if (elem) {
      elem.value = value;
      setDataBlock(tmpData);
    }
  };

  const [helperTextField1, setHelperTextField1] = useState("");
  const [helperTextField2, setHelperTextField2] = useState("");
  const [helperTextField3, setHelperTextField3] = useState("");
  const [helperTextField4, setHelperTextField4] = useState("");
  const [helperTextField5, setHelperTextField5] = useState("");
  const [helperTextField6, setHelperTextField6] = useState("");
  const [helperTextField7, setHelperTextField7] = useState("");
  const [helperTextField8, setHelperTextField8] = useState("");
  const [helperTextField9, setHelperTextField9] = useState("");
  const [helperTextField10, setHelperTextField10] = useState("");
  const [helperTextField11, setHelperTextField11] = useState("");
  const [helperTextField12, setHelperTextField12] = useState("");
  const [helperTextField13, setHelperTextField13] = useState("");
  const [helperTextField14, setHelperTextField14] = useState("");
  const [helperTextField15, setHelperTextField15] = useState("");
  const [helperTextField16, setHelperTextField16] = useState("");
  const [helperTextField17, setHelperTextField17] = useState("");
  const [helperTextField18, setHelperTextField18] = useState("");

  const setHelpers = [
    setHelperTextField1,
    setHelperTextField2,
    setHelperTextField3,
    setHelperTextField4,
    setHelperTextField5,
    setHelperTextField6,
    setHelperTextField7,
    setHelperTextField8,
    setHelperTextField9,
    setHelperTextField10,
    setHelperTextField11,
    setHelperTextField12,
    setHelperTextField13,
    setHelperTextField14,
    setHelperTextField15,
    setHelperTextField16,
    setHelperTextField17,
    setHelperTextField18,
  ];

  const initDataBlock = [
    {
      key: 1,
      id: "txt1",
      type: "text",
      value: "",
      label: "ชื่อสโมสร",
      placeholder: "ภาษาไทย",
      helperText: helperTextField1,
      onChange: onFieldChange,
      required: false,
    },
    {
      key: 2,
      id: "txt2",
      type: "text",
      value: "",
      label: "Club Name",
      placeholder: "ภาษาอังกฤษ",
      helperText: helperTextField2,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 3,
      id: "txt3",
      type: "text",
      value: "",
      label: "Abbreviation of Club",
      placeholder: "ชื่อย่อภาษาอังกฤษ",
      helperText: helperTextField3,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 4,
      id: "txt4",
      type: "text",
      value: "",
      label: "Address",
      placeholder: "ที่อยู่",
      helperText: helperTextField4,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 5,
      id: "txt5",
      type: "number",
      value: "",
      label: "Post Code",
      placeholder: "รหัสไปรษณีย์",
      helperText: helperTextField5,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 6,
      id: "txt6",
      type: "text",
      value: "",
      label: "Province",
      placeholder: "จังหวัด",
      helperText: helperTextField6,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 7,
      id: "txt7",
      type: "text",
      value: "",
      label: "Google Map",
      placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
      helperText: helperTextField7,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 8,
      id: "txt8",
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      helperText: helperTextField8,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 9,
      id: "txt9",
      type: "telephone",
      value: "",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      helperText: helperTextField9,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 10,
      id: "txt10",
      type: "text",
      value: "",
      label: "Google Map",
      placeholder: "ลึ่งค์ทตำแหน่งที่ตั้ง",
      helperText: helperTextField10,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 11,
      id: "txt11",
      type: "email",
      value: "",
      label: "Contact E-mail",
      placeholder: "อีเมลเพื่อรับข่าวสาร",
      helperText: helperTextField11,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 12,
      id: "txt12",
      type: "telephone",
      // type: "telephone",
      value: "",
      label: "Phone",
      placeholder: "เบอร์ติดต่อ",
      helperText: helperTextField12,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 13,
      id: "txt13",
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "ชื่อ",
      helperText: helperTextField13,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 14,
      id: "txt14",
      type: "text",
      value: "",
      label: "Last Name",
      placeholder: "นามสกุล",
      helperText: helperTextField14,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 15,
      id: "txt15",
      type: "email",
      value: "",
      label: "E-mail",
      placeholder: "อีเมล",
      helperText: helperTextField15,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 16,
      id: "txt16",
      type: "text",
      value: "",
      label: "First Name",
      placeholder: "ชื่อ",
      helperText: helperTextField16,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 17,
      id: "txt17",
      type: "text",
      value: "",
      label: "Last Name",
      placeholder: "นามสกุล",
      helperText: helperTextField17,
      onChange: onFieldChange,
      required: true,
    },
    {
      key: 18,
      id: "txt18",
      type: "email",
      value: "",
      label: "E-mail",
      placeholder: "อีเมล",
      helperText: helperTextField18,
      onChange: onFieldChange,
      required: true,
    },
  ];

  function genIniDataBlock(datas,start,end) {
    let tmpDataBlock = [];
    for(let index=start-1;index<end;index++) {
      let element = datas[index];
      // let item = { id: element.id, type: element.type, value: element.value, required:element.required };
      tmpDataBlock.push(element);
    }
    return tmpDataBlock;
  }

  // const initDataBlock = [
  //   {
  //     id: "txt1",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt2",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt3",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt4",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt5",
  //     type: "number",
  //     value: "",
  //   },
  //   {
  //     id: "txt6",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt7",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt8",
  //     type: "email",
  //     value: "",
  //   },
  //   {
  //     id: "txt9",
  //     type: "telephone",
  //     value: "",
  //   },
  //   {
  //     id: "txt10",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt11",
  //     type: "email",
  //     value: "",
  //   },
  //   {
  //     id: "txt12",
  //     type: "telephone",
  //     value: "",
  //   },
  //   {
  //     id: "txt13",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt14",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt15",
  //     type: "email",
  //     value: "",
  //   },
  //   {
  //     id: "txt16",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt17",
  //     type: "text",
  //     value: "",
  //   },
  //   {
  //     id: "txt18",
  //     type: "email",
  //     value: "",
  //   },
  // ];

  // const initDataBlock = genIniDataBlock();

  const initDataBlock1 = genIniDataBlock(initDataBlock,1,9);
  const initDataBlock2 = genIniDataBlock(initDataBlock,10,12);
  const initDataBlock3 = genIniDataBlock(initDataBlock,13,15);
  const initDataBlock4 = genIniDataBlock(initDataBlock,16,18);

  const [dataBlock, setDataBlock] = useState(initDataBlock);

  // const getDataFields = (props) => {
  //   let tmpDataFields = [];
  //   props.forEach((item) => {
  //     tmpDataFields.push({
  //       key: 1,
  //       id: item.id,
  //       type: item.type,
  //       value: item.value,
  //       label: item.label,
  //       placeholder: item.placeholder,
  //       helperText: item.helperTextField1,
  //       onChange: item.onFieldChange,
  //     });
  //   });
  // };

  const [checkAgree, setCheckAgree] = useState(false);
  const setAgree = (event) => {
    const isChecked = event.target.checked;
    setCheckAgree(isChecked);
  };

  const validateData = (event) => {
    event.preventDefault();
    console.log("Data is ");
    console.table(dataBlock);

    let statusValidateData = true;
    dataBlock.forEach((element, index) => {
      if(element.required) {
        let resultValidate = isValidate(element.type, element.value);
        if (!resultValidate.status) {
          statusValidateData = false;
        }
        setHelpers[index](resultValidate.message);  
      }
    });
    if (statusValidateData) {
      Swal.fire({
        icon: "success",
        title: "Data validate success",
        text: "Please send your data information.",
        // confirButtonColor: "#37689A",
        confirmButtonText: "close",
        timer: 5000,
        // closeOnClickOutside: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Data validate fail!",
        text: "Please check your data information.",
        // confirButtonColor: "#d33",
        confirmButtonText: "close",
        timer: 5000,
      });
    }
    console.log("Data is ");
    console.table(setDataBlock);
  };
  useEffect(() => {
    console.table(setDataBlock);
    console.log(checkAgree);
  }, [setDataBlock, checkAgree]);

  return (
    <PageContainer
      title="Login"
      description="this is Login page"
      // background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
    >
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
              sx={{ p: 2, zIndex: 1, width: "100%", maxWidth: "1400px" }}
            >
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
                {genGridGroup(initDataBlock1)}
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
                {genGridGroup(initDataBlock2)}
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Club Owner Information*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ข้อมูลเจ้าของสโมสร*
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock3)}
                <Box pt={3} pb={1} sx={{ borderBottom: "1px solid #37689A" }}>
                  <Typography width="100%" fontWeight="700" variant="h5">
                    Stable Manager Information*
                  </Typography>
                  <Typography width="100%" fontWeight="700" variant="h6">
                    ข้อมูลผู้จัดการสโมสร*
                  </Typography>
                </Box>
                {genGridGroup(initDataBlock4)}
                <Box m={2}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here."
                    onClick={setAgree}
                  />
                  {/* label="I agree to TEF Membership Terms and Conditions, to view the full terms and conditions click here.
TEF will do spot checks to verify the details declared are correct.
ฉันยอมรับตามข้อกำหนดและเชื่อนไขสมาชิภ TEF ดูรายละเอียดเพิ่มเติมคลิกที่นี่
ทางสนาคมกีฬขี่ม้าแห่งประเทศไทยจะดำเนินการตรวจสอบข้อมูลเพื่อยืนยันความถูกต้องของข้อมูลที่ได้รับ"
                  /> */}
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    // type="submit"
                    disabled={!checkAgree}
                    onClick={validateData}
                  >
                    Submit
                  </Button>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default RegisterCustomerTEF;
