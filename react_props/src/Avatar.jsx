import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    const { image, firstName, lastName } = this.props;
    return (
      <div className="Avatar">
        <img src={image} alt={firstName} />
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    );
  }
}

/* Méthode courte
const Avatar = ({ image, firstName, lastName }) => (
  <div className="Avatar">
    <img src={image} alt={firstName} />
    <p>{firstName}</p>
    <p>{lastName}</p>
  </div>
) */


export default Avatar;