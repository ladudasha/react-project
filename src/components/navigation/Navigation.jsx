import s from "./Navigation.module.css"
import Icons from "../../assets/images/Navigation/sprite.svg"

function Navigation(props) {
    return (
    <div className={s.NavigationWrapper}>
        <div className={s.NavigationItem}>

            <svg className={s.iconSvg}  width={props.width} height={props.height} viewBox={props.viewbox} fill={props.color}>
                <use href={Icons + `#${props.name}`} />
            </svg>
            <h3 className={s.navigationTitle}>{props.title}</h3>
        </div>
    </div>

    );
}
export default Navigation;

