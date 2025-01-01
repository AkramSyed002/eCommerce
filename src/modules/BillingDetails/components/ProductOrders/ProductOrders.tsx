import { useCart } from "@muc/context";
import { Box, Typography, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";

interface ProductOrdersProps {
  totalPrice: number;
}
const ProductOrders: React.FC<ProductOrdersProps> = ({ totalPrice }) => {
  const { cart } = useCart();
  const productOrder = cart?.products || [];

  const [selectedPayment, setSelectedPayment] = useState("bank");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <Box my={6}>
      {productOrder.map((e, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box display={"flex"} gap={"20px"} alignItems={"center"}>
            <Box
              component={"img"}
              src={e?.poster}
              sx={{ width: "50px", height: "50px" }}
            />
            <Typography variant="body1">{e?.name}</Typography>
          </Box>
          <Typography variant="body1">${e.price.toFixed(2)}</Typography>
        </Box>
      ))}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 3, mt: 4 }}
      >
        <Typography variant="body1">Subtotal:</Typography>
        <Typography variant="body1">${totalPrice}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="body1">Shipping:</Typography>
        <Typography variant="body1">Free</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="body1">Total:</Typography>
        <Typography variant="body1">${totalPrice}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
          justifyContent: "space-between",
        }}
      >
        <FormControlLabel
          value="bank"
          control={
            <Radio
              checked={selectedPayment === "bank"}
              onChange={handlePaymentChange}
              value="bank"
              sx={{
                borderRadius: "50%",
                color:
                  selectedPayment === "bank" ? "black" : "rgba(0, 0, 0, 0.54)",
                "&.Mui-checked": {
                  color: "black",
                },
                "& .MuiSvgIcon-root": {
                  borderRadius: "50%",
                },
              }}
            />
          }
          label="Bank"
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Box component={"img"} src="/assets/images/payment1.svg" />
          <Box component={"img"} src="/assets/images/payment2.svg" />
          <Box component={"img"} src="/assets/images/payment3.svg" />
          <Box component={"img"} src="/assets/images/payment4.svg" />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 1 }}>
        <FormControlLabel
          value="cash"
          control={
            <Radio
              checked={selectedPayment === "cash"}
              onChange={handlePaymentChange}
              value="cash"
              sx={{
                borderRadius: "50%",
                color:
                  selectedPayment === "bank" ? "black" : "rgba(0, 0, 0, 0.54)",
                "&.Mui-checked": {
                  color: "black",
                },
                "& .MuiSvgIcon-root": {
                  borderRadius: "50%",
                },
              }}
            />
          }
          label="Cash on Delivery"
        />
      </Box>
    </Box>
  );
};

export default ProductOrders;
