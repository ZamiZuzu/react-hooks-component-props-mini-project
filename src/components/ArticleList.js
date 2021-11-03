import React from "react";
import Article from "./Article";
function ArticleList(props){
    const posts = props.posts
    const article = posts.map((post) => 
    <Article 
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
        />)
        console.log(posts)
    return(
        <main>
            {article}
        </main>
    )
}
export default ArticleList;