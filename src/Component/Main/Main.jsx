import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from './CardList/CardList';
import beers from '../../data/beers';
import NavBar from '../NavBar/NavBar';




class Main extends Component {
    state = { 
        beers: beers
     }

    
    render() { 
        console.log(this.state)
        return (
            <section className={styles.main}>
                <NavBar className={styles.nav}/>
                <CardList beers = {this.state.beers}/>
            </section>
          );
    }
}
 
export default Main;