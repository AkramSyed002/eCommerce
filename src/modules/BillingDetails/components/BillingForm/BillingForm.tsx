import { CustomTextField } from "@muc/components";
import { Box, Typography } from "@mui/material";

const BillingForm = () => {
  return (
    <Box>
      <Typography variant="h1" fontWeight={500} mb={1}>
        Billing Details
      </Typography>
      <Box component={"form"}>
        <CustomTextField
          name="firstName"
          placeHolder="Enter First Name"
          type="text"
          width="470px"
          contact={true}
        />
        <CustomTextField
          name="companyName"
          placeHolder="Company Name"
          type="text"
          width="470px"
          contact={true}
        />
        <CustomTextField
          name="streetAddress"
          placeHolder="Street Address"
          type="text"
          width="470px"
          contact={true}
        />
        <CustomTextField
          name="apartment"
          placeHolder="Apartment floor, etc. (optional)"
          type="text"
          width="470px"
          contact={true}
        />
        <CustomTextField
          name="town"
          placeHolder="Town/City"
          type="text"
          width="470px"
          contact={true}
        />
        <CustomTextField
          name="phoneNumber"
          placeHolder="Phone Number"
          type="text"
          width="470px"
          contact={true}
        />
        <CustomTextField
          name="email"
          placeHolder="Email Address"
          type="text"
          width="470px"
          contact={true}
        />
      </Box>
    </Box>
  );
};

export default BillingForm;
