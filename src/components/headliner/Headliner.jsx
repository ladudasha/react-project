import s from './Headliner.module.css';

import likeIcon from "./../../assets/images/like-icon.svg";
import dislikeIcon from "./../../assets/images/dislike-icon.svg";
import clockIcon from "./../../assets/images/clock.svg";

function Headliner(props) {
    return (
        <article className={s.headliner}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail-img" />
        <div className={s.info}>
            <h1 className={s.title}>{props.title}</h1>
            <div className={s.rating}>
                <div className={s.like}>
                    <img className={s.likeIcon} img src={likeIcon} alt="" />
                    <span className={s.text}>10.8k</span>
                </div>
                <div className={s.dislike}>
                <img className={s.dislikeIcon} src={dislikeIcon} alt="" />
                    <span className={s.text}>1.4k</span>
                </div>
                <div className={s.wrapper}>
                    <span className={s.label}>{props.label}</span>
                    <div className={s.time}>
                        <img className={s.timeIcon} src={clockIcon} alt="" />
                        <span className={s.timeText}>2:00pm</span>
                    </div>
                </div>

            </div>

        </div>
        </article>
    );
}

export default Headliner;

