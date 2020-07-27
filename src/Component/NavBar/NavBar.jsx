import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import SearchBox from './SearchBox/SearchBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

    getSignInOutJsx = () => {
        const { signInGoogle, signOut, user} = this.props;
    
        if (user) {
          return (
            <>
            <span className={styles.signout}>
              <FontAwesomeIcon icon={"sign-in-alt"} size="lg" onClick={signOut}/>
            </span>
            <Link to="/p/favourites">
            <span className={styles.favs}>
              <FontAwesomeIcon icon="heart"/>
            </span> 
            </Link>
            <h4 className={styles.search} onClick={this.toggleOpen}>
              <FontAwesomeIcon icon="search"/>
            </h4> 
          
            </>
          );
        } else {
          return (
            <> 
            <Link to="/">
               <span className={styles.home}>
                 <FontAwesomeIcon icon="home"/>
               </span> 
            </Link>
            <span className={styles.google}>
            <FontAwesomeIcon icon={["fab","google"]} size="lg" onClick={signInGoogle}/>
            </span>
            <h4 className={styles.search} onClick={this.toggleOpen}>
            <FontAwesomeIcon icon="search" />
            </h4>          
            </>
          );
        }
      }

      showUser = () =>{
        const {user} = this.props; 
        if (user) {
            return (
            <p>{user.displayName}</p>
            );
          }
      }


    render() { 

      const { updateSearchText } = this.props;
      const input = this.state.isOpen ? (
        <SearchBox 
        placeholder="Search for beers..."
        updateSearchText={updateSearchText}
        /> 
      ): "";
    return ( 
        
      <section className={styles.navbar}>
        {this.getSignInOutJsx()}{input}
        {this.showUser()}
      </section>
     );
  }
}
 
export default NavBar;