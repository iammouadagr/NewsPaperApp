import React, { Component } from 'react';
import Ticker from 'react-ticker'
import BreakingNews from './BreakingNewsItems'

class BreakingNewsHeader extends Component {

    

    render() {
        return (
            <div className="breaking-news-container" >
                    <div className="container">
                        <div className ="row">
                            <div className="col-12">
                                <div className="breaking-news-wrapper ">
                                    <h5 href="#" className="breaking-news-title float-left">Breaking news</h5>

                                    <Ticker offset={0} speed={5} height={40} mode={'smooth'}>
                                        {() => <BreakingNews />}
                                    </Ticker>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            
        );
    }
}

export default BreakingNewsHeader;
