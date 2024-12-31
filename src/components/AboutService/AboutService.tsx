import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

type dataType = {
  icon: string;
  title: string;
  description: string;
  index: number;
  isActive?: boolean;
  onActivate?: (index: number) => void | undefined;
  width?: string;
};

const AboutService = (props: dataType) => {
  const { icon, title, description, index, isActive, onActivate, width } =
    props || {};
  return (
    <Box
      onClick={() => onActivate && onActivate(index)}
      sx={{
        border: `1px solid ${COLORS.gray.darkGray}`,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: `3px 5px 8px ${COLORS.gray.darkGray}`,
        gap: "24px",
        p: "4px",
        width: width ? width : "249px",
        height: "161px",
        cursor: onActivate ? "pointer" : "default",
        bgcolor: isActive ? COLORS.primary.main : "transparent",
      }}
    >
      <Box
        sx={{
          backgroundColor: isActive
            ? `rgba(255, 255, 255, 0.3)`
            : COLORS.gray.darkGray,
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            bgcolor: isActive ? COLORS.white.main : COLORS.dark.main,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            src={icon}
            style={{
              filter: isActive ? "invert(1)" : "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
            alt="icon"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: onActivate ? "20px" : '15px',
            fontWeight: 600,
            color: isActive ? COLORS.white.main : COLORS.dark.main,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: isActive ? COLORS.white.main : COLORS.dark.main }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutService;
