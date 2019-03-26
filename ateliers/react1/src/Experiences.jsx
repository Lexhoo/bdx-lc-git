import React, { Component } from 'react';
import ListTravel from './ListTravel';

const myTravels = [{
  imgSrc: 'https://a0.muscache.com/im/pictures/6435d1b4-f014-4bea-80a5-12488052ff35.jpg?aki_policy=large',
  description: 'randonnée guidée - san diego',
  title: 'incredible slot canyons',
  unitPrice: '43€ par personne',
}, {
  imgSrc: 'https://a0.muscache.com/im/pictures/6435d1b4-f014-4bea-80a5-12488052ff35.jpg?aki_policy=large',
  description: 'randonnée guidée - san diego',
  title: 'incredible slot canyons',
  unitPrice: '50€ par personne',
}, {
  imgSrc: 'https://a0.muscache.com/im/pictures/6435d1b4-f014-4bea-80a5-12488052ff35.jpg?aki_policy=large',
  description: 'randonnée guidée - san diego',
  title: 'incredible slot canyons',
  unitPrice: '25€ par personne',
}];

class Experiences extends Component {
  render() { 
    return (
      <div className="Experiences">
        <h1>Expériences très bien notées :</h1>

        <ListTravel travels={myTravels}/>

        <a href="#">Voir toutes les expériences</a>
      </div>
    );
  }
}
 
export default Experiences;