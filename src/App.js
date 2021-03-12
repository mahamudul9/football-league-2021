import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import NotFound from './Components/NotFound/NotFound';
import LeagueInfo from './Components/LeagueInfo/LeagueInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/details/:idLeague'>
          <LeagueInfo/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
