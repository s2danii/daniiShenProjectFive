import React, {Component} from 'react';

class BackUpButton extends Component {
    render () {
        return (
            // Button that brings user back to top of page
            <button className="upButton"
            onClick={() => {
                let element = this.props.headerRef.current;
                element.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
    
            }>
                <i className="fas fa-arrow-up"></i>
            </button>
        )
    }
}

export default BackUpButton;