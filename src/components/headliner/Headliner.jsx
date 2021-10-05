import s from './Headliner.module.css';

import likeIcon from "./../../assets/images/like-icon.svg";
import dislikeIcon from "./../../assets/images/dislike-icon.svg";

import Time from '../time/Time';
import Label from '../label/Label';
import ArticleHeader from '../article-header/Article-header';

function Headliner(props) {
    return (
        <article className={s.headliner}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail-img" />
        <div className={s.info}>
            <ArticleHeader title={props.title}/>
            <div className={s.rating}>
                <div className={s.like}>
                    <img className={s.likeIcon} img src={likeIcon} alt="" />
                    <span className={s.text}>10.8k</span>
                </div>
                <div className={s.dislike}>
                <img className={s.dislikeIcon} src={dislikeIcon} alt="" />
                    <span className={s.text}>1.4k</span>
                </div>
        

            </div>
            <div className={s.wrapper}>
                    <Label label={props.label}/>
                    <Time/>
                </div>
        </div>
        </article>
    );
}

export default Headliner;

