import {
  COLORS,
  EXPLORE_OUR_PRODUCTS,
  PRODUCT_CARD,
  ROUTES,
  TOP_SELLING_PRODUCTS,
} from "@muc/constants";
import { navLink } from "@muc/utils";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const AsideLinkMenu = () => {
  const [open, setOpen] = useState<string | null>(null);
  const navigate = useNavigate();

  const allProductData = [
    ...PRODUCT_CARD,
    ...TOP_SELLING_PRODUCTS,
    ...EXPLORE_OUR_PRODUCTS,
  ];

  const handleToggle = (menu: string) => {
    setOpen((prev) => (prev === menu ? null : menu));
  };

  const navigateToCategory = (category: string) => {
    const filteredProducts = allProductData.filter(
      (product) => product.category === category
    );
  
    navigate(`${ROUTES.FILTERS_PRODUCTS_PAGE}/${category}`, {
      state: { filteredProducts },
    });
  };

  const menuItems = [
    {
      title: "Women's Fashion",
      key: "womens",
      subItems: ["Dresses", "Tops"],
    },
    {
      title: "Men's Fashion",
      key: "mens",
      subItems: ["Shirts", "Pants"],
    },
  ];

  const otherLinks = [
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <Box
      sx={{
        width: "20%",
        borderRight: `1px solid ${COLORS.gray.main}`,
        display: { md: "flex", sm: "none", xs: "none" },
      }}
    >
      <List>
        {menuItems.map(({ title, key, subItems }) => (
          <Box key={key}>
            <ListItem>
              <Typography
                variant="body1"
                onClick={() => handleToggle(key)}
                sx={navLink}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  gap={"40px"}
                >
                  <Typography>{title}</Typography>
                  <IconButton size="small">
                    {open === key ? (
                      <ExpandLess sx={{ color: COLORS.dark.main }} />
                    ) : (
                      <ExpandMore sx={{ color: COLORS.dark.main }} />
                    )}
                  </IconButton>
                </Box>
              </Typography>
            </ListItem>
            <Collapse in={open === key} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subItems.map((item, idx) => (
                  <ListItem key={idx}>
                    <Typography
                      variant="body1"
                      onClick={() => navigateToCategory(item)}
                      sx={{
                        color: COLORS.primary.main,
                        textDecoration: "none",
                        pl: 2,
                        cursor: "pointer",
                      }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
        {otherLinks.map((link, index) => (
          <ListItem key={index}>
            <Typography
              variant="body1"
              onClick={() => navigateToCategory(link)}
              sx={navLink}
            >
              {link}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AsideLinkMenu;
