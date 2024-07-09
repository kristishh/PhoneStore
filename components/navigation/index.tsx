"use client";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Inbox, Mail, Close } from "@mui/icons-material";
import { useState } from "react";
import { theme } from "@/app/theme/theme";
import Auth from "../auth";
import { useRouter } from "next/navigation";

const menuWidth = 240;

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const handleMenuClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleMenuTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleMenuToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const MenuBar = () => (
    <div>
      <Toolbar className="justify-end">
        <IconButton
          color="inherit"
          aria-label="close menu"
          edge="start"
          onClick={handleMenuToggle}
        >
          <Close />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {["Inbox"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar className="flex-row justify-between relative">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleMenuToggle}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              className="cursor-pointer"
              onClick={() => router.push("/")}
            >
              PhoneStore
            </Typography>
          </Toolbar>
          <Toolbar>
            <Auth />
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: menuWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleMenuTransitionEnd}
            onClose={handleMenuClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: menuWidth,
              },
            }}
          >
            <MenuBar />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
              },
            }}
            open
          >
            <MenuBar />
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navigation;
