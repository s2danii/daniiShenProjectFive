import React, {Component} from 'react';
import BackUpButton from './BackUp';
import ImagePlaceholder from '../assets/imagePlaceholder.jpg';
import ResultItem from './ResultItem';


class Results extends Component {

        render () {
            return (
                <div>
                    <main className="resultSection"
                        id="resultSection">
                        <div className="wrapper">
                            {this.props.backUp && <BackUpButton />}
                            <h2>{(this.props.searchResults.length > 0)? 'Your brunch results' : 'Sorry No results found'}</h2>
                            <p>Based on '{this.props.userInput}'</p>
                            <div className="resultsGrid">
                                <ResultItem
                                restaurantArray={this.props.searchResults}
                                faveClick={this.props.faveClick}/>
                                {/* {this.props.searchResults.map((restaurantItem, index) => {

                                    return (
                                        <div className="restaurantItem" key={index} >
                                            <div className="restaurantImage">
                                                <img src={restaurantItem.thumb ? restaurantItem.thumb : ImagePlaceholder} alt="" />
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
                                })} */}
                            </div>


                        </div>
                    </main>
                    
                    <footer>
                        <p>Copyright stuffbydanii 2019</p>
                    </footer>
                </div>
                
                
                
            );
        }
        
    }

export default Results;