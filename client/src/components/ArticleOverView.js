import React, { Component } from 'react'
import '../style/articleOverview.css'
export class ArticleOverView extends Component {
    constructor(props){
        super(props);
        this.state ={
            article: props.item
        }
    }
    render() {
        return (
            <div className="row pb-4">
                <div className="col-md-5">
                    <div className="fh5co_hover_news_img">
                        <div className="fh5co_news_img"><img src={this.state.article.urlToImage} alt="img"/></div>
                        <div></div>
                    </div>
                </div>
                <div className="col-md-7 post-content animate-box fadeInUp animated-fast">
                    <h4>
                        <a href={"/"+this.state.article.category+"-"+this.state.article.id} className="fh5co_magna py-2"> {this.state.article.title}</a> 
                    </h4>
                    <div className="post-source-date py-3">
                        <i className="fa fa-user"></i>
                        <span className="content">{this.state.article.source}</span>
                        <i className="fa fa-clock-o"></i>
                        <span className="content">April 18,2016</span>
                    </div>
                    <div className="fh5co_consectetur">
                        <p>
                        {this.state.article.description}.
                        </p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleOverView
