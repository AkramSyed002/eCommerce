import { CustomBtn, CustomTextField } from "@muc/components";
import { Box, Paper, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

interface ContactFormValues {
    name: string;
    email: string;
    number: string;
    description: string;
  }
const ContactForm = () => {
  const methods = useForm<ContactFormValues>();

  const onSubmit = (e: ContactFormValues) => {
    console.log(e, "-------------");
  };

  return (
    <FormProvider {...methods}>
      <Paper elevation={1} sx={{ padding: "52px 31px" }}>
        <Box component={"form"} onSubmit={methods.handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", gap: "16px" }}>
            <CustomTextField
              type="text"
              name="name"
              placeHolder="Your Name"
              width="235px"
              contact={true}
            />
            <CustomTextField
              placeHolder="Email or Phone Number"
              type="email"
              name="email"
              width="235px"
              contact={true}
            />
            <CustomTextField
              type="number"
              name="number"
              placeHolder="Phone Number"
              width="235px"
              contact={true}
            />
          </Box>
          <TextField
            type="text"
            variant="filled"
            placeholder="Your Message"
            multiline
            rows={6}
            {...methods.register("description")}
            fullWidth
          />
          <Box sx={{ display: "flex", justifySelf: "end", my: 2 }}>
            <CustomBtn
              title="Send Message"
              width="215px"
              height="'56px"
              color="white"
              variant="contained"
              type="submit"
            />
          </Box>
        </Box>
      </Paper>
    </FormProvider>
  );
};

export default ContactForm;
