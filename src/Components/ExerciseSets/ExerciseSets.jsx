import { useWorkout } from "../../Contexts/WorkoutContext"

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
        <li className='complete-set'>
            <div>
                <input type="text" value={exercise.name} onChange={handleExerciseChange}/>
                x
                <input type="number" value={exercise.sets} onChange={handleSetsChange}/>
            </div>
            <button onClick={handleDeleteSet}>x</button>
        </li>
    )
}

export default ExerciseSets