import { Link } from "react-router-dom";

import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

// * importing the icons here
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { OpenCloseProps } from "./types";
import { red } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavItems({ open, closeDrawer }: OpenCloseProps) {
  const theme = useTheme();
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" noWrap component="div">
            PraizDcoDer
          </Typography>
          <IconButton onClick={closeDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Home", "Explore", "Quotes", "Bookmarks"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    !open ? (
                      <Link to="/">
                        <Tooltip title="Home" placement="right">
                          <HomeOutlinedIcon fontSize="large" />
                        </Tooltip>
                      </Link>
                    ) : (
                      <Link to="/">
                        <HomeOutlinedIcon fontSize="large" />
                      </Link>
                    )
                  ) : index === 1 ? (
                    !open ? (
                      <Link to="/Explore">
                        <Tooltip title="Explore" placement="right">
                          <ExploreOutlinedIcon fontSize="large" />
                        </Tooltip>
                      </Link>
                    ) : (
                      <Link to={"/explore"}>
                        <ExploreOutlinedIcon fontSize="large" />
                      </Link>
                    )
                  ) : index === 2 ? (
                    !open ? (
                      <Link to={"/quotes"}>
                        <Tooltip title="Quotes" placement="right">
                          <FormatQuoteOutlinedIcon fontSize="large" />
                        </Tooltip>
                      </Link>
                    ) : (
                      <Link to={"/quotes"}>
                        <FormatQuoteOutlinedIcon fontSize="large" />
                      </Link>
                    )
                  ) : index === 3 ? (
                    !open ? (
                      <Link to={"/bookmarks"}>
                        <Tooltip title="Bookmarks" placement="right">
                          <BookmarkBorderOutlinedIcon fontSize="large" />
                        </Tooltip>
                      </Link>
                    ) : (
                      <Link to={"/bookmarks"}>
                        <BookmarkBorderOutlinedIcon fontSize="large" />
                      </Link>
                    )
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Notifications", "Buy me Coffee", "Settings"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    !open ? (
                      <Tooltip title="Notificatons" placement="right">
                        <Badge badgeContent={4} color="primary">
                          <NotificationsOutlinedIcon fontSize="large" />
                        </Badge>
                      </Tooltip>
                    ) : (
                      <Badge badgeContent={4} color="primary">
                        <NotificationsOutlinedIcon fontSize="large" />
                      </Badge>
                    )
                  ) : index === 1 ? (
                    !open ? (
                      <Tooltip title="Buy me Coffee" placement="right">
                        <LocalCafeOutlinedIcon fontSize="large" />
                      </Tooltip>
                    ) : (
                      <LocalCafeOutlinedIcon fontSize="large" />
                    )
                  ) : index === 2 ? (
                    !open ? (
                      <Tooltip title="Settings" placement="right">
                        <SettingsOutlinedIcon fontSize="large" />
                      </Tooltip>
                    ) : (
                      <SettingsOutlinedIcon fontSize="large" />
                    )
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
