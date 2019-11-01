import React, {Component} from 'react';
import BackUpButton from './BackUp';
import ResultItem from './ResultItem';

class Results extends Component {
        render () {
            return (
                <div>
                    <main
                    ref={this.props.resultsRef}
                    className="resultSection">
                        <div className="wrapper">
                            {this.props.backUp && <BackUpButton
                            headerRef={this.props.headerRef}/>}
                            <h2>{(this.props.searchResults.length > 0)? 'Your brunch results' : 'Sorry No results found'}</h2>
                            <p>Based on '{this.props.userInput}'</p>
                            <div className="resultsGrid">
                                <ResultItem
                                restaurantArray={this.props.searchResults}
                                faveClick={this.props.faveClick}
                                deleteClick={this.props.deleteClick}
                                searchOn={this.props.searchOn}
                                savedKeys={this.props.savedKeys}
                                popUp={this.props.popUp}/>
                            </div>
                            <button className="moreResults" onClick={this.props.moreResults}>More results</button>
                        </div>
                    </main>
                    
                    <footer>
                        <p>Copyright stuffbydanii 2019</p>
                    </footer>
                </div>
            );
        } 
    }

export default Results;