import { useState } from "react";
import { CustomBtn } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Button, Typography } from "@mui/material";
import { useCart, useSuccessErrorNotification } from "@muc/context";
import { productCardType } from "@muc/types";

interface ProductCounterProps {
  product: productCardType;
}
const ProductCounter: React.FC<ProductCounterProps> = ({ product }) => {
  console.log(product);
  const { addProduct } = useCart();
  const { setAlert } = useSuccessErrorNotification();
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    try {
      addProduct({
        id: String(product?.id),
        poster: product?.poster,
        name: product?.title,
        price: product?.newPrice,
        quantity: count ? count : 0,
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

  return (
    <Box
      sx={{
        display: { md: "flex", sm: "flex", xs: "block" },
        alignItems: "center",
        justifyContent: "space-between",
        width: { md: "80%" },
        my: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { md: "40%", sm: "50%", xs: "100%" },
          border: `1.5px solid ${COLORS.dark.main}`,
          justifyContent: "space-between",
          borderRadius: "6px",
          my: { md: "auto", sm: "auto", xs: 3 },
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: "40px",
            width: "100%",
            borderRight: `1.5px solid ${COLORS.dark.main}`,
          }}
          onClick={() => setCount(count - 1)}
          disabled={count === 1}
        >
          -
        </Button>
        <Typography variant="h6" sx={{ width: "100%", textAlign: "center" }}>
          {count}
        </Typography>
        <Button
          variant="contained"
          sx={{
            height: "40px",
            width: "100%",
            borderLeft: `1.5px solid ${COLORS.dark.main}`,
          }}
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Box>
      <CustomBtn
        title="Buy Now"
        variant="contained"
        color={`${COLORS.white.main}`}
        height="40px"
        width="165px"
        onClick={handleAddToCart}
      />
    </Box>
  );
};

export default ProductCounter;
