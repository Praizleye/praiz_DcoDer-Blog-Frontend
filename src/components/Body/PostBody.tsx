import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Reactions from "./Reactions";
import Trending from "./Trending";
// import a Component which was globally declared
import { DrawerHeader } from "./globals";

export default function PostBody() {
  return (
    <>
      <Grid container spacing={1} direction="row">
        <Grid item lg={8}>
          <Box component="main" sx={{ flexGrow: 1, px: 4, mx: 4, my: 3 }}>
            <DrawerHeader />
            <Stack spacing={3}>
              <Grid container spacing={2} sx={{ position: "relative" }}>
                <Grid item>
                  <Typography
                    component="div"
                    sx={{
                      width: 70,
                      height: 70,
                      position: "absolute",
                      top: 13,
                      left: -2,
                      background: "primary.main",
                    }}
                  ></Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: 66,
                      height: 66,
                      position: "absolute",
                      top: 10,
                      left: -2,
                    }}
                  />
                </Grid>
              </Grid>
              <Paper
                variant="outlined"
                // elevation={8}
                sx={{ borderRadius: "2rem", px: 3, py: 4 }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", px: 4 }}
                    >
                      Praise Ogunleye
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      # Politics and Random
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      component="div"
                      sx={{ fontStyle: "italic", paddingRight: 6, size: "sm" }}
                    >
                      4 mins ago
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ py: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Reactions />
              </Paper>
              <Grid container spacing={2} sx={{ position: "relative" }}>
                <Grid item>
                  <Typography
                    component="div"
                    sx={{
                      width: 70,
                      height: 70,
                      position: "absolute",
                      top: 13,
                      left: -2,
                      background: "primary.main",
                    }}
                  ></Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: 66,
                      height: 66,
                      position: "absolute",
                      top: 10,
                      left: -2,
                    }}
                  />
                </Grid>
              </Grid>
              <Paper
                variant="outlined"
                // elevation={8}
                sx={{ borderRadius: "2rem", px: 3, py: 4 }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", px: 4 }}
                    >
                      Praise Ogunleye
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      # Politics and Random
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      component="div"
                      sx={{ fontStyle: "italic", paddingRight: 6, size: "sm" }}
                    >
                      4 mins ago
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ py: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Reactions />
              </Paper>
              <Grid container spacing={2} sx={{ position: "relative" }}>
                <Grid item>
                  <Typography
                    component="div"
                    sx={{
                      width: 70,
                      height: 70,
                      position: "absolute",
                      top: 13,
                      left: -1,
                      background: "primary.main",
                    }}
                  ></Typography>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{
                      width: 66,
                      height: 66,
                      position: "absolute",
                      top: 10,
                      left: -2,
                    }}
                  />
                </Grid>
              </Grid>
              <Paper
                variant="outlined"
                // elevation={3}
                sx={{ borderRadius: "2rem", px: 3, py: 4 }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold", px: 4, py: 1 }}
                    >
                      Praise Ogunleye
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      # Programming and JavaScript
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      component="div"
                      sx={{ fontStyle: "italic", paddingRight: 6, size: "sm" }}
                    >
                      4 mins ago
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ py: 2, height: "15rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Reactions />
              </Paper>
            </Stack>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Trending />
      </Grid>
    </>
  );
}
