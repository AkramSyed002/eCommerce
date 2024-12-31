import { Box, Typography } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { COLORS, MY_TEAM_MEMBER } from "@muc/constants";
import { useStyles } from "@muc/utils";

const TeamSlider = () => {
  const classes = useStyles();
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box position={"absolute"} bottom={0}>
        <ul className={`${classes.dot} slick-dots`}>{dots}</ul>
      </Box>
    ),
  };

  return (
    <Box sx={{ mb: "30px" }} className="slider-container">
      <Slider {...settings}>
        {MY_TEAM_MEMBER.map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              sx={{
                bgcolor: COLORS.gray.darkGray,
                width: "350px",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
              }}
            >
              <Box
                component="img"
                src={item.img}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                alt={item.name}
              />
            </Box>

            {/* Card Details */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 4,
              }}
            >
              <Typography
                variant="h2"
                fontSize={20}
                fontWeight="600"
                color={COLORS.dark.main}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color={COLORS.dark.lightDark}>
                {item.title}
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: "12px", mt: "8px" }}>
                <img
                  src="assets/icons/twitter-icon.svg"
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  alt="Twitter"
                />
                <img
                  src="assets/icons/instagram-icon.svg"
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  alt="Instagram"
                />
                <img
                  src="assets/icons/linkdIn-icon.svg"
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  alt="LinkedIn"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TeamSlider;
