import React, { Component } from 'react'

export class BreakingNewsItems extends Component {
    constructor(){
        super();
        this.state = {
            Breakingnews: []
        }
    }

    

    componentDidMount(){
        //API
        fetch('/breakingNews')
        .then(res => res.json())
        .then(data => data.map(news=>{
           
            this.setState(prevState => ({
                Breakingnews: [...prevState.Breakingnews,news]
              }));
              console.log('Breaking news fetched', news);
            }));
  
    }

  
    
    render() {
        return (
            <button>
                {this.state.Breakingnews.map(news => {
                    return <a className="breaking-news-link" key={news.id} href={news.url}>{news.title}</a>
                    
                })}
               
            </button>
        )
    }
}

export default BreakingNewsItems
