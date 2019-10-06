import React from "react";
import "./App.css";
import JobGrid from './components/JobGrid'
import JobJumbo from './components/JobJumbo'
import styled from 'styled-components'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Job from './components/Job'


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path='/job-app' component={JobJumbo}/>
      <Route exact path='/job-app' component={JobGrid}/> 
      <Route path='/Job/:id' component={Job}/>
    </Router>
    </div>
  );
}

export default App;
