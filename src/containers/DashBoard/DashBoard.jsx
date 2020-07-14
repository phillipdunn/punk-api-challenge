// import React, { Component } from 'react';
// // import styles from './DashBoard.module.scss';
// // import beers from '../../data/beers';
// import CardList from '../../Component/Main/CardList/CardList';

// class DashBoard extends Component {
//     checkBeerName = (beer) => {
//         const beerName = beer.name.toLowerCase();
//         return beerName.includes(this.props.searchText.toLowerCase());
//       };
     
//     render() {
//         const matchingBeer = this.props.beers.filter(this.checkBeerName);
//         const content = matchingBeer.length ? (
//             <CardList beers= {matchingBeer}/>) :
//             ('');
        
//         return  <section>{content}</section> ;
//     }
// }
 
// export default DashBoard;