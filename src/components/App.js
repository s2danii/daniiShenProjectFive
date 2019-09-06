import React, {Component} from 'react';
import axios from 'axios';
import '../partials/App.scss';
import Nav from './Nav';
import Form from './Form';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      userInput: '',
      searchResults: [],
      name: '',
      address: '',
      thumbnail: '',
      pageUrl: '',
      rating: '',
      votes: ''
    }
  }



  // ON UPDATE - COMPONENTDIDMOUNT
  componentDidMount () {





  }

  getRestaurant = (userSearch, userSort) => {
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
        sort: userSort,
        q: userSearch
      }
    }).then((res) => {
      // console.log(res)
      const restaurantResults = res.data.restaurants.map((item) => {
        return {
          name: item.restaurant.name,
          url: item.restaurant.url,
          address: item.restaurant.location.adress,
          rating: item.restaurant.user_rating.aggregate_rating,
          votes: item.restaurant.user_rating.votes
        }
      });
      this.setState({
        searchResults: restaurantResults,
      })

      console.log(this.state.searchResults)

    })
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value,
    })
 
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getRestaurant(this.state.userInput, '')
    


    // this.setState({
    //   userTextInput: '',
    // })
  }

  handleClick = (event, chosenCategory) => {
    event.preventDefault();
    console.log('CLICKED')
    console.log(chosenCategory)
    this.setState({
      userInput: chosenCategory
    })

    this.getRestaurant('', this.state.userInput);



  }


  // WHERE EVERYTHING RENDERS
  render () {
    return (
      <div className="App">
        <Nav />

        <h1>logo</h1>

        <Form 
        userInput={this.state.userInput}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        />
        
      </div>
    );
  }

}

export default App;
