import './WeightRepsInput.css'

function WeightRepsInput(props){
    const { exercise } = props;

    const weightReps ={
        weight: 0,
        reps: 0
    }

    function handleWeightChange(e){
        weightReps.weight = Number(e.target.value);
        console.log(weightReps);
    }

    function handleRepsChange(e){
        weightReps.reps = Number(e.target.value);
        console.log(weightReps);
    }

    return(
        <section className="set-input-container">
            <input type="number" onChange={handleWeightChange}/>
            <p>x</p>
            <input type="number" onChange={handleRepsChange}/>
            <button className="add-set-btn">+</button>
        </section>
    )
}

export default WeightRepsInput
