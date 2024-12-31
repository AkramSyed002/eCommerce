import { useState } from "react";
import { AboutService } from "@muc/components";
import { Box } from "@mui/material";
import { ABOUT_ANALYTIC_SERVICES } from "@muc/constants";

const AnalyticCard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleStateChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box
      py={"140px"}
      justifyContent={"center"}
      display={"flex"}
      sx={{ display: "flex", py: "120px", gap: "30px" }}
    >
      {ABOUT_ANALYTIC_SERVICES.map((item, index) => (
        <AboutService
          icon={item.icon}
          title={item.title}
          description={item.description}
          index={index}
          isActive={activeIndex === index}
          onActivate={handleStateChange}
        />
      ))}
    </Box>
  );
};

export default AnalyticCard;
