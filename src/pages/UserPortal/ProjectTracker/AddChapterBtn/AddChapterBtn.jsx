import React from 'react';
import './AddChapterBtn.css';
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

const AddChapterBtn = ({useruid, projectId}) => {
	const classes = useStyles();

	function createChapter() {
		let cin = document.querySelector('.chapter-input-name').value
		if (cin) {
			let chapterInfo = {
				useruid: useruid,
				chapterTitle: cin, 
				projectId: projectId
		    }

			const response = fetch(`${config.API_URI}/api/chapters/addChapter`, {
			  method: 'POST',
			  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({"chapterInfo": chapterInfo})
			}).then(response => {
				console.log("Add chapter response")
				console.log(response)
				// return <Redirect to="/portal/projects/storyStructure"/>
			})
		}
	}

	return (
		<Popup trigger={
				<Button className="add-chapter-button">
					<Icon>add</Icon>
				</Button>
			} modal>
			{ close => (
				<div className="modal">
					<div className="header chapter-forum-title"> Add a Chapter </div>
					<div className="content chapter-forum-area">
						
						<label>
							Chapter Name:
							<input type="text" name="name" className="chapter-input-name"/>
						</label>
						
					</div>
					<div className="actions">
						<Button
							className="button"
							onClick={() => {
								createChapter()
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

export default AddChapterBtn;