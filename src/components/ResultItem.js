import React, {Component} from 'react';
import ImagePlaceholder from '../assets/imagePlaceholder.jpg';

class ResultItem extends Component {
    constructor () {
        super ();

        this.state = {
            clicked: false,
        }
    }

    costRank = (priceRange) => {
        let dollars = [];
        for (let n = 1; n <= priceRange; n++) {
            dollars.push(n)
        }

        return (
            dollars.map((item, index) => {
                return (
                    <p> <i key={index} className="fas fa-dollar-sign"></i> </p>
                )
            })
        )
    }

    added = (searchedItem) => {
        return (this.props.savedKeys).includes(searchedItem)
    }

    render () {
        return (
            this.props.restaurantArray.map((restaurantItem, index) => {
                return (
                    
                    <div className="restaurantItem" key={index} >
                        
                        <div className="restaurantImage">
                            {this.props.searchOn && this.added(restaurantItem.name) ?
                                <div className="faveOverlay">
                                    <p>Saved</p>
                                </div> : ''}
                            
                            <img src={restaurantItem.thumb ? restaurantItem.thumb : ImagePlaceholder} alt="" />

                            {this.props.searchOn ? 
                                <div>
                                    <label className= "visuallyHidden" htmlFor="faveButton">Click button to add restaurant to your favourites list.</label>
                                    <button name="faveButton" className={this.added(restaurantItem.name)? 'clickedButton favourite' : 'favourite'} title="Add to favourites" onClick={((e) => this.props.faveClick(e, restaurantItem, restaurantItem.name))}>
                                        {this.added(restaurantItem.name) ? <i aria-hidden className="fas fa-heart"></i> : <i aria-hidden className="fas fa-plus"></i>}
                                    </button>
                                </div> : 
                                <div>
                                    <label className="visuallyHidden" htmlFor="faveButton">Click button to remove restaurant from your favourites list.</label>
                                    <button className="favourite" title="Remove from favourites" onClick={((e) => this.props.deleteClick(e, restaurantItem.name))}>
                                        <i className="fas fa-minus"></i>
                                    </button>
                                </div>
                                }
                        </div>

                        <div className="restaurantInfo">
                            <h3>{restaurantItem.name}</h3>
                            <p><i className="fas fa-star"></i> {restaurantItem.rating} ({restaurantItem.votes} votes)</p>
                            <p>{restaurantItem.address}</p>
                            <p className="costRank">
                                {this.costRank(restaurantItem.cost)}
                            </p>
                        </div>
                    </div>
                );
            })
        )
    }
}

export default ResultItem;