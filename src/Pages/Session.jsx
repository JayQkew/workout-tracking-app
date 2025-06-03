import '../Styles/PageLayout.css';

import PageHeader from '../Components/PageHeader/PageHeader'
import AllSessions from '../Components/AllSessions/AllSessions'
import SessionExercise from '../Components/SessionExercise/SessionExercise'

import { useWorkout } from '../Contexts/WorkoutContext'

function Session(){
    const { plan, session } = useWorkout();

    return(
        <main>
            <PageHeader page='Session'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllSessions plan={plan}/>
                </aside>
                <section className="main-cards">
                    <h2 className='session-name'>{session.name}</h2>
                    {session.exercises.map((e, index) => (
                        <SessionExercise 
                            key={index}
                            exercise={e}
                            show={index === 0}/>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Session;