function CountField({addValue}){
    return(
        <form action="">
            <input type="numbers" />
            <label htmlFor="numbers"></label>
            <p>{addValue}</p>
        </form>
    );
}

export default CountField;