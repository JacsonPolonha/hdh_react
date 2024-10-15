import { ArticleStyles } from "./styles";

const Article = ({children}) => {
    return (
        <ArticleStyles>
            {children}
        </ArticleStyles>
    )
}

export default Article;