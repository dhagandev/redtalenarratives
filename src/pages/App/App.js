import React, { Component } from 'react';
import './App.css';
import config from '../../config'
import { auth } from '../../utils/firebaseService'
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import NeedLogin from '../../components/NeedLogin/NeedLogin';
import Landing from '../Landing/Landing';
import FAQ from '../FAQ/FAQ';
import Prices from '../Prices/Prices';
import Contact from '../Contact/Contact';
import ProjectTracker from '../UserPortal/ProjectTracker/ProjectTracker';
import StoryStructure from '../UserPortal/StoryStructure/StoryStructure';
import Characters from '../UserPortal/Characters/Characters';
import DialogueManager from '../UserPortal/DialogueManager/DialogueManager';
import History from '../UserPortal/History/History';
import WalkThrough from '../UserPortal/WalkThrough/WalkThrough';
import PrivateRoute from '../../utils/privateRoute';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bf0000'
    },
    primaryVariant: {
      main: '#EFB560'
    },
    secondary: {
      main: '#707271'
    },
    secondaryVariant: {
      main: '#D3DDDA'
    }
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitState()}
  }

  getInitState() {
    return {
      authenticated: false,
      user: null,
      userProfile: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user: user
        })
        this.createUserProfile()
          .then(profile => {
            this.setState({
              userProfile: profile
            })
          })
          .catch(err => console.log(err))
        
      } else {
        this.setState({
          authenticated: false,
          user: null,
          userProfile: null
        })
      }
    })
  }

  createUserProfile = async () => {
    const currUser = this.state.user;
    let userInfo = {
      uid: currUser.uid,
      displayName: currUser.displayName,
      email: currUser.email,
      photoURL: currUser.photoURL,
      emailVerified: currUser.emailVerified
    }

    const response = await fetch(`${config.API_URI}/api/users/addUser`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"userInfo": userInfo})
    })
    const body = await response.json()

    return body;
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="RedTaleApp">
            <TopNavBar 
              authenticated={this.state.authenticated}
            />
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/faq" component={FAQ}/>
              <Route path="/prices" component={Prices}/>
              <Route path="/contact" component={Contact}/>
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                path="/portal/projects" 
                component={ProjectTracker} 
              />
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                showSideBar
                project_id="?"
                path="/portal/projects/story" 
                component={StoryStructure} 
              />
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                showSideBar
                project_id="?"
                path="/portal/projects/:project_id/characters" 
                component={Characters} 
              />
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                showSideBar
                project_id="?"
                character_id="?"
                path="/portal/projects/:project_id/characters/:character_id" 
                component={Characters} 
              />
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                showSideBar
                project_id="?"
                path="/portal/projects/:project_id/dialogue" 
                component={DialogueManager} 
              />
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                showSideBar
                project_id="?"
                path="/portal/projects/:project_id/history" 
                component={History} 
              />
              <PrivateRoute 
                authenticated={this.state.authenticated}
                user={this.state.user}
                userProfile={this.state.userProfile}
                showSideBar
                project_id="?"
                path="/portal/projects/:project_id/read" 
                component={WalkThrough} 
              />
              <Route path="/login" render={props => (
                  <NeedLogin 
                    {...props}
                    authenticated={this.state.authenticated}
                  />
              )} />
            </Switch>
            
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;