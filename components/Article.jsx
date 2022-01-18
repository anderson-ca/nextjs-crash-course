import React from 'react'

const Article = ({articles}) => {
    return (
        <div>
            {articles.map(article => (
                <h3 key={article.title}>{article.title}</h3>
            ))}
        </div>
    )
}

export default Article
