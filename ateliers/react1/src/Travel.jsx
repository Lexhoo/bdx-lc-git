import React, {Component} from 'react';
import './Travel.css';

class Travel extends Component {
  render() {
    const { imgSrc, description, title, unitPrice } = this.props;
    return (
      <div className="Travel">
        <img src={imgSrc} alt="myimage" />
        <div className="description">{description}</div>
        <div className="title">{title}</div>
        <div className="unit-price">{unitPrice}</div>
      </div>
    );
  }
}

export default Travel;