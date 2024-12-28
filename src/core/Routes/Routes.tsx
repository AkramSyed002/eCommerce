import { ROUTES } from "@muc/constants";
import { SignInContainer, SignUpContainer } from "@muc/modules";
import { About, Contact, Home, ShoppingCart } from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<Home />}>
        <Route path={"/"} element={<Home />} />
        <Route path={ROUTES.HOME_PAGE} element={<Home />} />
      </Route>
      <Route path={ROUTES.ABOUT_PAGE} element={<About />} />
      <Route path={ROUTES.CONTACT_PAGE} element={<Contact />} />
      <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCart />} />
      <Route
        path={ROUTES.AUTHENTICATION.SIGNIN_FORM}
        element={<SignInContainer />}
      />
      <Route
        path={ROUTES.AUTHENTICATION.SIGNUP_FORM}
        element={<SignUpContainer />}
      />
    </ReactRoutes>
  );
};

export default Routes;
