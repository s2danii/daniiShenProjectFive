import React, {Component} from 'react';
import axios from 'axios';
import '../partials/App.scss';
import Nav from './Nav';
import Form from './Form';
import Results from './Results';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      userInput: '',
      sortOrder: '',
      searchResults: [],
      searchOffset: -6
    }
  }

  // ON UPDATE - COMPONENTDIDMOUNT
  componentDidMount () {





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
        count: 6,
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
        searchOffset: this.state.searchOffset + 6
      })

      // console.log(this.state.searchResults)

    })
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value,
    })

  }

  handleSubmit = event => {
    event.preventDefault();
    this.getRestaurant(this.state.userInput, '', '')
    


    // this.setState({
    //   userInput: '',
    // })
  }

  handleClick = (event, chosenCategory, sort) => {
    event.preventDefault();
    console.log('CLICKED')
    console.log(chosenCategory, sort)

    this.getRestaurant('', chosenCategory, sort);
        this.setState({
      userInput: chosenCategory,
      sortOrder: sort
    });
  }

  // handleScroll = (event) => {
  //   let lastResult = document.querySelector(".resultsGrid > div:last-child");
  //   let lastResultOffset = lastResult.offsetTop + lastResult.clientHeight;
  //   let pageOffset = window.pageYOffset + window.innerHeight;
  //   if (lastResultOffset > pageOffset) {
  //     this.getRestaurant
  //   }
  // }

  // WHERE EVERYTHING RENDERS
  render () {
    return (
      <div className="App">
        <Nav />


        <Form 
        userInput={this.state.userInput}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        />

      <Results 
      searchResults={this.state.searchResults}
      userInput={this.state.userInput}
      />

      <footer>
        <p>Copyright stuffbydanii 2019</p>
      </footer>

      </div>
    );
  }

}

export default App;
