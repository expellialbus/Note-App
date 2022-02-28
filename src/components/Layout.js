import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { format } from "date-fns";

import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const classes = {
  drawer: {
    width: 240,

    paper: {
      width: 240,
    },
  },

  item: {
    background: "#f4f4f4",
    width: 240,
  },

  appbar: {
    width: "calc(100% - 240px)",
    background: "#f9f9f9",
  },
};

const menuItem = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
];

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => navigate(path), [path]);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#666666" }}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography sx={{ color: "#666666" }}>Mario</Typography>
          <Avatar
            src="mario-av.png"
            sx={(theme) => ({ marginLeft: theme.spacing(2) })}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={classes.drawer.paper}
      >
        <Typography
          variant="h5"
          sx={(theme) => ({ padding: theme.spacing(3) })}
        >
          Take a Note
        </Typography>
        <List>
          {menuItem.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => setPath(item.path)}
              sx={location.pathname == item.path ? classes.item : {}}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={(theme) => ({
          background: "#f9f9f9",
          width: "100%",
          padding: theme.spacing(3),
        })}
      >
        <Box sx={(theme) => theme.mixins.toolbar} />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
