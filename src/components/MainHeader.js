import React, { Component } from 'react';
import Egg from '../assets/egg.png';

class MainHeader extends Component {
    constructor () {
        super ();
    }

    render() {
        return (
            <header ref={this.props.headerRef} className="mainHeader">
                <div className="wrapper">
                    <h1>brunch.TO</h1>
                    <img className="egg" src={Egg} alt=""/>
                    <p>Find and save the top brunch spots in Toronto</p>
                    <p>(so you'll always have a back-up plan for your Sunday morning)</p>
                    <form className="searchForm" action="">
                        <label id="searchBar" className="visuallyHidden">Search for a brunch restaurant here</label>
                        <input type="text"
                        id="searchBar"
                        title="Search"
                        onChange={this.props.handleChange}
                        value={this.props.userInput}
                        placeholder="Find me some brunch" />
                        <button onClick={this.props.handleSubmit}>
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <p>Or search by rating and price:</p>
                    <a title="Search by rating"
                    onClick={(e) => this.props.handleClick(e, 'rating', 'desc')}
                    className="rating">
                        <i className="fas fa-star"></i>
                    </a>

                    <a title="Search by cost"
                    onClick={(e) => this.props.handleClick(e, 'cost', 'asc')}
                    className="cost">
                        <i className="fas fa-dollar-sign"></i>
                    </a>
                </div>
            </header>
        );
    }
}

export default MainHeader;