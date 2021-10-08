import s from "./Form.module.css"

function Form() {
    return (
        <div> 
            <form>
                <label>
            <input className={s.form} type="search" name="googlesearch"  name="name" placeholder="Search for anything…"/>
        </label>
            </form>
            
        </div>
    
    );
}

export default Form;