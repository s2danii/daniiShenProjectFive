import React, { Component } from 'react';

const Results = (props) => {

        return (
            <main className="resultSection">
                <div className="wrapper">
                    <h2>Search Results</h2>
                    {props.searchResults.map((restaurantItem, index) => {
                        return (
                        <div className="restaurantItem" key={index} >
                            <div className="restaurantImage">
                                <img src={restaurantItem.thumb} alt="" />
                            </div>
                            <h3>{restaurantItem.name}</h3>
                            <p>{restaurantItem.address}</p>
                            <p>{restaurantItem.rating}</p>
                        </div>
                        );
                    })}
                </div>
            </main>

        );
    }

export default Results;