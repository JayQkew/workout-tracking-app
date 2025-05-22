import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'
function PlannedSession(){
    const exercises = [1, 2, 3]
    return(
        <section className="session-plan-card">
            <h2>Session</h2>
            <ul className="exercise-list">
                {exercises.map((e, index) => <ExerciseSets key={index}/>)}
            </ul> 
            <button>Add Exercise</button>
        </section>
    )
}

export default PlannedSession