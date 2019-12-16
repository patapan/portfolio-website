import React from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import AboutMe from "./aboutme.jsx"; 
import SimpleList from './contacts.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Links extends React.Component {
  render() {
    return (
      <div className="links">
      <Router>
      <header className="App-header">
      <header className="topBar">
          <Button href="/" >Home</Button>
          <Button href="/about">About Me</Button>
          <Button href="/socials">Socials</Button>
          <Button onclick="/resume">Resume</Button>
          </header></header>
        <Switch>
        <Route path="/about">
          <header className="welcome"> 
          I'm a student studying CS and Economics at The Univeristy of Queensland. <p></p>
          <header className="body-aboutme">
          I'm in my second last year of studying and I major in machine learning. I write in alot of Java, C and Python. <br></br>
          Outside of coding I'm love to play guitar, moss out and smoke cones. If anyone has ket hmu.
          </header>
          </header>
        </Route>
        <Route path="/socials">
        <header className="App-header"><header className="socials"><SimpleList /></header></header>
        </Route>
        <Route path="/">
          <header className="welcome"> 
            <p>Hi! I'm Alex.</p>I like to program things. 
          </header>
        </Route>
      </Switch>

      
      </Router>
      </div>

    );
  }
}

export default Links;