import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";

// components
import PageContainer from "src/components/container/PageContainer";
import Logo from "src/layouts/full/shared/logo/Logo";
import TEF_Logo from "src/layouts/full/shared/logo/LogoTEF";
import logo_TEF from "src/assets/images/logos/TEF_Logo.png";
// import TEF_Logo from "src/assets/images/logos/TEF_Logo.png";
import AuthLogin from "./auth/AuthLogin";
import TEFLogo from "./logo_old";

const Login2 = () => {
  return (
    <PageContainer
      title="Login"
      description="this is Login page"
      background="linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)"
      // gradient_background
    >
      {/* <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            // background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            background:
              "linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)",
            // backgroundSize: "100vh 100vw",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100vh",
            width: "100vw",
            // opacity: '0.3',
          },
        }}
      > */}

      <Box
        sx={{
          position: "relative",
          content: '""',
          background: "linear-gradient(#37689A 0%, #64BEFF 50%, #0F4174 100%)",
          // backgroundSize: "100vh 100vw",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100vh",
          width: "100vw",
          // opacity: '0.3',
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh", width: "100vw" }}
        >
          {/* <img src={TEF_Logo} alt="fireSpot" width={100} sx={{zIndex:9999}} /> 
          display={{xs: "none", lg: "block" }}*/}

          <Grid
            item
            spacing={5}
            xs={12}
            sm={12}
            lg={6}
            xl={6}
            // display="flex"
            // justifyContent="center"
            // alignItems="center"

            display={{ xs: "none", lg: "block" }}
            style={{
              marginTop: "100",
            }}
          >
            {/* <TEFLogo variant={{width:"100px"}}/> */}
            <div
              style={{
                margin: "20px",
              }}
            >
              <img src={logo_TEF} alt="fireSpot" width={100} />
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            xl={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Your Social Campaigns
                  </Typography>
                }
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="500"
                    >
                      New to Modernize?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: "none",
                        color: "primary.main",
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
