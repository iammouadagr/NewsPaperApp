import React, { Component } from 'react'
import ArticleOverView from './ArticleOverView';
import MostPopular from './MostPopular';
import '../style/pagination.css'
import SportsNews from '../components/SportsNews'
import Pagination from '@material-ui/lab/Pagination';
export class Sports extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            headline :[],
            page:1
        }
    }

    handleChange = (event, value) => {
        this.setState({page : value})
    };

    componentDidMount(){

        //API Headline
        fetch('/topsports')
        .then(res => res.json())
        .then(data => this.setState({headline:data}))
        .then(console.log('Sports headline fetched'));
  
    }

    render() {
        return (
            <div className="container-fluid pb-4 pt-4 paddding">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><i className="fa fa-home"></i><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Sports</li>
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
                               
                                <SportsNews key ={this.state.page} page={this.state.page}/>
                              
                                <div className="page-pagination">

                                    <Pagination color="standard" count={10} page={this.state.page} onChange={this.handleChange}/>


                                </div>
                              
                               
                            </div>
                            <MostPopular category ="sports" />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Sports
