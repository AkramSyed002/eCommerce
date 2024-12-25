import { ROUTES } from "@muc/constants";
import { About, Auth, Contact, Home } from "@muc/screens";
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
      <Route element={<Auth />}>
        <Route path={ROUTES.AUTHENTICATION.SIGNIN_FORM} element={<Auth />} />
        <Route path={ROUTES.AUTHENTICATION.SIGNUP_FORM} element={<Auth />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
