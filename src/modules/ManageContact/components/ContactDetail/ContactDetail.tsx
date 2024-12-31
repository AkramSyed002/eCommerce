import { COLORS } from "@muc/constants";
import { Box, Divider, Paper, Typography } from "@mui/material";

const ContactDetail = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: "35px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          <Box sx={iconStyle}>
            <Box component={"img"} src="assets/icons/phone-icon.svg" alt="" />
          </Box>
          <Typography variant="body1" color="initial">
            {" "}
            Call To Us
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <Typography variant="body1" color="initial">
            We are available 24/7, 7 days a week.
          </Typography>
          <Typography variant="body1" color="initial">
            Phone: +8801611112222
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          <Box sx={iconStyle}>
            <Box component={"img"} src="assets/icons/mail-icon.svg" alt="" />
          </Box>
          <Typography variant="body1" color="initial">
            {" "}
            Write To US
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <Typography variant="body1" color="initial">
            Fill out our form and we will contact you within 24 hours.
          </Typography>
          <Typography variant="body1" color="initial">
            Emails: customer@exclusive.com
          </Typography>
          <Typography variant="body1" color="initial">
            Emails: support@exclusive.com
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactDetail;

const iconStyle = {
  bgcolor: COLORS.primary.main,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
