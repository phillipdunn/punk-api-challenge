import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import React, { Component } from "react";
import { firestore } from "../../firebase";
import Main from "../../Component/Main/Main";
import { Router, Redirect } from "@reach/router";
import Favourites from "../../Component/Favourites/Favourites"


class Routes extends Component {
    
    addToFavourites = (beer) => {
        firestore
          .collection("beers")
          .doc(beer.name)
          .set(beer)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };

    render() { 
        const { beers, user, signInGoogle, signOut } =this.props;
        return ( 
            <Router>
                <Redirect noThrow from="/" to="main"/>
                <Main 
                path="main"   
                beers ={beers}
                user={user}
                signInGoogle ={signInGoogle} 
                signOut ={signOut}
                addToFavourites={this.addToFavourites}
                default />
                <PrivateRoutes path="p" user={user}>
                    <Favourites path="favourites"/>
                </PrivateRoutes>
            </Router>  
         );
    }
}
 
export default Routes;