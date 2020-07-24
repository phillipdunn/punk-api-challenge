import React, { Component } from 'react';
import './App.css';
// import Main from './Component/Main';
import firebase, { providerGoogle } from "./firebase";
import library from './data/fa-library';
import Routes from './containers/Routes/Routes';
// import beers from './data/beers';
export default class App extends Component {

  state = {
    user: null,
    beers: []
  }

  getBeers = () => {
    return fetch('https://api.punkapi.com/v2/beers')
    .then (response => response.json())
    .then (beersObj => this.setState({beers: beersObj}))
    .catch(error => console.log(error))  
  }

  componentDidMount() {
    this.getUser();
    this.getBeers()
  }
  
  signInGoogle = () => {
    firebase.auth().signInWithRedirect(providerGoogle);
  }

  signOut = () => {
    firebase.auth().signOut();
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }
  
  render() { 
    
    return (
      <>
      <Routes
      user={this.state.user}
      signInGoogle ={this.signInGoogle} 
      signOut ={this.signOut}
      beers={this.state.beers}/>
      </>
    )
  }
}