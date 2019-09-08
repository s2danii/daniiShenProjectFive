import React from 'react';

const BackUpButton = () => {
    return (
        <button className="upButton"
        onClick={() => {
            document.getElementById('header').scrollIntoView({behavior: 'smooth', block: 'start'});
        }

        }>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default BackUpButton;