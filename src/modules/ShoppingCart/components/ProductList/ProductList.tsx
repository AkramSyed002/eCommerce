import { COLORS, ROUTES } from "@muc/constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { Box, Paper, Typography } from "@mui/material";
import { useCart } from "@muc/context";
import { Close, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { CustomBtn } from "@muc/components";
import { addTotalPrice, tableContent, tableHead, tableRow } from "@muc/utils";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const { cart, removeProduct, updateCartProductQuantity } = useCart();
  const navigate = useNavigate();
  const products = cart?.products || [];

  const calculateTotal = () => {
    return products
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateCartProductQuantity(id, newQuantity);
    }
  };

  if (products.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          color: COLORS.gray.main,
          mb: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">No products in the cart</Typography>
        <CustomBtn
          title="Return to Shop"
          variant="contained"
          height="40px"
          color={COLORS.white.main}
          onClick={() => navigate(-1)}
        />
      </Box>
    );
  }

  return (
    <Box component={Paper} elevation={0}>
      <TableContainer
        sx={{
          maxHeight: "400px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLORS.primary.main,
            borderRadius: "50px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow sx={tableHead}>
              <TableCell sx={tableContent} align="left">
                Product
              </TableCell>
              <TableCell sx={tableContent} align="left">
                Price
              </TableCell>
              <TableCell sx={tableContent} align="left">
                Quantity
              </TableCell>
              <TableCell sx={tableContent} align="right">
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product?.id} sx={tableRow}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={product.poster || ""}
                    alt={product.name || "Product Image"}
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "8px",
                      marginRight: 2,
                    }}
                  />
                  <Typography variant="body1">{product?.name}</Typography>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50px",
                      position: "absolute",
                      top: 10,
                      left: 10,
                      bgcolor: COLORS.primary.main,
                      cursor: "pointer",
                    }}
                    onClick={() => removeProduct(product.id)}
                  >
                    <Close fontSize="small" sx={{ color: COLORS.white.main }} />
                  </Box>
                </TableCell>
                <TableCell align="left">${product.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: "4px",
                      border: `1px solid ${COLORS.gray.main}`,
                      width: "60px",
                      borderRadius: "4px",
                    }}
                  >
                    <KeyboardArrowDown
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                    />
                    {product?.quantity}
                    <KeyboardArrowUp
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                    />
                  </Box>
                </TableCell>
                <TableCell align="right">
                  ${(product?.price * product?.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: { md: "flex", sm: "flex", xs: "block" },
          justifyContent: "space-between",
          my: 4,
        }}
      >
        <Box my={{ md: 0, sm: 0, xs: 2 }}>
          <CustomBtn
            variant="outlined"
            title="Return to Shop"
            height="40px"
            onClick={() => navigate(-1)}
          />
        </Box>
        <Box
          sx={{
            p: 2,
            border: `2px solid ${COLORS.dark.main}`,
            width: { md: "20%", sm: "50%", xs: "90%" },
            borderRadius: "4px",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Cart Total</Typography>

          <Box sx={addTotalPrice}>
            <Typography variant="body1">SubTotal</Typography>
            <Typography variant="body1">${calculateTotal()}</Typography>
          </Box>
          <Box sx={addTotalPrice}>
            <Typography variant="body1">Shipping</Typography>
            <Typography variant="body1">Free</Typography>
          </Box>
          <Box sx={addTotalPrice}>
            <Typography variant="body1">Total</Typography>
            <Typography variant="body1">${calculateTotal()}</Typography>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", m: "auto", my: 2 }}
          >
            <CustomBtn
              title="Process to checkout"
              width="200px"
              variant="contained"
              height="45px"
              color={`${COLORS.white.main}`}
              onClick={() => navigate(ROUTES.BILLINGS_DETAILS_PAGE)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
