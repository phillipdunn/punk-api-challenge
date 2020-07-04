import React, { Component } from 'react';
import styles from './Card.module.scss';



class Card extends Component {
    render() { 
        const {name, description, image_url} = this.props.beer;
       
        return (
            <section className={styles.card}>
                <img src={image_url} alt={name}/>
                <h2>{name}</h2>
                <div>{description}</div>
            </section>
          );
    }
}
 
export default Card;