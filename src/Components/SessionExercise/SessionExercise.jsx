import './SessionExercise.css'
import WeightReps from '../WeightReps/WeightReps'
import SetInput from '../WeightRepsInput/WeightRepsInput'

import { useWorkout } from '../../Contexts/WorkoutContext'

function SessionExercise(props){
    const {show = false, exercise} = props
    const { session } = useWorkout();

    const ex = session.exercises.find(e => e.id === exercise.id);
    return(
        <section className="exercise-card">
            <h2>{ ex.name }</h2>
            {show && <SetInput />}
            <ul className='set-list'>
                {[...Array(ex.sets)].map((s, i) => (
                    <WeightReps key={i}/>
                ))}
            </ul>
        </section>
    )
}

export default SessionExercise