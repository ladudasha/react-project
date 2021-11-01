import s from "./SectionTitle.module.css";

function SectionTitle(props) {
    return (
        <div className={s.sectionTitle}>
            <div className={s.container}>
                <div className={s.sectionTitleWrapper}>
                    <h2 className={s.blockTtitle}>{props.title}</h2>
                    <button className={s.btn}>See all</button>
                </div>
            </div>
        </div>
            );
}
export default SectionTitle;