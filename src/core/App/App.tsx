import { ThemeProvider } from "@emotion/react";
import Routes from "../Routes/Routes";
import { theme } from "@muc/styles";
import { CartProvider, NotificationContextProvider } from "@muc/context";
import { SnackBar } from "@muc/components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <NotificationContextProvider>
          <Routes />
          <SnackBar />
        </NotificationContextProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
