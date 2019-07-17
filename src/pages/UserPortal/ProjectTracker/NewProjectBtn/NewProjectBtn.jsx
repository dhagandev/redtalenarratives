import React from 'react';
import './NewProjectBtn.css';
import config from '../../../../config'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';

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

const NewProjectBtn = ({profile}) => {
	const classes = useStyles();

	function createProject() {
		let pin = document.querySelector('.project-input-name').value
		if (pin) {
			let projectInfo = {
				useruid: profile,
				projectTitle: pin
		    }
		    console.log(projectInfo)

			const response = fetch(`${config.API_URI}/api/projects/addProject`, {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({"projectInfo": projectInfo})
			}).then(response => {
				return <Redirect to="/portal/projects"/>
			})
		}
	}

	return (
		<Popup trigger={
				<Button variant="contained" color="primary" className="{classes.button} new-project-button">
				<Icon className={classes.leftIcon}>add</Icon>
				New Project
				</Button>
			} modal>
			{ close => (
				<div className="modal">
					<div className="header project-forum-title"> Create a Project </div>
					<div className="content project-forum-area">
						
						<label>
							Project Name:
							<input type="text" name="name" className="project-input-name"/>
						</label>
						
					</div>
					<div className="actions">
						<Button
							className="button"
							onClick={() => {
								createProject()
								close()
							}}
						>
							Save
						</Button>
						<Button
							className="button"
							onClick={close}
						>
							Close
						</Button>
					</div>
				</div>
			)}
		</Popup>
	)
}

export default NewProjectBtn;