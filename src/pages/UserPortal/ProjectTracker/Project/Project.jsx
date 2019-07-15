import React from 'react';
import './Project.css';
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

const Project = ({user, projectTitle}) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}
	
	return (
		<div className="ind-project">
			<div className="project-row">
				<Button
					className="project-btn"
					aria-controls="customized-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					{projectTitle}
				</Button>
				<div className="project-edits">
					<Button
						className="add-chapter-btn"
					>
						<Icon>add</Icon>
					</Button>
					<Button
						className="add-chapter-btn"
					>
						<Icon>edit</Icon>
					</Button>
					<Button
						className="delete-chapter-btn"
					>
						<Icon>delete</Icon>
					</Button>
				</div>
			</div>
			<StyledMenu
				id="customized-menu"
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
									className="add-chapter-btn"
								>
									<Icon>edit</Icon>
								</Button>
								<Button
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

export default Project;