import './PageContent.css'
import React, { useContext } from 'react'

import PageHeader from '../../Components/PageHeader/PageHeader'
import AllSessions from '../../Components/AllSessions/AllSessions'
import SessionExercise from '../../Components/SessionExercise/SessionExercise'

import { WorkoutContext } from '../../Contexts/WorkoutContext'

import plans from '../../workout-plans.json'
// import tracker from '../../workout-tracking.json'

function Session(){
    const { plan } = useContext(WorkoutContext);

    return(
        <main>
            <PageHeader page='Session'/>
            <section className="main-content">
                <aside className="side-cards">
                    <AllSessions plan={plan}/>
                </aside>
                <section className="main-cards">
                    {plan.sessions[0].exercises.map((e, index) => (
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