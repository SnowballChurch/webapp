import React from 'react';
import {Link} from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import PlaceIcon from '@material-ui/icons/Place';
import InfoIcon from '@material-ui/icons/Info';

import logo from '../static/img/logo.png';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = styled(AppBar)`
  & {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: none;
  }
  
  & $(Button) {
    color: #222
  }
`;

const NavButton = styled(Link)`
  margin: 0 10px;
  padding: 6px 8px;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  color: #222;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const NavLink = styled.a`
  margin: 0 10px;
  padding: 6px 8px;
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  color: #222;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const MenuIconButton = styled(IconButton)`
  margin-left: 10px;
  color: #222;
`;

function Header() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, ['sidebar']: open });
  };

  const classes = useStyles();

  return (
    <div>
      <Navbar position="fixed">
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h6">
            <Link to="/"><img src={logo} width={100} /></Link>
          </Typography>
          <Hidden mdDown>
            <NavButton to="/">About</NavButton>
            <NavButton to="/locations">Locations</NavButton>
            <NavButton to="/events">Events</NavButton>
            <NavButton to="/watch">Watch</NavButton>
            <NavLink href="https://google.com" target="_blank">Shop</NavLink>
            <NavButton to="/give">Give</NavButton>
          </Hidden>
          <Hidden lgUp>
            <MenuIconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </MenuIconButton>
          </Hidden>
        </Toolbar>
      </Navbar>
      <Drawer anchor="right" open={state.sidebar} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button href="#locations">
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="Locations" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header;