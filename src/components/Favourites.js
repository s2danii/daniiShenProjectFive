import React, { Component } from 'react';
import ResultItem from './ResultItem';


class Favourites extends Component {


    render () {
        return (
            <section className="faveSection">
                <div className="wrapper">
                    <h2>Your saved places</h2>
                    <p>A place to come back to when you can't decide on where to go for Sunday brunch</p>
                    <div className="faveGrid">
                        <ResultItem
                            restaurantArray={this.props.favePlaces} />
                    </div>

                </div>
            </section>
            
        )
    }
}

export default Favourites;