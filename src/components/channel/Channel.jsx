
import s from "./Channel.module.css"

function Channel(props) {
    return (
        <article className={s.channel}>
            <img className={s.channelImg1} src={props.thumbnail} alt="thumbnail-img" />
            <h4 className={s.channelTitle}>{props.title}</h4>
        </article>
    
    );
}

export default Channel;