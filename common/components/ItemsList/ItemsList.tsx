import React from 'react';
import {Component} from 'react';

import Tile from '../Tile/Tile';

class ItemsList extends Component<any>{

  render() {
    const { items } = this.props;
    const catsMarkup = items.map((item:any , i:number) => {
      return <Tile
              key={i}
              title={item.name}
              number={item.price || item.budgetPercent}
              category={item || null}
              navigation={this.props.navigation}
              />
    });
    return catsMarkup;
  }
}

export default ItemsList;