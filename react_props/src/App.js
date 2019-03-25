import React, { Component } from 'react';
import Avatar from './Avatar';
import './App.css';

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar {...bart} />
        <Avatar
          image="https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png"
          firstName="Homer"
          lastName="Simpson"
        />
        <Avatar
          image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png"
          firstName="Lisa"
          lastName="Simpson"
        />
      </div>
    );
  }
}

export default App;
