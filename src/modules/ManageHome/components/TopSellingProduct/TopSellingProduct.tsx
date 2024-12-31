import { CustomBtn, ProductCard } from "@muc/components";
import { COLORS, TOP_SELLING_PRODUCTS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

const TopSellingProduct = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{fontSize:{md:'30px',sm:'auto',xs:'25px'}}}
        >
          Best Selling Products
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CustomBtn
            title="View all"
            variant="contained"
            height="40px"
            color={`${COLORS.white.main}`}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "block" },
          gap: "30px",
          width: { md: "100%", sm: "100%", xs: "100%" },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {TOP_SELLING_PRODUCTS.slice(0, 4).map((data) => (
          <ProductCard data={data} topProduct={true} />
        ))}
      </Box>
    </div>
  );
};

export default TopSellingProduct;
