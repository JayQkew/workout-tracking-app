import SessionExercise from "../SessionExercise/SessionExercise"
import './SessionPlan.css'
function SessionPlan(){
    const exercises = [1, 2, 3]
    return(
        <section className="session-plan-card">
            <h2>Session</h2>
            <ul className="exercise-list">
                {exercises.map((e, index) => <SessionExercise key={index}/>)}
            </ul>
        </section>
    )
}

export default SessionPlan