import { ThemeProvider } from "@emotion/react";
import Routes from "../Routes/Routes";
import { theme } from "@muc/styles";
import { CartProvider, CategoryProvider, NotificationContextProvider } from "@muc/context";
import { SnackBar } from "@muc/components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <NotificationContextProvider>
          <CategoryProvider>
            <Routes />
            <SnackBar />
          </CategoryProvider>
        </NotificationContextProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
