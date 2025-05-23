import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'

function PlannedSession(props){
    const { session } = props
    return(
        <section className="session-plan-card">
            <h2>{session.name}</h2>
            <ul className="exercise-list">
                {session.exercises.map((e, i) => <ExerciseSets exercise={e} key={i}/>)}
            </ul> 
            <button>Add Exercise</button>
        </section>
    )
}

export default PlannedSession