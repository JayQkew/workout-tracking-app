import ExerciseSets from "../ExerciseSets/ExerciseSets"
import './PlannedSession.css'

import { useWorkout } from '../../Contexts/WorkoutContext';
import { ReactComponent as Trash } from '../../Styles/recycle-bin-2--remove-delete-empty-bin-trash-garbage.svg';

function PlannedSession(props){
    const { session } = props
    const { setNewSession, plan, setPlan } = useWorkout();

    function handleChange(e) {
        const s = {...session, name: e.target.value}
        setNewSession(s)
    }

    function handleDeleteSession() {
        const p = {...plan, sessions: plan.sessions.filter(s => s.id !== session.id)};
        setPlan(p);
    }

    function handleAddExercise() {
        const newExercise = {
            id: Date.now(),
            name: '',
            sets: ''
        };
        const updatedSession = {...session, exercises: [...session.exercises, newExercise]};
        setNewSession(updatedSession);
    }

    return(
        <section className="session-plan-card">
            {
                session.type === 'rest' ?
                <>
                    <h2 className="session-name rest-day">Rest</h2>
                    <button className="add-exercise-btn delete-rest" onClick={handleDeleteSession}>Delete Session</button>    
                </> 
                : <>
                    <div className="session-header">
                        <input 
                            type="text" 
                            value={session.name}
                            onChange={handleChange}
                        />
                        <button className="delete-btn" onClick={handleDeleteSession}>
                            <Trash />
                        </button>    
                    </div>
                    <ul className="exercise-list">
                        {session.exercises.map((e, i) => 
                            <ExerciseSets 
                                exercise={e}
                                session={session}
                                key={i}/>)}
                    </ul> 
                    <button className="add-exercise-btn to-session" onClick={handleAddExercise}>Add Exercise</button>
                </>
            }

        </section>
    )
}

export default PlannedSession