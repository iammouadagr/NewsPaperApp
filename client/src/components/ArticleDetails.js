import React,{ useState, useEffect } from 'react'
import  { useParams } from "react-router-dom"
import  '../style/style.css'
 


const ArticleDetails = (props) => {

    const { id } = useParams(); 
    const [category, setCategory] = useState(props.category);
    const [article, setArticle] = useState({});


    useEffect(() => {

        setCategory(category);
        fetch("/"+category+"/"+id)
        .then(res => res.json())
        .then(json => json.map(data => {
            return setArticle(data)
        }))
     
       
        
    }, [id,category,article])

    return (
            <div className="container-fluid pb-4 pt-4 paddding">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><i className="fa fa-home"></i><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sports</li>
                    </ol>
                </nav>
                <div className="single">
                    <div id="fh5co-title-box" style={{ backgroundImage: `url(${article.urlToImage})`,
                                                        backgroundPosition : 50% 90.5}} 
                                                        data-stellar-background-ratio="0.5">
                        <div class="overlay"></div>
                        <div class="page-title">
                            
                            <span>January 1, 2018</span>
                            <h2>{article.title}</h2>
                        </div>
                    </div>

                    <div id="fh5co-single-content" class="container-fluid pb-4 pt-4 paddding">
                            <div class="container paddding">
                                <div class="row mx-0">
                                    <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
                                        <p>
                                            {article.content}
                                        </p>
                                    </div>
                                    <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                      
                                        <div>
                                            <div class="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Most Popular</div>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default ArticleDetails

