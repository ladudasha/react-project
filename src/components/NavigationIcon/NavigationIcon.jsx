import s from "./NavigationIcon.module.css";
import Icons from '../../assets/images/Navigation/sprite.svg'


export const Icon = ({ name, color, size }) => {
    return (
      <svg style={{position: 'absolute'}} width='24' viewBox="0 0 1000 500" fill={color}>
        <use href={Icons + `#${name}`} />
      </svg>
    )
   }

   export default Icon;