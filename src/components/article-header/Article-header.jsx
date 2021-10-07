import s from "./Article-header.module.css"

function ArticleHeader(props) {
    return (
      <h1 className={s.title}>{props.title}</h1>
    );
  }
  
  export default ArticleHeader;