import React, {Component} from 'react';
import axios from 'axios';
import '../partials/App.scss';
import Nav from './Nav';
import MainHeader from './MainHeader';
import Results from './Results';
import Favourites from './Favourites';
import firebase from './firebase';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      userInput: '',
      sortOrder: '',
      searchResults: [],
      backUp: false,
      visible: false,
      searchOn: true,
      favouriteOn: false,
      favePlaces: [],
      addPlace: true,
      removePlace: false,
    }

    this.resultsRef = React.createRef();
    this.headerRef = React.createRef();
  }

  // ON UPDATE - COMPONENTDIDMOUNT
  componentDidMount () {

    // add event listener to scroll to initiate back up button once user has scrolled past a certain
    window.addEventListener('scroll', this.handleScroll);

    // firebase call to retrieve data from database
    const dbref = firebase.database().ref();
    dbref.on('value', (response) => {
      const newFavePlaces = [];
      const data = response.val();

      for (let item in data) {
        newFavePlaces.push(data[item]);
      }

      this.setState({
        favePlaces: newFavePlaces
      });
    })
  }

  componentWillUnmount () {
  window.removeEventListener('scroll', this.handleScroll);
}

// axios call to Zomato API to retrieve restaurant data based on user search
  getRestaurant = (userSearch, userSort, order) => {
    axios({
      method: 'Get',
      url: 'https://developers.zomato.com/api/v2.1/search?',
      dataResponse: 'json',
      headers: {
        'user-key': '2b0993e0c699ef3fdaa848e535d9df9f',
        'Accept': 'application / json'
      },
      params: {
        entity_id: 89,
        entity_type: 'city',
        category: '8',
        sort: userSort,
        order: order,
        q: userSearch
      }
    }).then((res) => {
      // filtering out any results with no votes
      const originalResults = res.data.restaurants.filter((item) => {
        return item.restaurant.user_rating.votes > 0
      })

      // returning an object that holds information about each restaurant
      const restaurantResults = originalResults.map((item) => {
        return {
          name: item.restaurant.name,
          thumb: item.restaurant.featured_image,
          address: item.restaurant.location.address,
          rating: item.restaurant.user_rating.aggregate_rating,
          votes: item.restaurant.user_rating.votes
        }        
      });

      this.setState({
        searchResults: restaurantResults,
        visible: !this.setState.visible,
      })

      this.smoothScroll();
    })
  }

  // function to smooth scroll to results section
  smoothScroll = () => {
    let element = this.resultsRef.current;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getRestaurant(this.state.userInput, '', '')
  }

  // function to make axios call upon button click
  handleClick = (event, chosenCategory, sort) => {
    event.preventDefault();
    this.getRestaurant('', chosenCategory, sort);
    
        this.setState({
      userInput: chosenCategory,
      sortOrder: sort
    });
  }

  // function to calculate user's scroll height to time when the back up button will appear
  handleScroll = () => {
    let element = this.resultsRef.current;

    if (element && window.pageYOffset > element.offsetTop) {
      this.setState({
          backUp: true
      })
    } else {
      this.setState({
        backUp: false
      })
    }
  }

  // function to add restaurant to favourite list in firebase on click of button

  faveClick = (event, restaurantItem, restaurantName) => {
    event.preventDefault();
    const dbRef = firebase.database().ref(restaurantName);
    dbRef.update({...restaurantItem})
  }

  // function to remove restaurant from favourite list in firebase on click of button
  deleteClick = (event, restaurantName) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.child(restaurantName).remove();
  }

  // function to change state to render favourites page instead of search page

  favePage = (event) => {
    event.preventDefault();
    this.setState({
      searchOn: false,
      visible: false,
      favouriteOn: true
    })
  }

  // function to change state to render search page instead of favourite page
  searchPage =(event) => {
    event.preventDefault();
    this.setState({
      searchOn: true,
      favouriteOn: false
    })
  }

  // WHERE EVERYTHING RENDERS
  render () {
    return (
      <div className="App">

        {/* Navigation */}
        <Nav 
        favePage={this.favePage}
        searchPage={this.searchPage}
        searchOn={this.state.searchOn}/>

<<<<<<< HEAD
        
          {this.state.searchOn && <MainHeader
=======
        {/* Mainpage Header */}
          {this.state.searchOn && <MainHeader
            headerRef={this.headerRef}
>>>>>>> firebase
            userInput={this.state.userInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
          />}
          
        {/* Search Results Section */}
        {this.state.visible && <Results
          resultsRef={this.resultsRef}
          headerRef={this.headerRef}
          searchResults={this.state.searchResults}
          userInput={this.state.userInput}
          backUp={this.state.backUp}
          handleScroll={this.handleScroll}
          addPlace={this.state.addPlace}
          removePlace={this.state.removePlace}
          faveClick={this.faveClick}
          deleteClick={this.deleteClick}
          searchOn={this.state.searchOn}
        />}

        {/* Favourites Page */}
        {this.state.favouriteOn && <Favourites 
        favePlaces={this.state.favePlaces}
        deleteClick={this.deleteClick}
        searchOn={this.state.searchOn}
        />}

      </div>
    );
  }

}

export default App;
