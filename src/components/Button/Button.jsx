import "./Button.css"

function Button({label, type}){
return(
    <>
    <button className={`button ${type}`}>{label}</button>
    </>
)
}

export default Button;