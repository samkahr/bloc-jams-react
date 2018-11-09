import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from "./components/Album";
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Media } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

const navStyle = {
  background: "#F53240",
};

const button = {
  background: "F9BE02",
};



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar style={navStyle}>

    <Nav  bsStyle="pills" pullRight style={button}>
    <NavItem>
    <Button bsStyle="info" bsSize="large">
       <Link to='/'>Home</Link>
       </Button>
      </NavItem>

       <NavItem>
       <Button bsStyle="info" bsSize="large">
       <Link to='/library'>Library</Link>
       </Button>
       </NavItem>
</Nav>


    </Navbar>

      <header>
        <h1>Bloc Jams</h1>
        <Media>

   <img src="https://drive.google.com/uc?export=view&id=1pNph-1pKTyxEbrV_1ArjObI8RUpZeS77" alt="thumbnail" thumbnail />

        </Media>
      </header>
      <main>
      <Route exact path="/" component={Landing} />
      <Route path="/library" component={Library} />
      <Route path="/album/:slug" component={Album} />
       </main>
      </div>
    );
  }
}

export default App;
