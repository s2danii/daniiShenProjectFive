import React, { Component } from 'react';


class Nav extends Component {
    render () {
        return (
            <nav>
                <h3 className="logo">brunch.TO</h3>
                <ul>
                    <li>
                        <a href="http://" title="Search" onClick={this.props.searchPage} className={this.props.searchOn? 'currentPage': ''}><i className="fas fa-search"></i></a>
                    </li>
                    <li>
                        <a href="http://" title="Favorites" onClick={this.props.favePage} className={this.props.searchOn ? '' : 'currentPage'}><i className="fas fa-bookmark"></i></a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;