import React, { Component } from 'react'
import '../style/headLineSection.css'
export class HeadlineMainSection extends Component {

    
    constructor(){
        super();
        this.state = {
            topNews : {}
            
        }
    }

    componentDidMount(){
        fetch('/topbreakingnews')
        .then(res => res.json())
        .then(data => data.forEach(element => {
            
            this.setState({topNews : element})
            
        }))
        

        
        //.then(console.log('Top news fetched ...',this.state.topNews))
    }

    render() {
        return (
            <div>
                <a className="article-large link" href={this.state.topNews.url}>{this.state.topNews.title}</a>
            </div>
        )
    }
}

export default HeadlineMainSection
