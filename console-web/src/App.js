import React from 'react';
import './App.css';
import Navbar from './containers/navbar';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className="container">
        <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
