import React, {Component} from 'react';
import ImagePlaceholder from '../assets/imagePlaceholder.jpg';

class ResultItem extends Component {
    constructor () {
        super ();

        this.state = {
            modalItem: []
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

    moreInfo = (event, restaurantItem) => {
        event.preventDefault();
        let modalItem = [restaurantItem]

        this.setState({
            modalItem
        })
    }

    closeModal = (event) => {
        event.preventDefault();
        this.setState({
            modalItem: []
        })
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
                            <button className="moreInfo" onClick={(e) => this.moreInfo(e, restaurantItem)}>More info</button>
                        </div>

                        {/* POP UP MODAL WITH RESTAURANT INFO */}
                        <div className={(this.state.modalItem).includes(restaurantItem) ? 'infoOverlay' : 'infoOverlay popUpOff'}
                        onClick={this.closeModal}>
                            <div className="infoPopUp">                                
                                <div className="popUpImage">
                                    <img src={restaurantItem.thumb ? restaurantItem.thumb : ImagePlaceholder} alt="" />
                                </div>
                                
                                <div className="restaurantInfo">
                                    <button className="closeButton" onClick={this.closeModal}><i class="fas fa-times"></i></button>
                                    <div>
                                        <h3>{restaurantItem.name}</h3>
                                        <p><i className="fas fa-star"></i> {restaurantItem.rating} ({restaurantItem.votes} votes)</p>
                                        <p>{restaurantItem.cuisine}</p>
                                        <p>{restaurantItem.address}</p>
                                        <p>{restaurantItem.timing}</p>
                                        <p>{restaurantItem.phone}</p>
                                        <p className="costRank">
                                            {this.costRank(restaurantItem.cost)}
                                        </p>
                                    </div>
                                    <a className="menu" href={restaurantItem.menu} target="_blank">See Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        )
    }
}

export default ResultItem;