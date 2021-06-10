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
        <div>
           <span>article : {id}</span>
           <p>category : {category}</p>
           
           <div className="row pb-4">
                <div className="col-md-5">
                    <div className="fh5co_hover_news_img">
                        <div className="fh5co_news_img"><img src={article.urlToImage} alt="img"/></div>
                        <div></div>
                    </div>
                </div>
                <div className="col-md-7 post-content animate-box fadeInUp animated-fast">
                    <h4>
                        <p  className="fh5co_magna py-2"> {article.title}</p> 
                    </h4>
                    <div className="post-source-date py-3">
                        <i className="fa fa-user"></i>
                        <span className="content">{article.source}</span>
                        <i className="fa fa-clock-o"></i>
                        <span className="content">April 18,2016</span>
                    </div>
                    <div className="fh5co_consectetur">
                        <p>
                        {article.description}.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails

