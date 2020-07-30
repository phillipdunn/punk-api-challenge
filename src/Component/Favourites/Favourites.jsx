import React, { Component } from 'react';
import styles from './Favourites.module.scss';
import CardList from '../Main/CardList/CardList';
import { firestore } from "../../firebase";
import NavBar from '../NavBar/NavBar';
import { Redirect } from '@reach/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

class Favourites extends Component {
    state = { 
        favourites: []
     };

     componentDidMount() {
        this.setFavouritesState();
      }

    setFavouritesState = () => {
        firestore
        .collection("beers")
        .get()
        .then((querySnapshot) => {
          const favourites = querySnapshot.docs.map((doc) => doc.data());
          this.setState({ favourites });
        })
        .catch((err) => console.log(err));
    };

    removeFromFavourites = (beer) => {
        firestore
        .collection("beers")
        .doc(beer.name)
        .delete()
        .then(this.setFavouriteState)
        .catch((err) => console.log(err));
    };

    render() { 
      const { user, signInGoogle, signOut } =this.props;
        const contentObj = this.state.favourites.length ? (
            <section className={styles.favourites}>
            <NavBar  
              className={styles.navBar} 
              user={user}
              signInGoogle ={signInGoogle} 
              signOut ={signOut}/>
            <CardList
              beers={this.state.favourites}
              toggleFav={this.removeFromFavourites}
            />
            </section>
            ) : ( 
              <section className={styles.favourites}>
              <NavBar  
              className={styles.navbar} 
              user={user}
              signInGoogle ={signInGoogle} 
              signOut ={signOut}/>
              <p className={styles.message}>Currently You Have No Favourites</p>
              </section>
          );
        return (
            <section className={styles.favourites}>{contentObj}</section>
          );
    }
}
 
export default Favourites;