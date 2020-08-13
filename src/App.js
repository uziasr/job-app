import React from "react";
import "./App.css";
import JobGrid from './components/JobGrid'
import JobJumbo from './components/JobJumbo'
import {HashRouter, Route} from 'react-router-dom'
import Job from './components/Job'


function App() {
  return (
    <div className="App">
    <HashRouter>
      <Route exact path='/' component={JobJumbo}/>
      <Route exact path='/' component={JobGrid}/> 
      <Route path='/Job/:id' component={Job}/>
    </HashRouter>
    </div>
  );
}

export default App;
