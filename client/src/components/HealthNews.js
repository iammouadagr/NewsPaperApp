import React, { Component } from 'react'
import ArticleOverView from './ArticleOverView';

export class HealthNews extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            page : props.page
            
        }

    }

    componentDidMount(){

        //API allArticles
        fetch('/health?page='+this.state.page+'&limit=11')
        .then(res => res.json())
        .then(result => this.setState({articles: result.data}))
        .then(console.log('Health news fetched'));
    }

    componentDidUpdate(prevProps, prevState) {
        

    }
    render() {
        return (
            <>
            
                { this.state.articles.map(singleNews=>{
                    return  <ArticleOverView key={singleNews.id} item={singleNews}/>
                        })
                }
            </>
        )
    }
}

export default HealthNews
