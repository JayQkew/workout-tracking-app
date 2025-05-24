import './PageContent.css'

import PageHeader from '../../Components/PageHeader/PageHeader'
import AllSessions from '../../Components/AllSessions/AllSessions'
import SessionExercise from '../../Components/SessionExercise/SessionExercise'

import plans from '../../workout-plans.json'
import tracker from '../../workout-tracking.json'

function Session(){
    return(
        <main>
            <PageHeader page='Session'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllSessions plan={plans[0]}/>
                </aside>
                <section className="main-cards">
                    {plans[0].sessions[0].exercises.map((e, index) => (
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