import React, { Component } from 'react';
import './App.css';
import Main from './Component/Main';
import firebase, { providerGoogle } from "./firebase";
import library from './data/fa-library';
export default class App extends Component {

  state = {
    user: null
  }
  
  componentDidMount() {
    this.getUser();
  }
  
  signInGoogle = () => {
    console.log("test this is working");
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
      <Main 
      user={this.state.user}
      signInGoogle ={this.signInGoogle} 
      signOut ={this.signOut}
      />
      </>
    )
  }
}