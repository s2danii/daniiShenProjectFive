import React, { Component } from 'react';


class Nav extends Component {
    render () {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="http://" title="Search"><i className="fas fa-search"></i></a>
                    </li>
                    <li>
                        <a href="http://" title="Favorites"><i className="fas fa-bookmark"></i></a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;