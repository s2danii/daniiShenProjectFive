import React, {Component} from 'react';
import BackUpButton from './BackUp';
import ResultItem from './ResultItem';


class Results extends Component {

        render () {
            return (
                <div>
                    <main className="resultSection"
                        id="resultSection">
                        <div className="wrapper">
                            {this.props.backUp && <BackUpButton />}
                            <h2>{(this.props.searchResults.length > 0)? 'Your brunch results' : 'Sorry No results found'}</h2>
                            <p>Based on '{this.props.userInput}'</p>
                            <div className="resultsGrid">
                                <ResultItem
                                restaurantArray={this.props.searchResults}
                                faveClick={this.props.faveClick}
                                deleteClick={this.props.deleteClick}
                                searchOn={this.props.searchOn}/>
                            </div>


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