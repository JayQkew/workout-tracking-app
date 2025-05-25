import './WeightRepsInput.css'
import { useWorkout } from '../../Contexts/WorkoutContext';

function WeightRepsInput(props){
    const { exercise } = props;
    const { session, addNewTrackToExercise } = useWorkout();

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

    function handleAddSet(e){
        e.preventDefault();
        const ex = session.exercises.find(ex => ex.id === exercise.id);
        const date = new Date();
        const today = date.getFullYear() + " " + (date.getMonth() + 1) + " " + date.getDate()
        if(!ex.track.some(t => t.date === today)){
            addNewTrackToExercise(ex);
        }

        let track = ex.track.find(t => t.date === today);
        track = {...track, sets: [...track.sets, { weight: weightReps.weight, reps: weightReps.reps }]};
        console.log(track);
    }

    return(
        <section className="set-input-container">
            <input type="number" onChange={handleWeightChange}/>
            <p>x</p>
            <input type="number" onChange={handleRepsChange}/>
            <button className="add-set-btn" onClick={handleAddSet}>+</button>
        </section>
    )
}

export default WeightRepsInput
