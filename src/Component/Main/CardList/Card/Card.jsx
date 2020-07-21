import React, { Component } from 'react';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Card extends Component {
    state = {
        isFav: this.props.beer.isFav,
      };

      toggleFav = (e) => {
        e.stopPropagation();
        this.props.toggleFav(this.props.beer);
        this.setState({ isFav: !this.state.isFav });
      };

    render() { 
        const {name, description, image_url} = this.props.beer;
        const titleLimit = name.slice(0,15) + (name.length > 15? "...": "");
        const textLimit = description.slice(0, 150) + (description.length > 150 ? "...":"");
        const heartIcon = this.state.isFav ? ["fas", "heart"] : ["far", "heart"];

        return (
            <section className={styles.card}>
                <span className={styles.heart} onClick={this.toggleFav}>
                <FontAwesomeIcon icon={heartIcon} />
                </span>
                <img src={image_url} alt={name}/>
                <h2>{titleLimit}</h2>
                <div>{textLimit}</div>
            </section>
          );
    }
}
 
export default Card;