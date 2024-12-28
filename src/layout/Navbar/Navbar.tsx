import { useState, useEffect } from "react";
import { COLORS, ROUTES } from "@muc/constants";
import {
  FavoriteBorder,
  Menu,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { navLink, searchBar } from "@muc/utils";
import { useCart } from "@muc/context";
import { useNavigate } from "react-router-dom";
import { AccountDropdown } from "@muc/components";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname); // Initialize with current pathname
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Update active link based on the current pathname
  useEffect(() => {
    const handleLocationChange = () => {
      setActiveLink(window.location.pathname);
    };

    // Listen for location changes
    window.addEventListener("popstate", handleLocationChange);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleLinkClick = (route: string) => {
    setActiveLink(route); // Update active link when clicked
  };

  const getLinkStyles = (route: string) => ({
    ...navLink,
    fontWeight: activeLink === route ? "bold" : "normal", // Apply bold font weight for active link
  });

  return (
    <AppBar variant="elevation" position="static" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: isMobile ? "space-between" : "space-around",
          bgcolor: COLORS.white.main,
          alignItems: "center",
          borderBottom: `0.2px solid ${COLORS.gray.main}`,
          overflow: "hidden",
        }}
      >
        {/* Logo Section */}
        <Box component={"a"} href={ROUTES.HOME_PAGE} sx={navLink}>
          <Typography variant="h2">Exclusive</Typography>
        </Box>

        {isMobile ? (
          // Mobile View: Hamburger Menu
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu sx={{ color: COLORS.dark.main }} />
            </IconButton>
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{
                  padding: 2,
                  width: 300,
                }}
              >
                <List>
                  <ListItem>
                    <Link
                      href={ROUTES.HOME_PAGE}
                      onClick={() => handleLinkClick(ROUTES.HOME_PAGE)}
                      sx={getLinkStyles(ROUTES.HOME_PAGE)}
                    >
                      Home
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.ABOUT_PAGE}
                      onClick={() => handleLinkClick(ROUTES.ABOUT_PAGE)}
                      sx={getLinkStyles(ROUTES.ABOUT_PAGE)}
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.CONTACT_PAGE}
                      onClick={() => handleLinkClick(ROUTES.CONTACT_PAGE)}
                      sx={getLinkStyles(ROUTES.CONTACT_PAGE)}
                    >
                      Contact
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.AUTHENTICATION.SIGNUP_FORM}
                      onClick={() =>
                        handleLinkClick(ROUTES.AUTHENTICATION.SIGNUP_FORM)
                      }
                      sx={getLinkStyles(ROUTES.AUTHENTICATION.SIGNUP_FORM)}
                    >
                      Sign Up
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={ROUTES.AUTHENTICATION.SIGNUP_FORM}
                      onClick={() =>
                        handleLinkClick(ROUTES.AUTHENTICATION.SIGNUP_FORM)
                      }
                      sx={getLinkStyles(ROUTES.AUTHENTICATION.SIGNUP_FORM)}
                    >
                      Account
                    </Link>
                  </ListItem>
                </List>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                <Box
                  position={"relative"}
                  onClick={() => navigate(ROUTES.SHOPPING_CART)}
                  ml={5}
                >
                  <ShoppingCartOutlined
                    sx={{ color: COLORS.dark.main, cursor: "pointer" }}
                  />
                  {cart.products.length ? (
                    <Box component={"span"} sx={cartNotification}>
                      {cart.products.length}
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          // Desktop View: Full Navigation Menu
          <>
            <List sx={{ display: "flex", width: "30%" }}>
              <ListItem>
                <Link
                  href={ROUTES.HOME_PAGE}
                  onClick={() => handleLinkClick(ROUTES.HOME_PAGE)}
                  sx={getLinkStyles(ROUTES.HOME_PAGE)}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={ROUTES.CONTACT_PAGE}
                  onClick={() => handleLinkClick(ROUTES.CONTACT_PAGE)}
                  sx={getLinkStyles(ROUTES.CONTACT_PAGE)}
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={ROUTES.ABOUT_PAGE}
                  onClick={() => handleLinkClick(ROUTES.ABOUT_PAGE)}
                  sx={getLinkStyles(ROUTES.ABOUT_PAGE)}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={ROUTES.AUTHENTICATION.SIGNUP_FORM}
                  onClick={() =>
                    handleLinkClick(ROUTES.AUTHENTICATION.SIGNUP_FORM)
                  }
                  sx={getLinkStyles(ROUTES.AUTHENTICATION.SIGNUP_FORM)}
                >
                  Sign Up
                </Link>
              </ListItem>
            </List>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <TextField
                placeholder="What are you looking for?"
                size="small"
                sx={searchBar}
                InputProps={{
                  endAdornment: (
                    <Box
                      component={"img"}
                      src="/assets/icons/Search-icon.svg"
                    />
                  ),
                }}
              />
              <FavoriteBorder
                sx={{ color: COLORS.dark.main, ml: 3, cursor: "pointer" }}
              />
              <Box
                position={"relative"}
                onClick={() => navigate(ROUTES.SHOPPING_CART)}
              >
                <ShoppingCartOutlined
                  sx={{ color: COLORS.dark.main, cursor: "pointer" }}
                />
                {cart.products.length ? (
                  <Box component={"span"} sx={cartNotification}>
                    {cart.products.length}
                  </Box>
                ) : null}
              </Box>
              <AccountDropdown  />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const cartNotification = {
  position: "absolute",
  top: -5,
  right: -4,
  bgcolor: COLORS.primary.main,
  width: "15px",
  height: "15px",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  fontSize: "10px",
  borderRadius: "50px",
  display: "flex",
};
