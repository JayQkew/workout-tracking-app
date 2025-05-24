import './SessionExercise.css'
import WeightReps from '../WeightReps/WeightReps'
import SetInput from '../WeightRepsInput/WeightRepsInput'

function SessionExercise(props){
    const {show = false, exercise} = props

    return(
        <section className="exercise-card">
            <h2>{ exercise.name }</h2>
            {show && <SetInput />}
            <ul className='set-list'>
                {[...Array(exercise.sets)].map((s, i) => (
                    <WeightReps key={i}/>
                ))}
            </ul>
        </section>
    )
}

export default SessionExercise