import { Box, Grid, Typography } from "@mui/material";

const AboutStory = () => {
  return (
    <Box sx={{ paddingTop: "80px" }}>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item md={6}>
          <Box
            sx={{
              width: "525px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Typography
              variant="h1"
              fontSize={"54px"}
              fontWeight={600}
              letterSpacing={"6%"}
              color="initial"
            >
              Our Story
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Typography
                variant="body1"
                color="initial"
                lineHeight={"26px"}
                fontSize={"15px"}
                fontWeight={400}
              >
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                lineHeight={"26px"}
                fontSize={"16px"}
                fontWeight={400}
              >
                {" "}
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img
            src="assets/images/aboutImg.svg"
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutStory;
