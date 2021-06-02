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
            <div className="article-large"><img src={this.state.topNews.urlToImage} alt="img"/>
                            
                <div className="article-large content">
                    <div className="">
                        <a href="#" class="color_fff">
                            <i className="fa fa-clock-o"></i>&nbsp;&nbsp;{Date.parse(this.state.topNews.publishedAt)}
                        </a>
                    </div>
                    <div className="">
                        <a className="article-large link" href={this.state.topNews.url}>{this.state.topNews.title}</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default HeadlineMainSection
