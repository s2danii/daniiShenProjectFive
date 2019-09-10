import React, {Component} from 'react';
import ImagePlaceholder from '../assets/imagePlaceholder.jpg';

class ResultItem extends Component {

    render () {
        return (
            this.props.restaurantArray.map((restaurantItem, index) => {

                return (
                    <div className="restaurantItem" key={index} >
                        <div className="restaurantImage">
                            <img src={restaurantItem.thumb ? restaurantItem.thumb : ImagePlaceholder} alt="" />

                            {this.props.searchOn ? 
                                <button className="favourite" title="Add to favourites" onClick={((e) => this.props.faveClick(e, restaurantItem, restaurantItem.name))
                                    }>
                                    {(this.props.savedKeys).includes(restaurantItem.name) ? <i className="fas fa-heart"></i> : <i className="fas fa-plus"></i>}

                                </button> : 
                                <button className="favourite" title="Remove from favourites" onClick={((e) => this.props.deleteClick(e, restaurantItem.name))}>
                                    <i className="fas fa-minus"></i>
                                </button>}
                        </div>

                        <div className="restaurantInfo">
                            <h3>{restaurantItem.name}</h3>
                            <p><i className="fas fa-star"></i> {restaurantItem.rating} ({restaurantItem.votes} votes)</p>
                            <p>{restaurantItem.address}</p>
                        </div>
                    </div>
                );
            })
        )
    }
}

export default ResultItem;

