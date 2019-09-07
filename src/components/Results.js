import React, { Component } from 'react';

const Results = (props) => {

        return (
            <main className="resultSection">
                <div className="wrapper">
                    <h2>Brunch results based on '{props.userInput}'</h2>
                    <div className="resultsGrid">
                        {props.searchResults.map((restaurantItem, index) => {
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

export default Results;