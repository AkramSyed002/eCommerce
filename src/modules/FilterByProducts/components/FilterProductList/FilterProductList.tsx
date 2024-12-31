import { Box, Button, Rating, Typography } from "@mui/material";
import { cardIcons, insideProductCard } from "@muc/utils";
import { COLORS, ROUTES } from "@muc/constants";
import { CustomBtn } from "@muc/components";
import { useNavigate } from "react-router-dom";
import { useCart, useSuccessErrorNotification } from "@muc/context";
import { ArrowBackIos } from "@mui/icons-material";

type Product = {
  id: number;
  poster: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  ratingValue: number;
};

interface FilterProductListProps {
  filterProduct: Product[];
}

const FilterProductList: React.FC<FilterProductListProps> = ({
  filterProduct,
}) => {
  const navigate = useNavigate();
  const { addProduct } = useCart();
  const { setAlert } = useSuccessErrorNotification();

  const handleAddToCart = (product: Product) => {
    try {
      addProduct({
        id: String(product.id),
        poster: product.poster,
        name: product.title,
        price: product.newPrice,
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

  const handleCardClick = (data: Product) => {
    navigate(`${ROUTES.PRODUCT_DETAILS_PAGE}/:${data?.id}`, {
      state: { product: data },
    });
  };

  if (filterProduct.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" color={COLORS.gray.main}>
          Category not found
        </Typography>
        <Box my={4}>
          <CustomBtn
            title="Return to Shop"
            variant="contained"
            height="40px"
            color={COLORS.white.main}
            onClick={() => navigate(ROUTES.HOME_PAGE)}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Box mb={8} my={8}>
      <Button
        variant="outlined"
        sx={{ border: "none", mb: 4, "&:hover": { border: "none" } }}
        onClick={() => navigate(ROUTES.HOME_PAGE)}
      >
        <ArrowBackIos />
      </Button>
      <Box
        sx={{ display: "flex", gap: "20px", width: "100%", flexWrap: "wrap" }}
      >
        {filterProduct.map((data, index) => (
          <Box
            key={index}
            sx={{
              width: { md: "275px", sm: "300px", xs: "100%" },
            }}
          >
            <Box sx={insideProductCard}>
              <Box
                component={"img"}
                src={data.poster}
                width={"200px"}
                height={"150px"}
                alt="product Img"
              />
              <Box position={"absolute"} top={"5%"} right={"5%"}>
                <Box sx={cardIcons} onClick={() => handleCardClick(data)}>
                  <Box
                    component={"img"}
                    src="/assets/icons/heart-icon.svg"
                    alt="favorite"
                  />
                </Box>
                <Box sx={cardIcons} onClick={() => handleCardClick(data)}>
                  <Box
                    component={"img"}
                    src="/assets/icons/view-icon.svg"
                    alt="preview"
                  />
                </Box>
              </Box>
              <Button
                variant="contained"
                onClick={() => handleAddToCart(data)}
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
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Typography variant="h4" pt={2} fontSize={"16px"}>
                {data.title}
              </Typography>
              <Box display={"flex"} my={"5px"} gap={2} alignItems={"center"}>
                <Typography variant="h5" color={COLORS.primary.main}>
                  ${data.newPrice}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: "line-through" }}
                >
                  ${data.oldPrice}
                </Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <Rating
                  sx={{ fontSize: "20px" }}
                  value={data.ratingValue || 0}
                  readOnly
                />
                <Typography variant="body1" color="initial" fontWeight={600}>
                  ({data.ratingValue})
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilterProductList;
