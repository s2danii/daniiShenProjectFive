import React, { Component } from 'react';
import ResultItem from './ResultItem';
import Egg from '../assets/egg.png';

class Favourites extends Component {

    render () {
        return (
            <div className="favePage">
                <header className="faveHeader">
                    <div className="wrapper">
                        <img className="egg" src={Egg} alt="" />
                        <h2>Your saved places</h2>
                        <p>A place to come back to when you can't decide on where to go for Sunday brunch</p>
                    </div>
                </header>
                <section className="faveSection">
                    <div className="wrapper">
                        <div className="faveGrid">
                            <ResultItem
                                restaurantArray={this.props.favePlaces}
                                deleteClick={this.props.deleteClick}
                                searchOn={this.props.searchOn}/>
                        </div>

                    </div>
                </section>
                <footer>
                    <p>Copyright stuffbydanii 2019</p>
                </footer>
            </div>
            
        )
    }
}

export default Favourites;