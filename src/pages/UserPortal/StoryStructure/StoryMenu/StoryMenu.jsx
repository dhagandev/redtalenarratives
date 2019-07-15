import React from 'react';
import './StoryMenu.css';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

const StoryMenu = () => {
  const classes = useStyles();

	return (
		<div className="story-menu">
			<div className="story-menu-addons">
				<Button variant="contained" color="primary" className={classes.button}>
					<Icon className={classes.leftIcon}>add</Icon>
					Scene
				</Button>
				<Button variant="contained" color="primary" className={classes.button}>
					<Icon className={classes.leftIcon}>add</Icon>
					Choice
				</Button>
				<Button variant="contained" color="primary" className={classes.button}>
					<Icon className={classes.leftIcon}>add</Icon>
					Connection
				</Button>
			</div>
			
			<div className="story-menu-state">
				<Button variant="contained" color="primary" className={classes.button}>
					<Icon className={classes.leftIcon}>save</Icon>
					Save
				</Button>
				<Button variant="contained" color="primary" className={classes.button}>
					<Icon className={classes.leftIcon}>get_app</Icon>
					Export
				</Button>
			</div>
		</div>
	)
}

export default StoryMenu;