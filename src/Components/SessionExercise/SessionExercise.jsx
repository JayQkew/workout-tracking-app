import './SessionExercise.css'
import WeightReps from '../WeightReps/WeightReps'
import SetInput from '../WeightRepsInput/WeightRepsInput'

function SessionExercise({show = false}){
    const sets = [1, 2, 3]

    return(
        <section className="exercise-card">
            <h2>Exercise</h2>
            {show && <SetInput />}
            <ul className='set-list'>
                {sets.map((s, index) => <WeightReps key={index}/>)}
            </ul>
        </section>
    )
}

export default SessionExercise