import { AppLayout } from "@muc/layout";
import { useLocation } from "react-router-dom";
import { ProductInfo } from "../../components/components";
import { OurFeature, ProductCard } from "@muc/components";
import { PRODUCT_CARD } from "@muc/constants";
import { Box } from "@mui/material";

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;

  console.log(product, "details");
  return (
    <AppLayout>
      <ProductInfo productData={product} />
      <OurFeature title="Related Items" />
      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "block" },
          justifyContent: "space-between",
          mb: 3,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {PRODUCT_CARD.slice(0, 4).map((item) => (
          <ProductCard data={item} />
        ))}
      </Box>
    </AppLayout>
  );
};

export default ProductDetails;
