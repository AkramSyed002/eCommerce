import { COLORS } from "@muc/constants";
import { AppLayout } from "@muc/layout";
import { Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { ContactDetail, ContactForm } from "../../components/components";

const ContactContainer = () => {
  const location = useLocation();
  return (
    <AppLayout>
      <Box sx={{ py: "80px" }}>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: COLORS.dark.main,
              fontSize: "14px",
            }}
          >
            Home {location.pathname}
          </NavLink>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            paddingY: "90px",
          }}
        >
          <Grid item md={3} width={"100%"}>
            <ContactDetail />
          </Grid>

          <Grid item md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
};

export default ContactContainer;
