import React, { Component } from 'react';
import Travel from './Travel';
import './ListTravel.css';

class ListTravel extends Component {
  render() {
    const {travels} = this.props;
    return (
      <div className="ListTravel">
        {
          travels.map(travel => (
            <Travel {...travel}/>
          ))
        }
      </div>
    );
  }
}

export default ListTravel;