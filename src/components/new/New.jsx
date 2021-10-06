import s from "./New.module.css";
import img1New from "./../../assets/images/New/image1.jpg"
import Time from "../time/Time";
import Label from "../label/Label";

function New() {
    return (
        <article className={s.new}>
            <img className={s.img1New} src={img1New} alt="img1New" />
            <div className={s.wrapper}>
                <h2 className={s.newTitle}>Travellers to pay more than $2K, Trudeau says</h2>
                <div className={s.box}>
                   <Label/>
                   <Time/>

                </div>


        </div>

        </article>
    );
}

export default New;