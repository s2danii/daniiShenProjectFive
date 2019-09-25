import React, { Component } from 'react';
import Egg from '../assets/egg.png';

class MainHeader extends Component {

    render() {
        return (
            <header ref={this.props.headerRef} className="mainHeader">
                <div className="wrapper">
                    <h1>brunch.TO</h1>
                    <img className="egg" src={Egg} alt=""/>
                    <p>Find and save the top brunch spots in Toronto</p>
                    <p>(so you'll always have a back-up plan for your Sunday morning)</p>
                    <form className="searchForm" action="">
                        <label htmlFor="searchBar" className="visuallyHidden">Search for a brunch restaurant here</label>
                        <input type="text"
                        name="searchBar"
                        title="Search"
                        onChange={this.props.handleChange}
                        value={this.props.userInput}
                        placeholder="Find me some brunch" />
                        <label className="visuallyHidden" htmlFor="search">Click button to search for your query.</label>
                        <button className="visuallyHidden" name="search" onClick={this.props.handleSubmit}>
                            <i aria-hidden className="fas fa-search"></i>
                        </button>
                    </form>
                    <p>Or search by rating and price:</p>
                    <label className="visuallyHidden" htmlFor="rating">Click button to search for all brunch restaurants based on rating.</label>
                    <button name="rating" title="Search by rating"
                    onClick={(e) => this.props.handleClick(e, 'rating', 'desc')}
                    className="rating">
                        <i aria-hidden className="fas fa-star"></i>
                    </button>

                    <label className="visuallyHidden" htmlFor="cost">Click button to search for all brunch restaurants based on cost.</label>
                    <button name="cost" title="Search by cost"
                    onClick={(e) => this.props.handleClick(e, 'cost', 'asc')}
                    className="cost">
                        <i aria-hidden className="fas fa-dollar-sign"></i>
                    </button>
                </div>
            </header>
        );
    }
}

export default MainHeader;