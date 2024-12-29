import { AppLayout } from "@muc/layout";
import { ProductList } from "../../components/components";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ShoppingCartContainer = () => {
  const location = useLocation();
  return (
    <AppLayout>
      <Box my={{ md: 10, sm: 7, xs: 2 }}>
        <Typography variant="h6">Home{location.pathname}</Typography>
      </Box>
      <ProductList />
    </AppLayout>
  );
};

export default ShoppingCartContainer;
