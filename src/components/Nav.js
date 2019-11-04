import React, { Component } from 'react';

class Nav extends Component {
    render () {
        return (
            <nav>
                <h3 className="logo">brunch.TO</h3>
                <ul>
                    <li>
                        <a title="Log in" onClick={this.props.login} aria-label="Log in"><i class="fas fa-user"></i></a>
                    </li>
                    <li>
                        <a title="Search" onClick={this.props.searchPage} aria-label="Go to main search page" className={this.props.searchOn? 'currentPage': ''}><i aria-hidden className="fas fa-search"></i></a>
                    </li>
                    <li>
                        <a title="Favorites" onClick={this.props.favePage} aria-label="Go to favourite page" className={this.props.searchOn ? '' : 'currentPage'}><i aria-hidden className="fas fa-bookmark"></i></a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;