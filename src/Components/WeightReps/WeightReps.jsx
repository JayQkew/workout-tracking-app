import './WeightReps.css'

function WeightReps(props){
    const { weightReps } = props;
    return (
        <li className='complete-set'>
            <p>{weightReps.weight} x {weightReps.reps}</p>
        </li>
    )
}

export default WeightReps