import React from 'react';
import './SideNavBar.css';
import EditableBox from '../EditableBox/EditableBox';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


const SideNavBar = ({authenticated, user, showSideBar}) => {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function toggleDrawer() {
  	if (open) {
  		handleDrawerClose()
  	} else {
  		handleDrawerOpen()
  	}
  }

	if(authenticated && showSideBar) {
		return (
			<div className="sideBar">
				<Drawer
	        className={classes.drawer}
	        variant="persistent"
	        anchor="left"
	        open={open}
	        classes={{
	          paper: classes.drawerPaper,
	        }}
				>
          <List>
            <ListItem button key="Change Projects">
              <ListItemText primary="Change Projects" />
            </ListItem>
          </List>

	        <Divider />

	        <List>
	        	<ListItem button key="Story Structure">
              <ListItemText primary="Story Structure" />
            </ListItem>
            <ListItem button key="Walkthrough">
              <ListItemText primary="Walkthrough" />
            </ListItem>
            <ListItem button key="StoryMap">
              <ListItemText primary="StoryMap" />
            </ListItem>
	        	<ListItem button key="Characters">
              <ListItemText primary="Characters" />
            </ListItem>
	        	<ListItem button key="Dialogue">
              <ListItemText primary="Dialogue" />
            </ListItem>
	        	<ListItem button key="History">
              <ListItemText primary="History" />
            </ListItem>
	        	<ListItem button key="Inspirations">
              <ListItemText primary="Inspirations" />
            </ListItem>
	        </List>

	        <Divider />

	        <List>
	        	<ListItem>
	            <ListItemText primary="Chapter Summary" />
	            <div className="edit-chap-summary">
	            </div>
	          </ListItem>
	          <ListItem>
		          <EditableBox />
	          </ListItem>
	        </List>
				</Drawer>
			</div>
		)
	}
}

export default SideNavBar;