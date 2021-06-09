import React, { Component } from 'react'




export class BreakingNewsItems extends Component {
    constructor(props){
        super(props);
        this.state = {
           item : { id: props.id, title : props.title, url :props.url}
        }
    }


    
    
    render() {
        return (
                <a href={"/breakingNews/"+this.state.item.id}>{this.state.item.title}</a>
                        )

    }
}

export default BreakingNewsItems
