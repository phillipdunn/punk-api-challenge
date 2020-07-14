import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import SearchBox from './SearchBox/SearchBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component {


    getSignInOutJsx = () => {
        const { signInGoogle, signOut, user} = this.props;
    
        if (user) {
          return (
            <span className={styles.faStyles}>
              <FontAwesomeIcon icon={"sign-in-alt"} size="lg" onClick={signOut}/>
            </span> 
          );
        } else {
          return (
            <span className={styles.faStyles}>
            <FontAwesomeIcon icon={["fab","google"]} size="lg" onClick={signInGoogle}/>
            </span>
          );
        }
      }

      showUser = () =>{
        const {user} = this.props; 
        if (user) {
            return (
            <p>Welcome {user.displayName}</p>
            );
          }
      }


    render() { 

      const { updateSearchText } = this.props;
 
    return ( 
        
      <section className={styles.navbar}>
        <SearchBox 
        placeholder="Search for beers..."
        updateSearchText={updateSearchText}
        />
        {this.getSignInOutJsx()}
        {this.showUser()}
      </section>
     );
  }
}
 
export default NavBar;