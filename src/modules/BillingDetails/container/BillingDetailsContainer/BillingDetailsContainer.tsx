import { AppLayout } from "@muc/layout";
import { Box, Grid } from "@mui/material";
import { BillingForm, ProductOrders } from "../../components/componetns";
import { CustomBtn } from "@muc/components";
import { COLORS } from "@muc/constants";
import { FormProvider, useForm } from "react-hook-form";

interface FormData {
  fName?: string;
  name?: string;
  email?: string;
  address?: string;
  companyName?: string;
  apartment?: string;
  town?: string;
  phoneNumber?: string;
}
const BillingDetailsContainer = () => {
  const methods = useForm<FormData>();

  const onSubmit = (e: FormData) => {
    console.log(e);
  };
  return (
    <AppLayout>
      <FormProvider {...methods}>
        <Grid container spacing={"20px"} sx={{ my: 10 }}>
          <Grid item md={6} sm={6} xs={12}>
            <BillingForm />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <ProductOrders />
            <Box component={"form"} onSubmit={methods.handleSubmit(onSubmit)}>
              <CustomBtn
                variant="contained"
                color={COLORS.white.main}
                title="Place Order"
                width="190px"
                type="submit"
              />
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </AppLayout>
  );
};

export default BillingDetailsContainer;
