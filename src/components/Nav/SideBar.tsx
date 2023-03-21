import * as React from "react";

import NavItems from "./NavItems";

import TopAppBar from "./TopAppBar";

import Box from "@mui/material/Box";

import PostBody from "../Body/PostBody";

export const drawerWidth = 240;

export default function SideBar() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopAppBar open={open} openDrawer={handleDrawerOpen} />
      <NavItems open={open} closeDrawer={handleDrawerClose} />
      <PostBody />
    </Box>
  );
}
