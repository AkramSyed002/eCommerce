import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomBtn, ProductCard } from "@muc/components";
import { Box, Typography } from "@mui/material";
import { arrowBtn, settings } from "@muc/utils";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { productCardType } from "@muc/types";
import { COLORS } from "@muc/constants";

type cardType = {
  title: string;
  explore?: boolean;
  data: productCardType[];
};

const CardSlider = (props: cardType) => {
  const { explore, title, data } = props || {};
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="slider-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { md: "30px", sm: "auto", xs: "25px" } }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography sx={arrowBtn} onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </Typography>
          <Typography sx={arrowBtn} onClick={handleNext}>
            <ArrowForward fontSize="small" />
          </Typography>
        </Box>
      </Box>
      <Slider {...settings} ref={sliderRef}>
        {data?.map((data: productCardType) => (
          <Box key={data.id}>
            <ProductCard data={data} />
          </Box>
        ))}
      </Slider>
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        {explore ? null : (
          <CustomBtn
            title="View All Products"
            variant="contained"
            width="234px"
            color={`${COLORS.white.main}`}
          />
        )}
      </Box>
    </div>
  );
};

export default CardSlider;
