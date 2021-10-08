import s from "./Sort.module.css";


function Sort(props) {
    return (
        <article className={s.sort} >
            <img className={s.sortImg} src={props.thumbnail} alt="img1" />
            <h5 className={s.sortTitle}>{props.title}</h5>
        </article>
    );
}
export default Sort;