import React, { Component } from 'react';
import './App.css';
// import Main from './Component/Main';
import firebase, { providerGoogle } from "./firebase";
import library from './data/fa-library';
import Routes from './containers/Routes/Routes';
import beers from './data/beers';
export default class App extends Component {

  state = {
    user: null
  }
  
  componentDidMount() {
    this.getUser();
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
      beers={beers}/>
      </>
    )
  }
}