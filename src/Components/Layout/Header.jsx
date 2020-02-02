import React from "react";
// EXPORT DEFAULT
import { withRouter } from "react-router-dom";

// IMPORT MUI ELEMENT
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
// IMPORT MUI ICONS
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
