import { Fragment } from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { DrawerHeader } from "./globals";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Publishers from "./Publishers";

export default function Trending() {
  return (
    <>
      <Grid item>
        <DrawerHeader sx={{ my: 3 }} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Paper
            variant="outlined"
            sx={{
              borderRadius: "2rem",
              my: 3,
              background: "primary.main",
              width: "22.125rem",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              noWrap
              sx={{
                paddingTop: 2,
                px: 2,
                fontWeight: "bold",
              }}
            >
              What's Trending
            </Typography>

            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="#Politics #Nigeria"
                    secondary={
                      <Fragment>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "1.05rem",
                          }}
                          component="div"
                          variant="body2"
                          color="text.primary"
                        >
                          LP won in 19 States
                        </Typography>
                        {
                          " — I'll be in your neighborhood doing errands this weekend throwing sticks…"
                        }
                      </Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="#Politics #Nigeria"
                    secondary={
                      <Fragment>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                          component="div"
                          variant="body2"
                          color="text.primary"
                        >
                          Appeal Court
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="#Politics #Nigeria"
                    secondary={
                      <Fragment>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                          component="div"
                          variant="body2"
                          color="text.primary"
                        >
                          IRev Portal
                        </Typography>
                        {
                          "BREAKING NEWS: Results Obtained from IReV Portal shows that Peter Obi is the winner of the 2023 presidential election"
                        }
                      </Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="#Politics #Nigeria"
                    secondary={
                      <Fragment>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                          component="div"
                          variant="body2"
                          color="text.primary"
                        >
                          Access Bank
                        </Typography>
                        {" —i need to transfer please @no1 bank in Africa"}
                      </Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="#Politics #Nigeria"
                    secondary={
                      <Fragment>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                          component="div"
                          variant="body2"
                          color="text.primary"
                        >
                          LP won in 19 States
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </Fragment>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <ListItemButton>
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  px: 3,
                  py: 2,
                }}
              >
                Show more
              </Button>
            </ListItemButton>
          </Paper>
        </Box>
        <Publishers />
      </Grid>
    </>
  );
}
