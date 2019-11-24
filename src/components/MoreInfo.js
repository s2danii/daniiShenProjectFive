import React from 'react';
import ImagePlaceholder from '../assets/imagePlaceholder.jpg';

function MoreInfo (props) {
    const restaurantItem = props.restaurantItem

    return (
        <div className="infoOverlay" onClick={props.toggleInfoModal}>       
            <div className="infoPopUp">                                
                <div className="popUpImage">
                    <img src={restaurantItem.thumb ? restaurantItem.thumb : ImagePlaceholder} alt="" />
                </div>
                
                <div className="restaurantInfo">
                    <button className="closeButton" onClick={props.toggleInfoModal}><i class="fas fa-times"></i></button>
                    <div>
                        <h3>{restaurantItem.name}</h3>
                        <p><i className="fas fa-star"></i> {restaurantItem.rating} ({restaurantItem.votes} votes)</p>
                        <p>{restaurantItem.cuisine}</p>
                        <p>{restaurantItem.address}</p>
                        <p>{restaurantItem.timing}</p>
                        <p>{restaurantItem.phone}</p>
                        <p className="costRank">
                            {props.costRank(restaurantItem.cost)}
                        </p>
                    </div>
                    <a className="menu" href={restaurantItem.menu} target="_blank">See Menu</a>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;