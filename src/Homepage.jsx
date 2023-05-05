import { useEffect, useState } from "react"
import ArticleList from "./ArticleList"

export default function Homepage(){
    const [articles,setArticles]=useState([])
    const [offset,setOffset]=useState(0)
    const api = async()=>{
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start="+offset)
        const data = await response.json()
        setArticles(data)

    }
    useEffect(()=>{
        api()
    },[offset])
    return(
        <div>
            <button onClick={()=>{if(offset !== 0){setOffset(offset-10)}}}>Less</button>
            <button onClick={()=>{setOffset(offset+10)}}>More</button>
           <ArticleList articles={articles}/>
        </div>
    )
}