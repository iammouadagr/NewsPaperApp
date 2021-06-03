import React, { Component } from 'react'
import HeadLineSection from './HeadLineSection'
import ReactDOM from 'react-dom';


export class Home extends Component {

    render() {
        return (
            <>
                <HeadLineSection />
            </>
        )
    }
}

ReactDOM.render(<Home/>, document.getElementById('main-content'));
export default Home



