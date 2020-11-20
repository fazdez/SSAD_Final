import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { grey } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import NavLink from "./NavLinks";
import TemporaryDrawer from "./TemporaryDrawer";
import getCurrentUser from "./getCurrentUser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: "10px",
  },
  appBar: { color: grey[900], backgroundColor: theme.palette.primary.main },
}));

export default function NavBar() {
  const classes = useStyles();
  let history = useHistory();

  const navlinks = ["home", "leaderboard", "game"];
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = (e) => {
    history.push(`/${e.currentTarget.id}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            disabled={getCurrentUser() == null}
          >
            <MenuIcon />
          </IconButton>
          {navlinks.map((navlink) => (
            <NavLink
              key={`${navlink}`}
              classes={classes.title}
              handleClick={handleClick}
              name={`${navlink}`}
            />
          ))}
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
