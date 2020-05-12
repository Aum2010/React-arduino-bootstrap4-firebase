import React from 'react';
import './App.css';
import Index from './components/index'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand " href="#">
    <img src={logo} width="50" height="50" alt=""></img>
  </a>
</nav>
      <Index data={2}/>
    </div>
  );
}

export default App;
