import './SessionExercise.css'
import WeightReps from '../WeightReps/WeightReps'
import SetInput from '../WeightRepsInput/WeightRepsInput'

import { useWorkout } from '../../Contexts/WorkoutContext'

function SessionExercise(props){
    const { exercise } = props
    const { session } = useWorkout();

    const ex = session.exercises.find(e => e.id === exercise.id) || exercise;
    return(
        <section className="exercise-card">
            <h2>{ ex.name }</h2>
            <p>0 / {ex.sets}</p>
            <SetInput exercise={exercise}/>
            <ul className='set-list'>
            </ul>
        </section>
    )
}

export default SessionExercise