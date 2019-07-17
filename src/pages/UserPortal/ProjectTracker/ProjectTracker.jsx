import React from 'react';
import './ProjectTracker.css';
import NewProjectBtn from './NewProjectBtn/NewProjectBtn';
import Project from './Project/Project';
import { makeStyles } from '@material-ui/core/styles';

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

const ProjectTracker = ({authenticated, user, userProfile}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	
	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	if (userProfile) {
		let profile = userProfile.profile
		if (profile.projects.length !== 0) {
			return (
				<div className="projectTracker">
					<h1>Hello, {profile.displayName}. Here are your projects:</h1>
					<div className="project-header">
						<div className="num-projects">You have {profile.projects.length} projects.</div>
						<NewProjectBtn
							className="hasProjects"
							profile={profile.uid}
						/>
					</div>
					<div className="project-lists">
						{profile.projects.map((project_uid, index) => (
							<Project
								key={project_uid}
								projectId={profile.projects[index]}
								useruid = {profile.uid}
							/>
						))}

					</div>
				</div>
			)
		} else {
			return (
				<div className="no-projects">
					<div className="no-projects-text">You have no projects at this time.</div>
					<NewProjectBtn
						profile={profile.uid}
					/>
				</div>
			)
		}
	}
	return null;
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