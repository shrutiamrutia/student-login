import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Account from './Components/Account';
import Students from './Components/students';
import TeacherLogin from './Components/TeacherLogin'
import './main.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/account' component={Account} />
            <Route path='/students' component={Students} />
            <Route path='/TeacherLogin' component={TeacherLogin} />
            {/* <Redirect from="/" to="/student" /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;