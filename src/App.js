
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Main from './components/Main';

import Card from './card/Card';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Main /> */}

      <div className='cont'>
        <Card />
        <Card />
      </div>

     
    
    </div>
  );
}

export default App;
