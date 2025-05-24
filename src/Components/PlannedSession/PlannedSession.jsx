import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'

import { useWorkout } from '../../Contexts/WorkoutContext';

function PlannedSession(props){
    const { session } = props
    const { setSessionName } = useWorkout();
    return(
        <section className="session-plan-card">
            <input 
                type="text" 
                value={session.name}
                onChange={e => {
                    const s = {...session, name: e.target.value}
                    setSessionName(s)
                }}/>
            <ul className="exercise-list">
                {session.exercises.map((e, i) => <ExerciseSets exercise={e} key={i}/>)}
            </ul> 
            <button>Add Exercise</button>
        </section>
    )
}

export default PlannedSession