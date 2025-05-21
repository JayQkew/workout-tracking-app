import './ExerciseCard.css'
import SetCard from '../SetCard/SetCard'
import SetInput from '../SetInput/SetInput'

function ExerciseCard({show = false}){
    const sets = [1, 2, 3]

    return(
        <section className="exercise-card">
            <h2>Exercise</h2>
            {show && <SetInput />}
            <ul className='set-list'>
                {sets.map((s, index) => <SetCard key={index}/>)}
            </ul>
        </section>
    )
}

export default ExerciseCard