import { COLORS, PRODUCT_CATEGORIES, ROUTES } from "@muc/constants";
import { useCategory } from "@muc/context";
import { arrowBtn, categoryStyle } from "@muc/utils";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider, { Settings } from "react-slick";

type Category = {
  title: string;
  img: string;
};

const BrowseByCategory = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { setSelectedCategory } = useCategory();
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleState = (index: number, category: Category) => {
    setActiveIndex(index);
    setSelectedCategory(category.title);
    navigate(
      `${ROUTES.FILTERS_PRODUCTS_PAGE}/:${category.title.toLowerCase()}`
    );
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    ref: sliderRef,
  };

  return (
    <div className="slider-container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { md: "30px", sm: "auto", xs: "25px" } }}
        >
          Browse By Category
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
      <Slider {...settings}>
        {PRODUCT_CATEGORIES.map((category, i) => (
          <Box
            sx={{
              display: { md: "flex", sm: "flex", xs: "block" },
              gap: "30px",
            }}
            my={2}
          >
            <Box
              key={i}
              onClick={() => handleState(i, category)}
              bgcolor={activeIndex === i ? COLORS.primary.main : "transparent"}
              border={
                activeIndex === i
                  ? "none"
                  : `1px solid ${COLORS.dark.lightDark}`
              }
              sx={categoryStyle}
            >
              <Box
                component={"img"}
                src={category.img}
                height={"50px"}
                width={"50px"}
                style={{
                  filter: activeIndex === i ? "invert(1)" : "none",
                }}
                alt={category.img}
              />
              <Typography
                variant="body1"
                color={activeIndex === i ? "white" : "black"}
              >
                {category.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default BrowseByCategory;
