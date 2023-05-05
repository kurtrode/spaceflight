export default function ArticleList(props){
    return(
        <>
        {                   
            props.articles.map((article,index)=>{
              return(
              <div key={index}>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              </div>)
            })
          }
          </>
    )
}