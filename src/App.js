import React from 'react';
import Header from './components/Header';
import { Switch,Route,BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Service from './components/Service';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {
  return (
    <div className='container'>
<Router>
<Switch>
  <Route  path="/" component={Home}  exact/>
  <Route path="/about" component={About} exact/>
  <Route path="/service" component={Service} exact/>
  <Route path="/project" component={Project} exact/>
  <Route path="/contact" component={Contact} exact/>
  <Route path="/register" component={Register} exact/>
  <Route path="/login" component={Login} exact/>
  <Route path="/logout" component={Logout} exact/>
</Switch>

</Router>


    </div>
  )
}

export default App