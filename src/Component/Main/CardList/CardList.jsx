// const { default: Card } = require("./Card/Card");

import React, {Component} from 'react';
import styles from './CardList.module.scss';
import Card from './Card/Card';



class CardList extends Component {
    getCard = (beer) =>(
        <div className={styles.card} key={beer.id}>
          <Card beer={beer} toggleFav={this.props.toggleFav}/>  
        </div>
    );

    render() { 
        const { beers } = this.props;
    return (  
        <section className={styles.cardList}>{beers.map(this.getCard)}</section>
        );
    }
}
 
export default CardList ;