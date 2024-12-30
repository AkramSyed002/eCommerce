import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

const FreeServices = () => {
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.gray.main}`,
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: {md:"80%"},
      }}
    >
      <Box p={1.5} sx={{ display: "flex", gap: "20px" }}>
        <Box component={"img"} src="/assets/icons/deliveryCar-icon.svg" />
        <Box>
          <Typography variant="h5" fontSize={{md:'auto',sm:'17px',xs:'20px'}}>Free Deliver</Typography>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur. Iure, illum.
          </Typography>
        </Box>
      </Box>
      <Box p={1.5} sx={{ display: "flex", gap: "20px" }}>
        <Box component={"img"} src="/assets/icons/deliveryReturn-icon.svg" />
        <Box>
          <Typography variant="h5" fontSize={{md:'auto',sm:'17px',xs:'20px'}}>Return to Delivery</Typography>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur. Iure, illum.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeServices;
