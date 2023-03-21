import { Fragment } from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function Publishers() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Paper
          variant="outlined"
          sx={{ borderRadius: "2rem", my: 3, background: "primary.main" }}
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
            Publishers
          </Typography>
          <List>
            <ListItemButton>
              <ListItem alignItems="flex-start" disablePadding>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Praise Ogunleye"
                  secondary={
                    <Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        @PraizDcoder
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItem>
              <Button
                variant="outlined"
                // size="medium"
                sx={{
                  borderRadius: 3,
                  textTransform: "capitalize",
                  width: "9rem",
                }}
              >
                View Page
              </Button>
            </ListItemButton>
            <ListItemButton>
              <ListItem alignItems="flex-start" disablePadding>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Rob Collins"
                  secondary={
                    <Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        @RobCollins
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItem>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  textTransform: "capitalize",
                  width: "9rem",
                }}
              >
                View Page
              </Button>
            </ListItemButton>
            <ListItemButton>
              <ListItem alignItems="flex-start" disablePadding>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Peterson Akodi"
                  secondary={
                    <Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        @Peterson Akodi
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItem>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  textTransform: "capitalize",
                  width: "9rem",
                }}
              >
                View Page
              </Button>
            </ListItemButton>
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
    </>
  );
}
