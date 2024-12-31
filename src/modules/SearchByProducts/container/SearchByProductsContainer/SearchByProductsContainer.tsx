import { CustomBtn, ProductCard } from "@muc/components";
import { COLORS } from "@muc/constants";
import { AppLayout } from "@muc/layout";
import { productCardType } from "@muc/types";
import { ArrowBackIos } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const SearchByProductsContainer = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const filteredProducts: productCardType[] = state?.filteredProducts || [];
  const searchQuery = state?.searchQuery || "";

  if (filteredProducts.length === 0) {
    return (
      <AppLayout>
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
            Search not found
          </Typography>
          <Box my={4}>
            <CustomBtn
              title="Return to Shop"
              variant="contained"
              height="40px"
              color={COLORS.white.main}
              onClick={() => navigate(-1)}
            />
          </Box>
        </Box>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Button
        variant="outlined"
        sx={{ border: "none", mb: 2, "&:hover": { border: "none" } }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIos />
      </Button>
      <Typography variant="h1" sx={{ p: 3, fontWeight: 500 }}>
        Search Results for "{searchQuery}"
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          my: 3,
        }}
      >
        {filteredProducts.map((item) => (
          <Box key={item.id}>
            <ProductCard data={item} />
          </Box>
        ))}
      </Box>
    </AppLayout>
  );
};

export default SearchByProductsContainer;
