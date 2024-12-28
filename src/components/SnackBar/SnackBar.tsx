import React from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import { useSuccessErrorNotification } from "@muc/context";
import { COLORS } from "@muc/constants";

const SnackBar: React.FC = () => {
  const { alert, setAlert } = useSuccessErrorNotification();

  return (
    <Snackbar
      open={alert.show}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={1000}
      onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
    >
      <Alert
        sx={{
          bgcolor: COLORS?.primary.lightBrown,
          minWidth: { md: 310, sm: 310, xs: "250px" },
          borderRadius: "8px",
          p: "8px 12px",
          border: `2px solid ${COLORS.primary.main}`,
        }}
        icon={true}
      >
        <Typography
          variant="h5"
          fontSize={"14px"}
          color={
            alert.variant === "success"
              ? COLORS?.white.main
              : COLORS?.secondary.main
          }
        >
          {alert?.message.title}
        </Typography>
        <Typography variant="body1" fontSize={"14px"}>
          {alert?.message.subTitle}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
