import React, { Component } from 'react'
import ArticleOverView from './ArticleOverView';

export class EntertainmentNews extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            page : props.page
            
        }

    }

    componentDidMount(){

        //API 
        fetch('/entertainment?page='+this.state.page+'&limit=11')
        .then(res => res.json())
        .then(result => this.setState({articles: result.data}))
        .then(console.log('Entertainment news fetched'));
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

export default EntertainmentNews
