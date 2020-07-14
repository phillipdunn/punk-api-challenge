import React, { Component } from 'react';
import styles from './Card.module.scss';



class Card extends Component {
    render() { 
        const {name, description, image_url} = this.props.beer;
        const textLimit = description.slice(0, 150) + (description.length > 150 ? "...":"");
     
        return (
            <section className={styles.card}>
                <img src={image_url} alt={name}/>
                <h2>{name}</h2>
                <div>{textLimit}</div>
            </section>
          );
    }
}
 
export default Card;