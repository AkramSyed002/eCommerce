import { AboutService } from "@muc/components";
import { ABOUT_DELIVERY_SERVICES } from "@muc/constants";
import { Box } from "@mui/material";

const OurServices = () => {

  return (
      <Box sx={{ py: "120px" }}>
        <Box sx={{ display: "flex", gap: "88px", width: "943px", mx: "auto" }}>
          {ABOUT_DELIVERY_SERVICES.map((item, index) => (
            <AboutService
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
              width="380px"
            />
          ))}
        </Box>
      </Box>
  );
};

export default OurServices;

  