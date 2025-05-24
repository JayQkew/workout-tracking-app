import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'

import { useWorkout } from '../../Contexts/WorkoutContext';

function PlannedSession(props){
    const { session } = props
    const { setNewSession } = useWorkout();

    function handleChange(e) {
        const s = {...session, name: e.target.value}
        setNewSession(s)
    }
    return(
        <section className="session-plan-card">
            <input 
                type="text" 
                value={session.name}
                onChange={handleChange}/>
            <ul className="exercise-list">
                {session.exercises.map((e, i) => 
                    <ExerciseSets 
                        exercise={e}
                        session={session}
                        key={i}/>)}
            </ul> 
            <button>Add Exercise</button>
        </section>
    )
}

export default PlannedSession