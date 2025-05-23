import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'
function PlannedSession(props){
    const { session } = props
    const exercises = [1, 2, 3]
    return(
        <section className="session-plan-card">
            <h2>{session.name}</h2>
            <ul className="exercise-list">
                {session.exercises.map((e, index) => <ExerciseSets key={index}/>)}
            </ul> 
            <button>Add Exercise</button>
        </section>
    )
}

export default PlannedSession