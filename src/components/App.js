import React, {Component} from 'react';
import axios from 'axios';
import '../partials/App.scss';
import Nav from './Nav';
import Form from './Form';
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
      favouritePage: false,
      favePlaces: [],
    }
  }

  // ON UPDATE - COMPONENTDIDMOUNT
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);

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
        // count: 6,
        start: this.state.searchOffset + 6,
        sort: userSort,
        order: order,
        q: userSearch
      }
    }).then((res) => {
      const originalResults = res.data.restaurants.filter((item) => {
        return item.restaurant.user_rating.votes > 0
      })

      const restaurantResults = originalResults.map((item) => {
        return {
          name: item.restaurant.name,
          thumb: item.restaurant.featured_image,
          url: item.restaurant.url,
          address: item.restaurant.location.address,
          rating: item.restaurant.user_rating.aggregate_rating,
          votes: item.restaurant.user_rating.votes
        }        
      });

      this.setState({
        searchResults: restaurantResults,
        visible: !this.setState.visible
      })

      this.smoothScroll();

    })
  }

  smoothScroll = () => {
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  handleClick = (event, chosenCategory, sort) => {
    event.preventDefault();
    this.getRestaurant('', chosenCategory, sort);
    
        this.setState({
      userInput: chosenCategory,
      sortOrder: sort
    });
  }

  handleScroll = () => {
    let element = document.getElementById('resultSection')

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

  faveClick = (event, restaurantItem) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push({...restaurantItem})
  }

  favePage = (event) => {
    event.preventDefault();
    this.setState({
      searchOn: false,
      visible: false,
      favouritePage: true
    })
  }

  searchPage =(event) => {
    event.preventDefault();
    this.setState({
      searchOn: true,
      favouritePage: false
    })
  }

  // WHERE EVERYTHING RENDERS
  render () {
    return (
      <div className="App">
        <Nav 
        faveButton={this.favePage}
        searchButton={this.searchPage}/>

        
          {this.state.searchOn && <Form
            userInput={this.state.userInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleClick={this.handleClick}
          />}
          
        


        {this.state.visible && <Results
          searchResults={this.state.searchResults}
          userInput={this.state.userInput}
          backUp={this.state.backUp}
          handleScroll={this.handleScroll}
          faveClick={this.faveClick}
        />}

        {this.state.favouritePage && <Favourites 
        favePlaces={this.state.favePlaces}/>}

      </div>
    );
  }

}

export default App;
