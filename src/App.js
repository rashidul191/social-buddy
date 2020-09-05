import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/NoMatch/Nomatch';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
           <Home/>
        </Route>

        <Route path="/home">
           <Home/>
        </Route>

        <Route path="/post/:postId">
            <PostDetails/>
        </Route>

        <Route path="*">
          <Nomatch/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
