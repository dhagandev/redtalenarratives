import React, { Component } from 'react';
import './App.css';
import { auth } from '../../utils/firebaseService'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar/TopNavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitState()}
  }

  getInitState() {
    return {
      authenticated: false,
      user: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          user
        })
      } else {
        this.setState({
          authenticated: false,
          user: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
          <div className="RedTaleApp">

            <TopNavBar 
              authenticated={this.state.authenticated}
            />

            <Switch>
              <Route exact path="/" />
              <Route path="/faq" />
              <Route path="/prices" />
              <Route path="/contact" />
            </Switch>
            
          </div>
        </Router>
    );
  }
}

export default App;
