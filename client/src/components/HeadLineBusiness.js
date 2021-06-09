import React, { Component } from 'react'

export class HeadLineBusiness extends Component {

    constructor(){
        super();
        this.state = {
            topNews : {}
            
        }
    }

    componentDidMount(){
        fetch('/topbusiness')
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
                            <i class="fa fa-clock-o"></i>&nbsp;&nbsp;Oct28,2017
                        </div>
                        <div className="">
                            <a className="article-medium link" href={"/business/"+this.state.topNews.id}>{this.state.topNews.title}</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default HeadLineBusiness
