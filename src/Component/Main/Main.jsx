import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from './CardList/CardList';
import beers from '../../data/beers';
import NavBar from '../NavBar/NavBar';
// import DashBoard from '../../containers/DashBoard/DashBoard'




class Main extends Component {
    state = { 
        searchText: "",
        beers: beers
     };

     updateSearchText = (searchText) => {
        this.setState({ searchText });
     };

     checkBeerName = (beer) => {
        const beerName = beer.name.toLowerCase();
        return beerName.includes(this.state.searchText.toLowerCase());
      };

    render() { 
        const matchingBeer = this.state.beers.filter(this.checkBeerName);
        const content = matchingBeer.length ? 
            <CardList beers = {matchingBeer}/> :
            <CardList beers = {this.state.beers}/>;
        return (
            <section className={styles.main}>
                <NavBar 
                className={styles.nav} 
                updateSearchText={this.updateSearchText}
                user={this.props.user}
                signInGoogle ={this.props.signInGoogle} 
                signOut ={this.props.signOut}
                />
                {content}
            </section>
          );
    }
}
 
export default Main;