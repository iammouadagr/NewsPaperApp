import React, { Component } from 'react'

export class HeadlineEntertainment extends Component {

    constructor(){
        super();
        this.state = {
            topNews : {}
            
        }
    }

    componentDidMount(){
        fetch('/topentertainment')
        .then(res => res.json())
        .then(data => data.forEach(element => {
            
            this.setState({topNews : element})
            
        }))

    }
    render() {
        return (
            <div className="article-medium"><img src={this.state.topNews.urlToImage} alt="img"/>
            <div className="article-medium content">
                <div className="">
                    <a href="#" className="color_fff"> 
                        <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct28,2017 </a>
                    </div>
                <div className="">
                    <a className="article-medium link" href={this.state.topNews.url}>{this.state.topNews.title}</a>
                </div>
            </div>
    </div>
        )
    }
}

export default HeadlineEntertainment