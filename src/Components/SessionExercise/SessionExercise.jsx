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
            <SetInput />
            <ul className='set-list'>
                {/* {[...Array(Number(ex.sets) || 0)].map((s, i) => (
                    <WeightReps key={i}/>
                ))} */}
            </ul>
        </section>
    )
}

export default SessionExercise