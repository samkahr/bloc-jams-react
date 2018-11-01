import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
                   <Link to='/'>Landing</Link>
                   <br/>
                   <Link to='/library'>Library</Link>
          </nav>
      <header>
        <h1>Bloc Jams</h1>
      </header>
      <main>
      <Route exact path="/" component={Landing} />
      <Route path="/library" component={Library} />
       </main>
      </div>
    );
  }
}

export default App;
