import React, { Component } from 'react';
import styles from '../SearchBox/SearchBox.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SearchBox extends Component {

    render() { 
        const { placeholder, updateSearchText} = this.props;
    
        return ( 
            <>
            <FontAwesomeIcon icon="search" />
            <input 
            type='text' 
            placeholder= {placeholder} 
            onInput={(event) => updateSearchText(event.target.value)}
            autoFocus={true}
            className={styles.box}/>
           
            </>
         );
    }
}
 
export default SearchBox;