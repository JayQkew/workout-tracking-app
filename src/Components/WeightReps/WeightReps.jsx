import './WeightReps.css'

function WeightReps(props){
    const { weightReps } = props;
    return (
        <p>{weightReps.weight} x {weightReps.reps}</p>
    )
}

export default WeightReps