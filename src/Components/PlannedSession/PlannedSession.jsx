import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'

function PlannedSession(props){
    const { session, onNameChange } = props
    return(
        <section className="session-plan-card">
            <input 
                type="text" 
                value={session.name}
                onChange={e => onNameChange && onNameChange(e.target.value)}/>
            <ul className="exercise-list">
                {session.exercises.map((e, i) => <ExerciseSets exercise={e} key={i}/>)}
            </ul> 
            <button>Add Exercise</button>
        </section>
    )
}

export default PlannedSession