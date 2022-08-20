import React, { useState } from 'react';
import logo from './logo.svg';
import '../src/styles/App.css';
import { Card } from './components/Card';
import { Playboard } from './components/Playboard';


function App() {
  return (
    <div>
      <Playboard></Playboard>
    </div>
  );
}

export default App;
