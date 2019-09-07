import React, { Component } from 'react';


class Form extends Component {
    constructor () {
        super ();
    }



    render() {
        return (
            <header>
                <div className="wrapper">
                    <h1>brunch.TO</h1>
                    <p>Find and save the top brunch places in Toronto</p>
                    <p>(so you'll always have a back-up plan for your Sunday morning)</p>
                    <form className="searchForm" action="">
                        <label id="searchBar" className="visuallyHidden">Search for a brunch restaurant here</label>
                        <input type="text"
                            id="searchBar"
                            onChange={this.props.handleChange}
                            value={this.props.userInput}
                            placeholder="Find me some brunch" />
                        <button onClick={this.props.handleSubmit}>
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <p>or search the city by rating and price:</p>
                    <a href=""
                        onClick={(e) => this.props.handleClick(e, 'rating', 'desc')}
                        className="rating">
                        <i className="fas fa-star"></i>
                    </a>

                    <a href=""
                        onClick={(e) => this.props.handleClick(e, 'cost', 'asc')}
                        className="cost">
                        <i className="fas fa-dollar-sign"></i>
                    </a>
                </div>
            </header>
        );
    }
}

export default Form;