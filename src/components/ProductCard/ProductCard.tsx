import { COLORS, ROUTES } from "@muc/constants";
import { productCardType } from "@muc/types";
import { cardIcons, insideProductCard, productCard } from "@muc/utils";
import { Box, Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useCart, useSuccessErrorNotification } from "@muc/context";
import { useNavigate } from "react-router-dom";

type dataType = {
  data: productCardType;
  topProduct?: boolean;
};

const ProductCard = ({ data, topProduct }: dataType) => {
  const { addProduct } = useCart();
  const navigate = useNavigate();
  const { setAlert } = useSuccessErrorNotification();

  const handleAddToCart = () => {
    try {
      addProduct({
        id: String(data.id),
        poster: data.poster,
        name: data.title,
        price: data.newPrice,
        quantity: 1,
      });

      setAlert({
        message: { subTitle: "Product added to cart successfully!" },
        show: true,
        variant: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = () => {
    navigate(`${ROUTES.PRODUCT_DETAILS_PAGE}/:${data?.id}`, {
      state: { product: data },
    });
  };

  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      <Box
        sx={{
          productCard,
          width: topProduct
            ? "285px"
            : { md: "250px", sm: "300px", xs: "100%" },
        }}
      >
        <Box sx={insideProductCard}>
          <Box
            component={"img"}
            src={data?.poster}
            width={"200px"}
            height={"150px"}
            alt="product Img"
          />
          <Box position={"absolute"} top={"5%"} right={"5%"}>
            <Box sx={cardIcons}>
              <Box
                component={"img"}
                src="/assets/icons/heart-icon.svg"
                alt="favorite"
              />
            </Box>
            <Box sx={cardIcons} onClick={handleCardClick}>
              <Box
                component={"img"}
                src="/assets/icons/view-icon.svg"
                alt="preview"
              />
            </Box>
          </Box>
          {topProduct ? null : (
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{
                bgcolor: COLORS.dark.main,
                width: { md: "100%", sm: "100%", xs: "100%" },
                position: "absolute",
                bottom: "0%",
                borderRadius: "0px 0px 4px 4px",
                height: { md: "46px", sm: "46px", xs: "50px" },
              }}
            >
              Add To Cart
            </Button>
          )}
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Typography variant="h4" pt={2} fontSize={"16px"}>
            {data?.title}
          </Typography>
          <Box display={"flex"} my={"5px"} gap={2} alignItems={"center"}>
            <Typography variant="h5" color={COLORS.primary.main}>
              ${data?.newPrice}
            </Typography>
            <Typography variant="body1" sx={{ textDecoration: "line-through" }}>
              ${data?.oldPrice}
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Rating
              sx={{ fontSize: "20px" }}
              value={data?.ratingValue || 0}
              readOnly
            />
            <Typography variant="body1" color="initial" fontWeight={600}>
              ({data?.ratingValue})
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
