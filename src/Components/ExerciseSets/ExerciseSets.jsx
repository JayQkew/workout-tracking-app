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
        const _e = { ...exercise, sets: e.target.value };
        const s = { ...session, exercises: session.exercises.map(ex => ex.id === _e.id ? _e : ex)};
        setNewSession(s);
    }

    return(
        <li className='complete-set'>
            <input 
                type="text" 
                value={exercise.name} 
                onChange={handleExerciseChange}/>
            x
            <input 
                type="number" 
                value={exercise.sets}
                onChange={handleSetsChange}/>
        </li>
    )
}

export default ExerciseSets