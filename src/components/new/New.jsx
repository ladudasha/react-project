import s from "./New.module.css";
import img1New from "./../../assets/images/New/image1.jpg"
import Time from "../time/Time";
import Label from "../label/Label";
import ArticleHeader from "../article-header/Article-header";

function New(props) {
    return (
        <article className={s.new}>
            <img className={s.img1New} src={props.thumbnail} alt="img1New" />
            <div className={s.wrapper}>
                <ArticleHeader title={props.title}/>
                <div className={s.box}>
                    <Label label={props.label}/>
                    <Time/>
                </div>
            </div>
        </article>
    );
}

export default New;