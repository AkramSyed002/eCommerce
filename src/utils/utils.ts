import { COLORS } from "@muc/constants";
import { makeStyles } from "@mui/styles";
import { Settings } from "react-slick";

export const searchBar = {
  bgcolor: `${COLORS.gray.darkGray}`,
  borderRadius: "5px",
  Border: "none",
  width: "100%",
  color: COLORS.dark.main,
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& input::placeholder": {
      color: COLORS.dark.main,
      opacity: 0.4,
      fontSize: "12px",
    },
    "& input": {
      color: COLORS.dark.lightDark,
    },
  },
};

export const navLink = {
  color: `${COLORS.dark.main}`,
  textDecoration: "none",
  pb: 1,
};

export const arrowBtn = {
  bgcolor: COLORS.gray.darkGray,
  p: "5px",
  borderRadius: "50px",
  height: "20px",
  width: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export const productCard = {
  width: "250px",
  borderRadius: "4px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const insideProductCard = {
  bgcolor: COLORS.gray.darkGray,
  display: "flex",
  position: "relative",
  borderRadius: "4px",
  height: "300px",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const cardIcons = {
  mb: "8px",
  width: "34px",
  height: "34px",
  bgcolor: COLORS.white.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  border: `1px solid transparent`,
  cursor: "pointer",
  "&:hover": {
    bgcolor: COLORS.white.main,
    border: `1px solid ${COLORS.primary.main}`,
  },
};

export const categoryStyle = {
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  cursor: "pointer",
  width: "175px",
  height: "145px",
  my: { md: 0, sm: 0, xs: 2 },
};

export const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4.1,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};

export const musicAdvertisemnt = {
  maxWidth: "100%",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  bgcolor: COLORS.dark.main,
  my: 5,
  borderRadius: "6px",
};

export const advertisementTimeStyle = {
  width: { md: "62px", sm: "60px", xs: "50px" },
  height: { md: "62px", sm: "60px", xs: "50px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "50%",
  bgcolor: COLORS.white.main,
};

export const useStyles = makeStyles({
  dot: {
    "& li button:before": {
      fontSize: "12px !important",
      boxShadow: "inset 2px 5px 8px gray",
      borderRadius: "50px",
      color: `${COLORS.gray.darkGray} !important`,
      opacity: "1 !important",
    },
    "& li.slick-active button:before": {
      color: `${COLORS.primary.main} !important`,
      opacity: "1 !important",
    },
  },
});

export const tableHead = {
  boxShadow: `2px 4px 14px ${COLORS.gray.darkGray}`,
  borderRadius: "8px",
  width: "100%",
  borderBottom: "none",
};
export const tableRow = {
  boxShadow: `2px 4px 8px ${COLORS.gray.darkGray}`,
  borderRadius: "8px",
  borderBottom: "1px solid white",
};

export const tableContent = {
  p: 3,
  borderBottom: "none",
};

export const addTotalPrice = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: `1px solid ${COLORS.gray.main}`,
  mb: 1,
  pt: 1,
};

export const productSize = {
  height: 10,
  width: 10,
  borderRadius: "4px",
  cursor: "pointer",
  p: 0.8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 12,
};
