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






// import Icon from "../NavigationIcon/NavigationIcon";
// import s from "./Navigation.module.css"

// function Navigation(props) {
//     return (
//     <div className={s.NavigationWrapper}>
//         <div className={s.NavigationItem}>

//             <img className={s.navigationImg} src={props.thumbnail} alt="" />
//             <Icon name='icon-username' color="green"/>

                        
//             <h3 className={s.navigationTitle}>{props.title}</h3>
//         </div>
//     </div>

//     );

// }
// export default Navigation;