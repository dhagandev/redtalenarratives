import React from 'react';
import './Project.css';
import AddChapterBtn from '../AddChapterBtn/AddChapterBtn'
import config from '../../../../config'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    width: '80%'
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Project = ({projectId, useruid}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [project, setProject] = React.useState(null)
	const domRef = React.createRef()
	
	function handleDelete() {
		console.log("Deleting")
		fetch(`${config.API_URI}/api/projects/deleteProject/${projectId}`, {
					method: 'DELETE'
				})
				.then(res => {
					console.log("Should be deleted now?")
				})
	}

	function handleEdit() {
		console.log("Editting")
	}

	function handleAddChapter() {
		console.log("Add chapter")
	}

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	React.useEffect(() => {
		console.log(domRef.current)
		fetch(`${config.API_URI}/api/projects/getProject/${projectId}`)
			.then(res => res.json())
			.then(res => setProject(res.projectInfo))
	}, [])

	if (project === null) {
		return (
			<div className="went-wrong">Uh oh, something went wrong!</div>
		)
	} else {
		console.log(project)
		return (
		<div className="ind-project">
			<div className="project-row">
				<Button
					ref={domRef}
					className="project-btn"
					aria-controls="customized-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					{project.title}
				</Button>
				<div className="project-edits">
					<AddChapterBtn 
						useruid={useruid}
						projectId={project.id}
					/>
					<Button
						ref={domRef}
						className="add-chapter-btn"
						onClick={handleEdit}
					>
						<Icon>edit</Icon>
					</Button>
					<Button
						ref={domRef}
						className="delete-chapter-btn"
						onClick={handleDelete}
					>
						<Icon>delete</Icon>
					</Button>
				</div>
			</div>
			<StyledMenu
				id="project-tracker-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'].map((text, index) => (
					<div className="chapter-row" key={text}>
						<StyledMenuItem>
							<ListItemText className="chapter-btn" primary={text} />
							<div className="chapter-edits">
								<Button 
									ref={domRef}
									className="add-chapter-btn"
								>
									<Icon>edit</Icon>
								</Button>
								<Button 
									ref={domRef}
									className="delete-chapter-btn"
								>
									<Icon>delete</Icon>
								</Button>
							</div>
						</StyledMenuItem>
					</div>
				))}
			</StyledMenu>
		</div>
		)
	}

}

export default Project;