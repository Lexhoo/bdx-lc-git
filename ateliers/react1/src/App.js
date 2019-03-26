import React, { Component } from 'react';

import './App.css';
import Experiences from './Experiences';
import NewTravels from './NewTravels';
import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Mon voyage premium :</h1>
        <Travel
          imgSrc="https://a0.muscache.com/im/pictures/d3ba0027-3876-4eec-b5a7-875e9ecf984d.jpg?aki_policy=large"
          title="my title"
          description="my desc"
        />

        <Experiences />
        <NewTravels />
      </div>
    );
  }
}

export default App;
