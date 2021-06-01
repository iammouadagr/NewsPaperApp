import React, { Component } from 'react'
import  NewsTicker, { Directions } from 'react-advanced-news-ticker'



export class BreakingNewsItems extends Component {
    constructor(props){
        super(props);
        this.state = {
           item : { title : props.title, url :props.url}
        }
    }


    
    
    render() {
        return (
                <a href={this.state.item.url}>{this.state.item.title}</a>
                        )

    }
}

export default BreakingNewsItems
