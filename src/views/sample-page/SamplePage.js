import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
// import BoxShadow from "src/components/BoxShadow";
// import InputTextField from "src/components/forms/theme-elements/InputText";
import CustomTextField from "src/components/forms/theme-elements/CustomTextField";
import InputTextField from "src/components/forms/theme-elements/InputText";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Box
        sx={{
          boxShadow: 3,
          bgcolor: "#fff",
          color: 'grey.800',
          borderRadius: 2,
        }}
        >
          <TextField 
          // sx={{
          //   "& fieldset": { border: 'none' },
          // }}
          >

          </TextField>
        </Box>
        <TextField sx={{
          boxShadow: 3,
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}></TextField>
      {/* <TextField></TextField> */}
      <InputTextField id="username" variant="outlined" fullWidth />
      {/* <InputTextField></InputTextField> */}
      {/* <BoxShadow>
        <TextField></TextField>
      </BoxShadow> */}
        {/* <Item elevation="4">{`elevation=4`}</Item> */}
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="700" variant="h1">
            Club Information*
          </Typography>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
