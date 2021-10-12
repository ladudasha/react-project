import s from "./Navigation.module.css"

function Navigation(props) {
    return (
    <div className={s.NavigationWrapper}>
        <div className={s.NavigationItem}>
            <img src={props.thumbnail} alt="" />
            <h3 className={s.navigationTitle}>{props.title}</h3>
        </div>
    </div>

    );
}
export default Navigation;