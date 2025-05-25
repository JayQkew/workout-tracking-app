import './WeightRepsInput.css'

function WeightRepsInput(){
    return(
        <section className="set-input-container">
            <input type="number"/>
            <p>x</p>
            <input type="number"/>
            <button className="add-set-btn">+</button>
        </section>
    )
}

export default WeightRepsInput
