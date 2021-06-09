import React,{ useState, useEffect } from 'react'
import  { useParams } from "react-router-dom";



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
           source : {article.source}
            
        </div>
    )
}

export default ArticleDetails

