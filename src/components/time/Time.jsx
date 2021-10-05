import s from "./Time.module.css";
import clockIcon from "./../../assets/images/clock.svg";

function Time() {
    return (
      <div className={s.time}>
        <img className={s.timeIcon} src={clockIcon} alt="" />
        <span className={s.timeText}>2:00pm</span>
      </div>
    );
  }
  
  export default Time;