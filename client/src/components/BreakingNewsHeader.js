import React, { Component } from 'react';
import BreakingNews from './BreakingNewsItems'
import  NewsTicker, { Directions } from 'react-advanced-news-ticker'
import '../style/BreakingNewsSection.css'

class BreakingNewsHeader extends Component {

    constructor(){
        super();
        this.state = {
            BreakingNews: [],
            active : false
        }
    }

    componentDidMount(){
        //API
        fetch('/breakingNews')
        .then(res => res.json())
        .then(data => this.setState({BreakingNews: data,active :true}))
        .then(console.log('Breaking news fetched'));
  
    }

    

    render() {
        if(this.state.active) {
            return (
                <div className="breaking-news-container" >
                        <div className="container">
                            <div className ="row">
                                <div className="col-12">
                                    <div className="breaking-news-wrapper ">
                                        <h5 className="breaking-news-title float-left">Breaking news</h5>
                                        <NewsTicker
                                            rowHeight = {20}
                                            maxRows = {1}
                                            speed = {550}
                                            direction = {Directions.DOWN}
                                            duration = {4000}
                                            autoStart = {true}
                                            pauseOnHover = {true}
                                            className = "breakingNews-ul"
                                            
                                            >
                                                { this.state.BreakingNews.map(singleNews=>{
                                                            return <BreakingNews key ={singleNews.id}
                                                            id ={singleNews.id}
                                                            title ={singleNews.title} 
                                                            url ={singleNews.url}  />
                                                       })
                                                }
                                                
                                                
                                           
                                            </NewsTicker>
                                        
    
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
    
                
            );
        }
        else {
            return (<div> no news</div>)
                
            
        }
        
      
    }
}

export default BreakingNewsHeader;
