import { useState } from "react";
import { COLORS } from "@muc/constants";
import { productCardType } from "@muc/types";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import { FreeServices, ProductCounter } from "../components";
import { productSize } from "@muc/utils";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

type ProductInfoProps = {
  productData: productCardType;
};

const ProductInfo = ({ productData }: ProductInfoProps) => {
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const navigate = useNavigate();

  return (
    <Box my={{ md: 7, sm: 5, xs: 2 }}>
      <Button
        variant="outlined"
        sx={{ border: "none", mb: 4, "&:hover": { border: "none" } }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIos />
      </Button>
      <Grid container spacing={4}>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            sx={{
              bgcolor: COLORS.gray.darkGray,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={productData?.poster}
              alt={productData?.title}
              sx={{
                width: { md: 500, sm: "100%", xs: "70%" },
                height: { md: 600, sm: 600, xs: "70%" },
              }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Typography
            variant="h1"
            fontWeight={550}
            fontSize={{ md: "45px", sm: "30px", xs: "25px" }}
          >
            {productData?.title}
          </Typography>
          <Box display="flex" gap={1} alignItems="center">
            <Rating
              sx={{ fontSize: { md: 20, sm: 15, xs: 15 } }}
              value={productData?.ratingValue || 0}
              readOnly
            />
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize={{ md: "auto", sm: "14px", xs: "12px" }}
              color={COLORS.gray.main}
            >
              ({productData?.ratingValue} Reviews)
            </Typography>
            <Typography
              variant="body1"
              sx={{
                borderLeft: `1.5px solid ${COLORS.secondary.main}`,
                px: 1,
                color: COLORS.secondary.main,
                fontWeight: 600,
                fontSize: { md: "auto", sm: "14px", xs: "12px" },
              }}
            >
              {productData?.stock}
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{ my: { md: 5 }, mb: { md: 3 } }}
            fontSize={{ md: 46, sm: 40, xs: 35 }}
            fontWeight={500}
          >
            ${productData?.newPrice}.00
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              pb: 2,
              width: { md: 500 },
              borderBottom: `2px solid ${COLORS.gray.main}`,
              fontSize: { md: "auto", sm: "14px", xs: "14px" },
            }}
          >
            {productData?.description}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2, pt: 2, pb: 2 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 500, fontSize: 20 }}>
              Colours:
            </Typography>
            {productData?.colors.map((color, index) => (
              <Box
                key={index}
                onClick={() => setActiveColor(index)}
                sx={{
                  height: 15,
                  width: 15,
                  borderRadius: "50%",
                  bgcolor: color,
                  cursor: "pointer",
                  outline:
                    activeColor === index
                      ? `2px solid ${COLORS.dark.main}`
                      : "none",
                }}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 500, fontSize: 20 }}>
              Size:
            </Typography>
            {productData?.size.map((size, index) => (
              <Box
                key={index}
                onClick={() => setActiveSize(index)}
                sx={{
                  ...productSize,
                  border:
                    activeSize === index
                      ? "1px solid transparent"
                      : `1px solid ${COLORS.dark.main}`,
                  bgcolor:
                    activeSize === index ? COLORS.primary.main : "transparent",
                  color: activeSize === index ? COLORS.white.main : "black",
                }}
              >
                {size}
              </Box>
            ))}
          </Box>
          <ProductCounter product={productData} />
          <FreeServices />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductInfo;
