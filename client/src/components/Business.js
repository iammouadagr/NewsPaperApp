import React, { Component } from 'react'
import ArticleOverView from './ArticleOverView';
import MostPopular from './MostPopular';
export class Business extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            headline :[]
        }
    }

    componentDidMount(){

        //API allArticles
        fetch('/business')
        .then(res => res.json())
        .then(data => this.setState({articles: data}))
        .then(console.log('Business news fetched'));

        //API Headline
        fetch('/topbusiness')
        .then(res => res.json())
        .then(data => this.setState({headline:data}))
        .then(console.log('Business headline fetched'));
  
    }
    render() {
        return (
            <div className="container-fluid pb-4 pt-4 paddding">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><i className="fa fa-home"></i><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Business</li>
                </ol>
                </nav>
            <div className="container paddding">
                <div className="row mx-0">
                { this.state.headline.map(singleNews=>{
                                            return <ArticleOverView key={singleNews.id} item={singleNews}/>
                                        })
                        }
                </div>
           
                <div className="row mx-0">
                    <div className="col-md-8 fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
                        <div>
                            <div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">News</div>
                        </div>
                       
                         { this.state.articles.map(singleNews=>{
                                            return  <ArticleOverView key={singleNews.id} item={singleNews}/>
                                        })
                        }
                      
                       
                    </div>
                    <MostPopular category ="business" />
                </div>
            </div>
        </div>
        )
    }
}

export default Business
