import React, {Component} from 'react';
import BackUpButton from './BackUp';


class Results extends Component {
        render () {
            return (
                <main className="resultSection"
                onScroll={this.props.handleScroll}>

                    <div className="wrapper">
                        {this.props.backUp && <BackUpButton />}
                        <h2>Your brunch results</h2>
                        <p>Based on '{this.props.userInput}'</p>
                        <div className="resultsGrid">
                            {this.props.searchResults.map((restaurantItem, index) => {
                                return (
                                    <div className="restaurantItem" key={index} >
                                        <div className="restaurantImage">
                                            <img src={restaurantItem.thumb} alt="" />
                                            <button className="favourite" title="Add to favorites">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>

                                        <div className="restaurantInfo">
                                            <h3>{restaurantItem.name}</h3>
                                            <p><i className="fas fa-star"></i> {restaurantItem.rating} ({restaurantItem.votes} votes)</p>
                                            <p>{restaurantItem.address}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        
                    </div>
                </main>
            );
        }
        
    }

export default Results;