import React, { Component } from 'react'
import '../style/mostPopular.css'

export class MostPopular extends Component {
    constructor(props){
        super(props);
        this.state = {
            category : props.category,
            articles: []
 
        }
    }
    componentDidMount(){

        //API allArticles
        fetch('/'+this.state.category+'MostPopular')
        .then(res => res.json())
        .then(data => this.setState({articles: data}))
        .then(console.log('Most popular news fetched'));

        
  
    }
    render() {
        return (
            
                <div className="col-md-3 animate-box fadeInRight animated-fast" data-animate-effect="fadeInRight">
                    <div className="clearfix"></div>
                    <div>
                        <div>
                            <div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">
                                Most Popular
                            </div>
                        </div>
                    </div>
                    {this.state.articles.map(singleArticle =>{
                        return (
                            <div key={singleArticle.id} className="row post-wrap pb-3">
                                
                                <div className="col-5 image-section align-self-center">
                                    <img src={singleArticle.urlToImage} alt="img" className="fh5co_most_trading"/>
                                </div>
                                <div className="col-7 paddding">
                                    <h5 className="most-popular-title">
                                        <a href={"/"+singleArticle.category+"-"+singleArticle.id}> {singleArticle.title}.</a>
                                    </h5>
                                    <span className="most-popular-date"> 
                                    <i className="fa fa-clock-o"></i>
                                    April 18, 2016
                                    </span>
                                </div>
                            
                            </div>
                        
                        )
                    })}
                   
                    
                    
                    
                </div>
            
        )
    }
}

export default MostPopular
