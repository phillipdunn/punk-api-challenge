import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from './CardList/CardList';
import NavBar from '../NavBar/NavBar';
import { firestore } from "../../firebase";

class Main extends Component {
    state = { 
        searchText: "",
        beers: this.props.beers
     };

     toggleFav = (beer) => {
        beer.isFav = !beer.isFav;
        beer.isFav
          ? this.props.addToFavourites(beer)
          : this.removeFromFavourites(beer);
      };

     removeFromFavourites =(beer) => {
        firestore
        .collection("beers")
        .doc(beer.name)
        .delete()
        .then(this.setFavouritesState)
        .catch((err) => console.log(err));
     }

     updateSearchText = (searchText) => {
        this.setState({ searchText });
     };

     checkBeerName = (beer) => {
        const beerName = beer.name.toLowerCase();
        return beerName.includes(this.state.searchText.toLowerCase());
      };

    render() { 
        const { user, signInGoogle, signOut } =this.props;
        const matchingBeer = this.state.beers.filter(this.checkBeerName);
        const content = matchingBeer.length ? 
            <CardList beers = {matchingBeer} toggleFav={this.toggleFav}/> :
            <CardList beers = {this.state.beers} toggleFav={this.toggleFav}/>;
        return (
            <section className={styles.main}>
                <NavBar 
                updateSearchText={this.updateSearchText}
                user={user}
                signInGoogle ={signInGoogle} 
                signOut ={signOut}
                />
                {content}
            </section>
          );
    }
}
 
export default Main;