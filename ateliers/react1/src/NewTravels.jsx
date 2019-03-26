import React, { Component } from 'react';
import ListTravel from './ListTravel';

const myTravels = [{
  imgSrc: 'https://a0.muscache.com/im/pictures/d3ba0027-3876-4eec-b5a7-875e9ecf984d.jpg?aki_policy=large',
  description: 'pasta making',
  title: 'incredible slot canyons',
  unitPrice: '43€ par personne',
}, {
  imgSrc: 'https://a0.muscache.com/im/pictures/d3ba0027-3876-4eec-b5a7-875e9ecf984d.jpg?aki_policy=large',
  description: 'pasta making',
  title: 'incredible slot canyons',
  unitPrice: '50€ par personne',
}, {
  imgSrc: 'https://a0.muscache.com/im/pictures/d3ba0027-3876-4eec-b5a7-875e9ecf984d.jpg?aki_policy=large',
  description: 'pasta making',
  title: 'incredible slot canyons',
  unitPrice: '25€ par personne',
}];

class NewTravels extends Component {
  render() { 
    return (
      <div className="NewTravels">
        <h1>Mes nouveaux voyages près de chez moi :</h1>

        <ListTravel travels={myTravels}/>

        <a href="#">Voir toutes les expériences =></a>
      </div>
    );
  }
}
 
export default NewTravels;