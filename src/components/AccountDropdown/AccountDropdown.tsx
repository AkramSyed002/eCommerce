import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Box, Typography } from "@mui/material";
import {
  Close,
  Logout,
  PersonOutlineOutlined,
  ShoppingBag,
  StarBorder,
} from "@mui/icons-material";
import { COLORS } from "@muc/constants";

const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <PersonOutlineOutlined sx={{ color: COLORS.dark.main }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            background: "linear-gradient(to bottom, #4b4b4b, #1f1f1f)",
            color: COLORS.white.main,
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <PersonOutlineOutlined
              sx={{
                fontSize: 20,
                bgcolor: COLORS.primary.main,
                borderRadius: "50px",
                p: "2px",
              }}
            />
            My Account
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <ShoppingBag /> My Orders
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Close
              sx={{
                fontSize: 20,
                border: `1px solid ${COLORS.white.main}`,
                borderRadius: "50px",
                p: "2px",
              }}
            />{" "}
            My Cancellations
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <StarBorder /> My Reviews
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Logout /> Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountDropdown;
