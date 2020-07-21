import React, { Component } from "react";

import {navigate} from "@reach/router";
// import {globalHistory} from "@reach/router";
import firebase from "../../firebase";

class PrivateRoutes extends Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          alert(
            "You must be logged in to view this page. Please click the google icon to sign in with your gmail account."
          );
          navigate("main");
        }
      });
    }
  
    render() {
      const { children } = this.props;
      return <>{children}</>;
    // render() { 
    //     if (!this.props.user) {
    //       globalHistory.navigate("/main");
    //       return null;
    //     } else {
    //       return this.props.children;
    //     }
    }
}
export default PrivateRoutes;