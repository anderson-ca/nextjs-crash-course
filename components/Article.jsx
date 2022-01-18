import ArticleItem from './ArticleItem';
import articleStyle from '../styles/Article.module.css';

const Article = ({articles}) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map(article => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

export default Article
