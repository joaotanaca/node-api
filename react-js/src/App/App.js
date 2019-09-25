import React from 'react';
import Header from './../components/Header/index';
import Main from './../page/main/index';
import Routes from './../routes'

import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
