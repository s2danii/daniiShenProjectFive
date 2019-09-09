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
                            <button className="favourite" title="Add to favorites" onClick={this.props.searchOn? ((e) => this.props.faveClick(e, restaurantItem, restaurantItem.name)) : ((e) => this.props.deleteClick(e, restaurantItem.name))}>
                                <i className={this.props.searchOn ? "fas fa-plus" : "fas fa-minus"}></i>
                            </button>
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

