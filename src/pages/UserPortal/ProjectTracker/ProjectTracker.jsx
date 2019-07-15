import React from 'react';
import './ProjectTracker.css';
import Project from './Project/Project'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
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

const ProjectTracker = ({authenticated, user, showSideBar}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}
	
	return (
		<div className="projectTracker">
			<h1>Hello, user. Here are your projects:</h1>
			<div className="project-header">
				<div className="num-projects">You have x projects.</div>
				<Button variant="contained" color="primary" className="{classes.button} new-project-button">
					<Icon className={classes.leftIcon}>add</Icon>
					New Project
				</Button>
			</div>
			<div className="project-lists">
				<Project
					projectTitle="Project 1"
				/>
				<Project
					projectTitle="Project 2"
				/>
				<Project
					projectTitle="Project 3"
				/>
			</div>
		</div>
	)
}

/*
<div className="no-projects">
	<div className="no-projects-text">You have no projects at this time.</div>
	<Button variant="contained" color="primary" className={classes.button}>
		<Icon className={classes.leftIcon}>add</Icon>
		New Project
	</Button>
</div>
*/

export default ProjectTracker;