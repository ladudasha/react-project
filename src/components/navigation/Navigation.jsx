import s from "./Navigation.module.css";


function Navigation(props) {
    return (
        <article className={s.navigation}>
            <img className={s.img1} src={props.thumbnail} alt="img1" />
            <h5>San Francisco, California</h5>

        </article>
    
    );

}

export default Navigation;