import { useWorkout } from "../../Contexts/WorkoutContext"
import './ExerciseSets.css'

function ExerciseSets(props){
    const { exercise, session } = props
    const { setNewSession } = useWorkout();

    function handleExerciseChange(e) {
        const _e = {...exercise, name: e.target.value};
        const s = {...session, exercises: session.exercises.map(ex => ex.id === _e.id ? _e : ex)};
        setNewSession(s);
    }

    function handleSetsChange(e) {
        const value = e.target.value;
        const sets = value === '' ? '' : e.target.valueAsNumber;
        const _e = { ...exercise, sets: sets };
        const s = { ...session, exercises: session.exercises.map(ex => ex.id === _e.id ? _e : ex)};
        setNewSession(s);
    }

    function handleDeleteSet() {
        const s = { ...session, exercises: session.exercises.filter(ex => ex.id !== exercise.id) };
        setNewSession(s);
    }

    return(
        <li className='weight-reps'>
            <div className="exercise-inputs">
                <input 
                    type="text" 
                    value={exercise.name} 
                    onChange={handleExerciseChange}
                    placeholder="Exercise"/>
                <p>x</p>
                <input 
                    type="number" 
                    value={exercise.sets} 
                    onChange={handleSetsChange}
                    placeholder="0"/>
            </div>
            <button className="delete-exercise-btn delete-btn-1" onClick={handleDeleteSet}>x</button>
        </li>
    )
}

export default ExerciseSets